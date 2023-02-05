package com.pintalk.websecurityconfig;

import com.function.WebSecurityConfig;
import com.pintalk.user.entity.UserMember;
import com.pintalk.user.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.stream.Collectors;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


@SpringBootTest
public class WebSecurityConfigTest {

    WebSecurityConfig webSecurityConfig = new WebSecurityConfig();

    @Autowired
    UserRepository userRepository;

    @Test
    public void encode(){

        String rawPw = "!a1234567";
        String pw = webSecurityConfig.getPasswordEncoder().encode(rawPw);
        assertThat(rawPw).isNotEqualTo(pw);

        System.out.println("pw : " + pw);
//        String encodePw = webSecurityConfig.getPasswordEncoder().encode()
    }

    @Test
    public void encodeChk(){

        String id = "12sdasd";
        String rawPw = "!a1234567";
        String pw = webSecurityConfig.getPasswordEncoder().encode(rawPw);


        List<UserMember> list = userRepository.findUserMemberByIdLike(id);
        String dbPw = list.stream().map(userMember -> userMember.getPassword()).collect(Collectors.toList()).toString();

        assertThat(rawPw).isNotEqualTo(pw);

        System.out.println("pw : " + pw);
        System.out.println("dbPw : " + dbPw);

        System.out.println(webSecurityConfig.getPasswordEncoder().matches(rawPw,pw));
//        String encodePw = webSecurityConfig.getPasswordEncoder().encode()
    }
}
