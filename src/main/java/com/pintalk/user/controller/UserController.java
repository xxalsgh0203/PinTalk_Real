package com.pintalk.user.controller;

import com.function.Util;
import com.pintalk.user.entity.UserMember;
import com.pintalk.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

//@Controller
@RestController
public class UserController {

    private Logger log = LoggerFactory.getLogger(getClass().getName());

    @Autowired
    UserService service;

    Util util = new Util();

    //유저 리스트
    @GetMapping("/userMemberList")
    public List getUserMemberList(
            @PageableDefault(page = 0, size = 10, sort = "no", direction = Sort.Direction.DESC) Pageable pageable
            ,UserMember userMember, String searchKeyword) {

        Page<UserMember> list = null;

//        HashMap member = util.convertObjectToMap(userMember);
//        System.out.println("searchKeyword : " + searchKeyword);
//        System.out.println("member : " + member);
//        if(searchKeyword == null || searchKeyword.equals("")) {
//            System.out.println("true");
            list = service.userMemberList(pageable);
//        } else {
//            System.out.println("false");
//            list = service.userMemberListSearch(member, pageable);
//        }

        System.out.println("listlistlistlistlistlistlist : " + list);
        int currPage = list.getPageable().getPageNumber();
        int totalPage = list.getTotalPages();
        int startPage = (int) Math.floor(currPage / 10) * 10;
        int endPage = Math.min(totalPage, startPage + 10);


        List result_li = new ArrayList();
        HashMap result_hs = new HashMap();

        result_hs.put("currPage", currPage);
        result_hs.put("startPage", startPage);
        result_hs.put("endPage", endPage);
        result_hs.put("totalPage", totalPage);
        result_li.add(list.getContent());
        result_li.add(result_hs);

        return result_li;
    }

    @PostMapping("/userMemberListForm")
    public List getUserMemberList( @PageableDefault(page = 0, size = 10, sort = "no", direction = Sort.Direction.DESC) Pageable pageable, @RequestBody UserMember userMember) throws ParseException {
        Page<UserMember> list = null;

        System.out.println("============POST============");

        HashMap member = util.convertObjectToMap(userMember);
        System.out.println("member : " + member);

        String signDate = (String) member.get("signDate");
        String modifyDate = (String) member.get("modifyDate");
        member.put("signDate",util.setDateFormatStr(signDate,"yyyy-MM-dd","yyyyMMdd"));
        member.put("modifyDate",util.setDateFormatStr(modifyDate,"yyyy-MM-dd","yyyyMMdd"));

        System.out.println("============================");


        list = service.userMemberListSearch(member, pageable);
        System.out.println("list : " + list);
        int currPage = list.getPageable().getPageNumber();
        int totalPage = list.getTotalPages();
        int startPage = (int) Math.floor(currPage / 10) * 10;
        int endPage = Math.min(totalPage, startPage + 10);


        List result_li = new ArrayList();
        HashMap result_hs = new HashMap();

        result_hs.put("currPage", currPage);
        result_hs.put("startPage", startPage);
        result_hs.put("endPage", endPage);
        result_hs.put("totalPage", totalPage);
        result_li.add(list.getContent());
        result_li.add(result_hs);

        System.out.println("result_li : " +result_li);
        return result_li;
    }

    //유저상세 페이지
    @GetMapping("/userMemberDetail/{id}")
    public List userMemberDetail(Model model, @PathVariable Integer id) {

        List<UserMember> result_li = new ArrayList();

        result_li.add(service.userMemberDetail(id));
        return result_li;
    }

    //유저 신규 처리
    @GetMapping("/userMemberInsert")
    public void getUserMemberInsert(UserMember userMember) {
        service.userMemberInsert(userMember);
    }
}
