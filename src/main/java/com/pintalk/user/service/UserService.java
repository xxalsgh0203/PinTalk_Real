package com.pintalk.user.service;

import com.pintalk.user.mapper.UserMapper;
import com.pintalk.user.model.UserMember;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    public UserMapper mapper;

    Logger logger = LoggerFactory.getLogger(getClass().getName());

    public List<UserMember> userList() throws Exception{
        logger.debug("===================================================================");
        logger.debug("UserService.userList 실행쿼리 결과 값  : " + mapper.getUserList());
        logger.debug("===================================================================");
        return mapper.getUserList();
    }

}
