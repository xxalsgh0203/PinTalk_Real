package com.pintalk.ups.controller;

import com.pintalk.ups.model.UpsMember;
import com.pintalk.ups.service.UpsService;
import com.pintalk.user.model.UserMember;
import com.pintalk.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;

@RestController
public class UpsController {

    private Logger logger = LoggerFactory.getLogger(getClass().getName());

    @Autowired
    UpsService upsService;

    @Autowired
    UserService userService;


    //대출자 전체 리스트
    @GetMapping("/upsMemberList")
    public List getUpsMemberList() throws Exception {
        List<UpsMember> li_result = upsService.getUpsMemberList();

        logger.debug("===================================================================");
        logger.debug("UpsController.getUpsMemberList 리스트 결과값  : " + li_result);
        logger.debug("===================================================================");

        return li_result;
    }
    @RequestMapping("/upsMemberInsert")
    public String getUpsMemberInsert(UpsMember model) throws Exception {


        upsService.getUpsInsert(model);


        return "redirect:/upsMemberInsert";
    }
//    @RequestMapping("/userMemberUpdate")
//    public int getUpsModify(UpsMember model,@Param("user_no") int user_no) throws Exception {
//        model.setNo(user_no);
//        int li_result = upsService.getUpsModify(model);
//
//        logger.debug("===================================================================");
//        logger.debug("UserController.getUserModify 리스트 결과값  : " + li_result);
//        logger.debug("===================================================================");
//
//        return li_result;
//    }
}
