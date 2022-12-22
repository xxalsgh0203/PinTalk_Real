package com.pintalk;

import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@RestController
public class HomeController {
    @GetMapping("/api/hello")
    public List<String> Hello(){
        System.out.println("Hello : START ");
        return Arrays.asList("서버포트 8080","리액트 포트 3000");
    }
}
