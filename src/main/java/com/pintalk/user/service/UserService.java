package com.pintalk.user.service;

import com.pintalk.ups.model.UpsMember;
import com.pintalk.user.mapper.UserMapper;
import com.pintalk.user.model.UserMember;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    public UserMapper mapper;

    Logger logger = LoggerFactory.getLogger(getClass().getName());

    public int getUserListSeq(){
        int seq= mapper.getUserListSeq();
        return seq;
    }

    public List<UserMember> userList() throws Exception {
        logger.debug("===================================================================");
        logger.debug("UserService.userList 실행쿼리 결과 값  : " + mapper.getUserList());
        logger.debug("===================================================================");
        return mapper.getUserList();
    }

    public int getUserInsert(HashMap model) throws Exception {
        if (model.get("ssn1") == null && model.get("ssn2") == null) {
            if (model.get("ssn") != null) {
                String ssn = (String) model.get("ssn");
                model.put("ssn1", ssn.substring(0, 6));
                model.put("ssn2", ssn.substring(7, 13));
            }
        } else if(model.get("ssn") == null){
            String ssn = (String) model.get("ssn1")+model.get("ssn2");
            model.put("ssn",ssn);
        }
        logger.debug("===================================================================");
        logger.debug("UserService.getUserInsert 실행쿼리 결과 값  : " + mapper.userMemberInsert(model));
        logger.debug("===================================================================");
        return mapper.userMemberInsert(model);
    }
}
