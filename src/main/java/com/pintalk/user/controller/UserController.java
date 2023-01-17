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

    /**
     * 유저 리스트화면
     * @param pageable
     * @return
     */
    @GetMapping("/userMemberList")
    public List getUserMemberList(
            @PageableDefault(page = 0, size = 10, sort = "no", direction = Sort.Direction.DESC) Pageable pageable
            ) {
        log.info("==================GetMapping.UserController.getUserMemberList.START==================");

        Page<UserMember> list = null;

        list = service.userMemberList(pageable);
        log.info("검색 리스트 : " + list);
        log.info("=======================================");
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

        log.info("최종 결과 리턴 값 : " + result_li);
        log.info("==================GetMapping.UserController.getUserMemberList.END==================");
        return result_li;
    }

    /**
     * 유저 검색화면 검색버튼 선택 시
     * @param pageable
     * @param userMember
     * @return
     * @throws ParseException
     */
    @PostMapping("/userMemberListForm")
    public List getUserMemberList( @PageableDefault(page = 0, size = 10, sort = "no", direction = Sort.Direction.DESC) Pageable pageable, @RequestBody UserMember userMember) throws ParseException {
        log.info("==================PostMapping.UserController.getUserMemberList.START==================");
        log.info("============POST============");
        HashMap member = util.convertObjectToMap(userMember);
        log.info("SearchList Parameter : " + member);
        log.info("============================");

        Page<UserMember> list = service.userMemberListSearch(member, pageable);

        //페이징 처리
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

        log.info("============================");
        log.info("최종 결과값 : " +result_li);
        log.info("==================PostMapping.UserController.getUserMemberList.END==================");
        return result_li;
    }

    /**
     * 유저상세 페이지
     * @param id
     * @return
     */
    @GetMapping("/userMemberDetail/{id}")
    public List userMemberDetail(@PathVariable Integer id) {
        log.info("==================GetMapping.UserController.userMemberDetail.START==================");

        List<UserMember> result_li = new ArrayList();

        result_li.add(service.userMemberDetail(id));

        log.info("============================");
        log.info("최종 결과값 : " +result_li);
        log.info("==================GetMapping.UserController.userMemberDetail.END==================");
        return result_li;
    }

    /**
     * 유저 신규 처리
     * @param userMember
     */
    @GetMapping("/userMemberInsert")
    public void getUserMemberInsert(UserMember userMember) {

        log.info("==================GetMapping.UserController.getUserMemberInsert.START==================");

        log.info("최종 결과값 : " + service.userMemberInsert(userMember));
        log.info("==================GetMapping.UserController.getUserMemberInsert.END==================");
    }
}
