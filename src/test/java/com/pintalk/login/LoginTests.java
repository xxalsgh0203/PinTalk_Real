package com.pintalk.login;

import com.function.Util;
import com.pintalk.common.entity.Param;
import com.pintalk.login.entity.Login;
import com.pintalk.login.repository.LoginRepository;
import com.pintalk.user.entity.UserMember;
import com.pintalk.user.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Arrays;
import java.util.Optional;

@SpringBootTest
public class LoginTests {

    @Autowired
    LoginRepository repository;

    @Autowired
    UserRepository userRepository;

    Util util = new Util();

    @Test
    public String passwordEncoder(String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String result = passwordEncoder.encode(password);
        return result;
    }


    @Test
    public void passwordEncoderTest() {
        String password = "ss";
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String a = passwordEncoder.encode(password);

        UserMember userMember = userRepository.findById(301).get();
        System.out.println(userMember);
        System.out.println("a : " + a);
        if(passwordEncoder.matches("ss",userMember.getPassword())){
            System.out.println("패스워드는 맞습니다.");
        } else {
            System.out.println("패스워드가 틀립니다.");
        }
    }
    
    @Test
    public void passwordChk(){
        LoginTests tests = new LoginTests();
        UserMember userMember = userRepository.findById(301).get();
        String password = "ss";
        String s = tests.passwordEncoder(password);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if(passwordEncoder.matches("ss",userMember.getPassword())){
            System.out.println("비밀번호가 맞습니다.");
        } else {
            System.out.println("비밀번호가 틀립니다.");
            
        }
    }
}
