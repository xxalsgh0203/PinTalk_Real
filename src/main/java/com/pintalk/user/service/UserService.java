package com.pintalk.user.service;

import com.function.Util;
import com.pintalk.user.entity.UserMember;
import com.pintalk.user.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.stereotype.Service;

import java.util.HashMap;


@Service
@EnableJpaAuditing
public class UserService {

    @Autowired
    public UserRepository repository;

    Util util = new Util();

    Logger log = LoggerFactory.getLogger(getClass().getName());

    //유저 전체 리스트
    public Page<UserMember> userMemberList(Pageable pageable) {
        return repository.findAll(pageable);
    }


    //유저 개인 리스트
    public Page<UserMember> userMemberListSearch(HashMap userMember, Pageable pageable) {

        System.out.println("userMember : " + userMember);



        String gender = userMember.get("gender") == null ? "" : (String) userMember.get("gender");
        String name = userMember.get("name") == null ? "" : (String) userMember.get("name");
        String year = userMember.get("year") == null ? "" : (String) userMember.get("year");
        String month = userMember.get("month") == null ? "" : (String) userMember.get("month");
        String day = userMember.get("day") == null ? "" : (String) userMember.get("day");
        String phone1 = userMember.get("phone1") == null ? "" : (String) userMember.get("phone1");
        String phone2 = userMember.get("phone2") == null ? "" : (String) userMember.get("phone2");
        String phone3 = userMember.get("phone3") == null ? "" : (String) userMember.get("phone3");
        String address1 = userMember.get("address1") == null ? "" : (String) userMember.get("address1");
        String email = userMember.get("email") == null ? "" : (String) userMember.get("email");
        String status = userMember.get("status") == null ? "" : (String) userMember.get("status");
        String signDateStart = userMember.get("signDate") == null ? "" : (String) userMember.get("signDate");
        String signDateEnd = userMember.get("signDate") == null ? "" : (String) userMember.get("signDate");
        String modifyDateStart = userMember.get("modifyDate") == null ? "" : (String) userMember.get("modifyDate");
        String modifyDateEnd = userMember.get("modifyDate") == null ? "" : (String) userMember.get("modifyDate");

        Page<UserMember> list = repository.findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContainingAndSignDateBetweenAndModifyDateBetween
                (gender, name, year, month, day, phone1, phone2, phone3, address1, email, status, signDateStart, signDateEnd, modifyDateStart, modifyDateEnd, pageable);

        return list;
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
