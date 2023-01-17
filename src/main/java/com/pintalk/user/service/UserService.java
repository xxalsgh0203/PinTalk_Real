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

import java.text.ParseException;
import java.util.HashMap;


@Service
@EnableJpaAuditing
public class UserService {

    @Autowired
    public UserRepository repository;

    Util util = new Util();

    Logger log = LoggerFactory.getLogger(getClass().getName());

    /**
     * 유저 전체 리스트
     * @param pageable
     * @return
     */
    public Page<UserMember> userMemberList(Pageable pageable) {
        log.info("==================UserService.userMemberList.START==================");
        Page<UserMember> result = repository.findAll(pageable);
        log.info("최종 결과값 : " + result);
        log.info("==================UserService.userMemberList.END==================");
        return result;
    }


    /**
     * 유저 개인 리스트
     * @param userMember
     * @param pageable
     * @return
     * @throws ParseException
     */
    public Page<UserMember> userMemberListSearch(HashMap userMember, Pageable pageable) throws ParseException {
        log.info("==================UserService.userMemberListSearch.START==================");

        log.info("userMember : " + userMember);

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

        String signDate = (String) userMember.get("signDate");
        String modifyDate = (String) userMember.get("modifyDate");

        String signDateStart = "";
        String signDateEnd = "";

        String modifyDateStart = "";
        String modifyDateEnd = "";

        if(signDate != null){
            userMember.put("signDate",util.setDateFormatStr(signDate,"yyyy-MM-dd","yyyyMMdd"));
            signDateStart = signDate;
            signDateEnd = signDate;
        } else {
            signDateStart = (String) userMember.remove("signDate");
            signDateEnd = (String) userMember.remove("signDate");
        }

        if(modifyDate != null){
            userMember.put("modifyDate",util.setDateFormatStr(modifyDate,"yyyy-MM-dd","yyyyMMdd"));
            modifyDateStart = modifyDate;
            modifyDateEnd = modifyDate;
        } else {
            modifyDateStart = (String) userMember.remove("modifyDate");
            modifyDateEnd = (String) userMember.remove("modifyDate");
        }

        Page<UserMember> result = null;

        if(modifyDate == null && signDate != null){
            result = repository.findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContainingAndSignDateBetween
                    (gender, name, year, month, day, phone1, phone2, phone3, address1, email, status, signDateStart, signDateEnd, pageable);
        } else if (signDate == null && modifyDate != null) {
            result = repository.findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContainingAndModifyDateBetween
                    (gender, name, year, month, day, phone1, phone2, phone3, address1, email, status, modifyDateStart, modifyDateEnd, pageable);
        } else if (signDate == null && modifyDate == null){
            result = repository.findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContaining
                    (gender, name, year, month, day, phone1, phone2, phone3, address1, email, status, pageable);
        } else {
            result = repository.findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContainingAndSignDateBetweenAndModifyDateBetween
                    (gender, name, year, month, day, phone1, phone2, phone3, address1, email, status, signDateStart, signDateEnd, modifyDateStart, modifyDateEnd, pageable);
        }

        log.info("최종 결과값 : " + result);
        log.info("==================UserService.userMemberListSearch.END==================");
        return result;
    }

    /**
     * 유저상세 페이지
     * @param id
     * @return
     */
    public UserMember userMemberDetail(Integer id) {
        log.info("==================UserService.userMemberDetail.START==================");
        UserMember result = repository.findById(id).get();
        log.info("최종 결과값 : " + result);
        log.info("==================UserService.userMemberDetail.END==================");
        return result;
    }

    /**
     * 유저 신규 등록
     * @param userMember
     * @return
     */
    public UserMember userMemberInsert(UserMember userMember) {
        log.info("==================UserService.userMemberDetail.START==================");
        UserMember result = repository.save(userMember);
        log.info("최종 결과값 : " + result);
        log.info("==================UserService.userMemberDetail.END==================");
        return result;
    }


}
