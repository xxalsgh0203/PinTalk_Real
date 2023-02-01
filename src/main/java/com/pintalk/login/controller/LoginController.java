package com.pintalk.login.controller;

import com.pintalk.common.entity.Param;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class LoginController {

    @RequestMapping(path = "/login",method = RequestMethod.POST)
    public List loginCheck(@RequestBody Param param) {

        System.out.println(param);
        List result_list = new ArrayList();

        try {



        } catch (Exception e){
            e.printStackTrace();
        }

        return result_list;
    }
}