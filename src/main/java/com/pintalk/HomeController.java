package com.pintalk;

import com.pintalk.user.mapper.UserMapper;
import com.pintalk.user.model.UserMember;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class HomeController {
    private UserMapper mapper;

    @GetMapping("/api/hello")
    public List<String> Hello(){
        System.out.println("Hello : START ");
        return Arrays.asList("서버포트 8080","리액트 포트 3000");
    }

//    @GetMapping("/user/{id}")
//    public UserMember getUserMember(@PathVariable("id") int id) {
//        System.out.println("id : " + id);
//        System.out.println();
//        System.out.println("mapper : " + mapper.getUserMember(id));
//        return mapper.getUserMember(id);
//    }
}
