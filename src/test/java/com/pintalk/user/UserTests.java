package com.pintalk.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.function.Util;
import com.pintalk.user.entity.UserMember;
import com.pintalk.user.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashMap;

//@EnableJpaAuditing
@SpringBootTest
public class UserTests {

    @Autowired
    UserRepository userRepository;

    //유저 신규등록 테스트
    @Test
    public void test(){
        String ssn = "1234561234567";

        UserMember userMember = UserMember.builder().id("miss").ssn(ssn).ssn1(ssn.substring(0,6)).ssn2(ssn.substring(7,13)).build();
        userRepository.save(userMember);

    }


    @Test
    public void test1(){
        Util util = new Util();
        HashMap map = new HashMap();
        map.put("ssn","1234561234567");

        UserMember userMember = new UserMember();

        ObjectMapper objectMapper = new ObjectMapper();

//        UserMember userMember = util.convertObjectToMap(map);
        System.out.println(objectMapper.convertValue(map, UserMember.class));
    }
    @Test
    public void test2() throws ParseException {

        Util util = new Util();
        System.out.println();

    }
}
