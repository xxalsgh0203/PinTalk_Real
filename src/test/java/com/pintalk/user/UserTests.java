package com.pintalk.user;

import com.pintalk.user.entity.UserMember;
import com.pintalk.user.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
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
}
