package com.pintalk.user.controller;

import com.pintalk.user.mapper.UserMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class UserController {

    private UserMapper mapper;

    public UserController(UserMapper mapper) {
        this.mapper = mapper;
    }

    HashMap result = new HashMap();

    @GetMapping("/user/{id}")
    public String getUserMember(@PathVariable("id") String id) {
        result = mapper.getUserMember(id);
        System.out.println("hm_result : " + result);

        return (String) result.get("id");
    }
}
