package com.pintalk.user.service;

import com.pintalk.user.entity.UserMember;
import com.pintalk.user.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.stereotype.Service;


@Service
@EnableJpaAuditing
public class UserService {

    @Autowired
    public UserRepository repository;

    Logger log = LoggerFactory.getLogger(getClass().getName());

    //유저 전체 리스트
    public Page<UserMember> userMemberList(Pageable pageable) {
        return repository.findAll(pageable);
    }
    //유저 개인 리스트
    public Page<UserMember> userMemberListSearch(String searchKeyword, Pageable pageable) {
        return repository.findErpMemberBy(searchKeyword,pageable);
    }

    //유저상세 페이지
    public UserMember userMemberDetail(Integer id) {
        return repository.findById(id).get();
    }

    //유저 신규 등록
    public UserMember userMemberInsert(UserMember userMember) {
        return repository.save(userMember);
    }


}
