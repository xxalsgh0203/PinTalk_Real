package com.pintalk.login.service;

import com.function.Util;
import com.pintalk.common.entity.Param;
import com.pintalk.login.entity.Login;
import com.pintalk.login.repository.LoginRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
//@EnableJpaAuditing
public class LoginService {

    @Autowired
    public LoginRepository repository;

    Util util = new Util();

    Logger log = LoggerFactory.getLogger(getClass().getName());

//    public Login login(Param param) {
//        repository.findLoginByIdContainsAndPasswordContains(param);
//    }

}
