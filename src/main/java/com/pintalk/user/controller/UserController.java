package com.pintalk.user.controller;

import com.pintalk.user.model.UserMember;
import com.pintalk.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;

@Controller
public class UserController {

    private Logger logger = LoggerFactory.getLogger(getClass().getName());


    @Autowired
    private UserService userService;

//    public void setUserService(UserService userService) {this.userService = userService;}

    @GetMapping("/user")
    public List getUserMemberList() throws Exception {
        List<UserMember> li_result = userService.userList();

        logger.debug("===================================================================");
        logger.debug("UserController.getUserMemberList 리스트 결과값  : " + li_result);
        logger.debug("===================================================================");

        return li_result;
    }
}
