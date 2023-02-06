package com.pintalk.websecurityconfig;

import com.function.WebSecurityConfig;
import com.pintalk.user.entity.UserMember;
import com.pintalk.user.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.*;
import org.springframework.util.Assert;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


@SpringBootTest
public class WebSecurityConfigTest {

    WebSecurityConfig webSecurityConfig = new WebSecurityConfig();
    private PasswordEncoder passwordEncoder;
    @Autowired
    UserRepository userRepository;

    @Test
    public void encode(){

        String rawPw = "!a12345267";
        String pw = webSecurityConfig.getPasswordEncoder().encode(rawPw);
        assertThat(rawPw).isNotEqualTo(pw);

        System.out.println("pw : " + pw);
//        String encodePw = webSecurityConfig.getPasswordEncoder().encode()
    }

    @Test
    public void encodeChk(){

        String id = "id2";
        String rawPw = "!a1234567";
        String pw = webSecurityConfig.getPasswordEncoder().encode(rawPw);


        List<UserMember> list = userRepository.findUserMemberByIdLike(id);
        String dbPw = list.stream().map(userMember -> userMember.getPassword()).collect(Collectors.toList()).toString();

        assertThat(rawPw).isNotEqualTo(pw);

        System.out.println("pw : " + pw);
        System.out.println("dbPw : " + dbPw);

        System.out.println(webSecurityConfig.getPasswordEncoder().matches(pw,dbPw));
//        String encodePw = webSecurityConfig.getPasswordEncoder().encode()
    }



    @Test
    public void 암호변환기ID가_없는경우는_다음과같이() {
        Map<String, PasswordEncoder> encoders = new HashMap<>();
        String idForEncode = "bcrypt";
        encoders.put(idForEncode, new BCryptPasswordEncoder());
        encoders.put("noop", NoOpPasswordEncoder.getInstance());
        encoders.put("pbkdf2", new Pbkdf2PasswordEncoder());
        encoders.put("sha256", new StandardPasswordEncoder());

        passwordEncoder = new DelegatingPasswordEncoder(idForEncode, encoders);
        String password = "!a1234567";
        String encPassword = passwordEncoder.encode(password);
        System.out.println(encPassword);

    }

    @Test
    public void 사용한_비밀번호변환기_접두사가없으면오류발생() {
        String password = "!a123224567";
        String encPassword = "$2a$10$w3pQhdr9GAtfpqafSerbpuw5eUObAjCb1GH/m79iAf2yHvyaTZWdS";

        String ss = webSecurityConfig.getdeDelegatingPasswordEncoder().encode(password);
        System.out.println((webSecurityConfig.getdeDelegatingPasswordEncoder().matches(password, encPassword)));
    }

    @Test
    public void ss (){
        String password = "!a1234567";
        String encPassword = "$2a$10$ExkuxRUdj/HKCsatLknlV.2olwX4l6o0nzbUt9PA.Wf8Ba8rvAsBy";   // pbkdf2
//        String encPassword = "$2a$10$VYibxpk7zJ.Yuq6qP6txvuec9B3aug8HtYcwjGuNbgHbpSBJ6TqQC";   // pbkdf2

        String a = webSecurityConfig.getdeDelegatingPasswordEncoder().encode(password);

        System.out.println("a : " + a);
        System.out.println(!webSecurityConfig.getdeDelegatingPasswordEncoder().matches(a,encPassword));
//        System.out.println(!webSecurityConfig.getdeDelegatingPasswordEncoder().matches(a,encPassword));
    }

    @Test
    public void getSalt(){
//        String password = "dss";
        String input = "hello world";
        String encoded = webSecurityConfig.getPasswordEncoder().encode(input);


        System.out.println(webSecurityConfig.getPasswordEncoder().matches(input, encoded));

    }
}
