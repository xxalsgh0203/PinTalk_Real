package com.pintalk.user.controller;

import com.function.Util;
import com.pintalk.common.Service.ComCodeService;
import com.pintalk.common.entity.ComCode;
import com.pintalk.user.entity.Param;
import com.pintalk.user.entity.UserMember;
import com.pintalk.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.*;

@RestController
public class UserController {

    private Logger log = LoggerFactory.getLogger(getClass().getName());

    @Autowired
    UserService userservice;

    @Autowired
    ComCodeService comCodeService;

    Util util = new Util();

    /**
     * 회원 리스트화면 (조회)
     * @param pageable
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, path = {"/userMemberList","/userMemberListForm"})
    public List getUserMemberList(
            @PageableDefault(page = 0, size = 10, sort = "no", direction = Sort.Direction.DESC) Pageable pageable
            ,Param param
    ) throws ParseException {
        log.info("==================GetMapping.UserController.getUserMemberList.START==================");

        Page<UserMember> list = null;

        if(param.getParamObject(param) == null){
            list = userservice.userMemberList(pageable);
        } else {
            HashMap map = util.convertObjectToMap(param);
            list = userservice.userMemberListSearch(map, pageable);
        }

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
     * 회원상세 페이지
     * @param no
     * @return
     */
    @GetMapping("/userMemberDetail/{no}")
    public List userMemberDetail(@PathVariable int no) {
        log.info("==================GetMapping.UserController.userMemberDetail.START==================");

        List<UserMember> result_li = new ArrayList();

        result_li.add(userservice.userMemberDetail(no));

        log.info("============================");
        log.info("최종 결과값 : " +result_li);
        log.info("==================GetMapping.UserController.userMemberDetail.END==================");
        return result_li;
    }
//
//    /**
//     * 회원상세 페이지
//     * @param id
//     * @return
//     */
//    @GetMapping("/userMemberDetail/{id}")
//    public List userMemberDetail(@PathVariable Integer id) {
//        log.info("==================GetMapping.UserController.userMemberDetail.START==================");
//
//        List<UserMember> result_li = new ArrayList();
//
//        result_li.add(userservice.userMemberDetail(id));
//
//        log.info("============================");
//        log.info("최종 결과값 : " +result_li);
//        log.info("==================GetMapping.UserController.userMemberDetail.END==================");
//        return result_li;
//    }
    /**
     * 회원 신규 화면
     * @throws ParseException
     */
    @RequestMapping(value = "/userMemberInsertView", method = RequestMethod.GET)
    public HashMap getUserMemberInsertView() {
        log.info("==================GET.UserController.getUserMemberInsertView.START==================");

        HashMap resultMap = new HashMap();



        log.info("==================GET.UserController.getUserMemberInsertView.END==================");

        return resultMap;
    }
    /**
     * 회원 신규 처리
     * @param resMap
     * @throws ParseException
     */
    @RequestMapping(value = "/userMemberInsert", method = RequestMethod.POST)
    public boolean getUserMemberInsert(@RequestBody HashMap resMap) throws ParseException {
        log.info("==================POST.UserController.getUserMemberInsert.START==================");

        boolean result = userservice.userMemberInsert(resMap);

        log.info("최종 결과 반환 : " + result);
        log.info("==================POST.UserController.getUserMemberInsert.END==================");

        return result;
    }
}
