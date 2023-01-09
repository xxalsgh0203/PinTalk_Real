package com.pintalk.user.service;

import com.pintalk.user.entity.UserMember;
import com.pintalk.user.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    public UserRepository mapper;

    Logger log = LoggerFactory.getLogger(getClass().getName());

    //유저 전체 리스트
    public Page<UserMember> userMemberList(Pageable pageable) throws Exception {
        return mapper.findAll(pageable);
    }
    //유저 개인 리스트
    public Page<UserMember> userMemberListSearch(String searchKeyword, Pageable pageable) throws Exception {
        return mapper.findErpMemberBy(searchKeyword,pageable);
    }

    //유저 신규 등록
    public UserMember userMemberInsert(UserMember userMember) throws Exception {
        return mapper.save(userMember);
    }


}
