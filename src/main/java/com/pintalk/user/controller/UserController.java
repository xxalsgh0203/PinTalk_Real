package com.pintalk.user.controller;

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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

//@Controller
@RestController
public class UserController {

    private Logger log = LoggerFactory.getLogger(getClass().getName());

    @Autowired
    UserService service;

    //유저 리스트
    @GetMapping("/userMemberList")
    public List getUserMemberList(
            @PageableDefault(page = 0, size = 10, sort = "no", direction = Sort.Direction.DESC) Pageable pageable,
            String searchKeyWord) {

        Page<UserMember> list = null;




        if (searchKeyWord == null) {
            list = service.userMemberList(pageable);
        } else {
            list = service.userMemberListSearch(searchKeyWord, pageable);
        }



        int currPage = list.getPageable().getPageNumber();
        int totalPage = list.getTotalPages();
        int startPage = (int)Math.floor(currPage / 10) * 10;
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

    //유저상세 페이지
    @GetMapping("/userMemberDetail")
    public String userMemberDetail(Model model, Integer id) {

        model.addAttribute("UserMemberList",service.userMemberDetail(id));

        return "/userMemberDetail";
    }

    //유저 신규 처리
    @GetMapping("/userMemberInsert")
    //유저 신규 등록
    public void getUserMemberInsert(UserMember userMember) {
        service.userMemberInsert(userMember);
    }
}
