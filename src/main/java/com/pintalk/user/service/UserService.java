package com.pintalk.user.service;

import com.function.Util;
import com.pintalk.user.component.UserSpecification;
import com.pintalk.user.entity.Param;
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
import java.util.Map;


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
//     * @param userMember
     * @param pageable
     * @return
     * @throws ParseException
     */
    public Page<UserMember> userMemberListSearch(HashMap map, Pageable pageable) throws ParseException {
        log.info("==================UserService.userMemberListSearch.START==================");
        log.info("param : " + map);

        HashMap paramMap = util.convertObjectToMap(map);
        HashMap searchMap = new HashMap();

        //HashMap null 값 제거
        searchMap = util.mapKeyValueOupPut(paramMap);

        System.out.println("searchMap : " + searchMap);
        int cnt = searchMap.size();
        String modifyDate = (String) searchMap.get("modifyDate");
        String signDate = (String) searchMap.get("modifyDate");

        String signDateStart = "";
        String signDateEnd = "";

        String modifyDateStart = "";
        String modifyDateEnd = "";

        if(searchMap.get("signDateStart") != null){
            signDateStart = (String) searchMap.get("signDateStart");
            searchMap.put("signDateStart",util.setDateFormatStr(signDateStart,"yyyy-MM-dd","yyyyMMdd"));
        }
//        else {
//            signDateStart = (String) searchMap.remove("signDateStart");
//        }

        if(searchMap.get("signDateEnd") != null){
            signDateEnd = (String) searchMap.get("signDateEnd");
            searchMap.put("signDateEnd",util.setDateFormatStr(signDateEnd,"yyyy-MM-dd","yyyyMMdd"));
        }
//        else {
//            signDateEnd = (String) searchMap.remove("signDate");
//        }

        if(searchMap.get("modifyDateStart") != null){
            modifyDateStart = (String) searchMap.get("modifyDateStart");
            searchMap.put("modifyDateStart",util.setDateFormatStr(modifyDateStart,"yyyy-MM-dd","yyyyMMdd"));
        }
//        else {
//            modifyDateStart = (String) searchMap.remove("modifyDateStart");
//        }

        if(searchMap.get("modifyDateEnd") != null){
            modifyDateEnd = (String) searchMap.get("modifyDateEnd");
            searchMap.put("modifyDateEnd",util.setDateFormatStr(modifyDateEnd,"yyyy-MM-dd","yyyyMMdd"));
        }
//        else {
//            modifyDateEnd = (String) searchMap.remove("modifyDateEnd");
//        }

        Page<UserMember> result = null;



        System.out.println("==========================================");
        System.out.println("searchMap : " + searchMap);
        System.out.println("==========================================");


        Map<String, Object> searchKeys = new HashMap<>();
        // Parameter 순차적으로 세팅
        for (Object key : searchMap.keySet()) {
            String value = String.valueOf(searchMap.get(key));
            if(value != null && !value.isEmpty() && !"null".equals(value)){
                searchKeys.put((String) key, searchMap.get(key));
            }
        }

        System.out.println("=====================================");
        System.out.println("searchKeys : " + searchKeys);
        System.out.println("=====================================");
        UserMember userMember = new UserMember();

        UserSpecification userSpecification = new UserSpecification();

        System.out.println(repository.findAll(userSpecification.searchWith(searchKeys),pageable));

        //결과값
        result = repository.findAll(userSpecification.searchWith(searchKeys),pageable);

        log.info("최종 결과값 : " + result);
        log.info("==================UserService.userMemberListSearch.END==================");
        return result;
    }
//    public Page<UserMember> userMemberListSearch(UserMember userMember, Pageable pageable) throws ParseException {
//        log.info("==================UserService.userMemberListSearch.START==================");
//        HashMap paramMap = util.convertObjectToMap(userMember);
//        HashMap searchMap = new HashMap();
//        //HashMap null 값 제거
//        searchMap = util.mapKeyValueOupPut(paramMap);
//
//        log.info("paramMap : " + paramMap);
//        log.info("============================");
//
//        log.info("resultMap : " + searchMap);
//
//        int cnt = searchMap.size();
//        String signDate = (String) searchMap.get("signDate");
//        String modifyDate = (String) searchMap.get("modifyDate");
//
//        String signDateStart = "";
//        String signDateEnd = "";
//
//        String modifyDateStart = "";
//        String modifyDateEnd = "";
//
//        if(signDate != null){
//            searchMap.put("signDate",util.setDateFormatStr(signDate,"yyyy-MM-dd","yyyyMMdd"));
//            signDateStart = signDate;
//            signDateEnd = signDate;
//        } else {
//            signDateStart = (String) searchMap.remove("signDate");
//            signDateEnd = (String) searchMap.remove("signDate");
//        }
//
//        if(modifyDate != null){
//            searchMap.put("modifyDate",util.setDateFormatStr(modifyDate,"yyyy-MM-dd","yyyyMMdd"));
//            modifyDateStart = modifyDate;
//            modifyDateEnd = modifyDate;
//        } else {
//            modifyDateStart = (String) searchMap.remove("modifyDate");
//            modifyDateEnd = (String) searchMap.remove("modifyDate");
//        }
//
//        Page<UserMember> result = null;
//
//        switch (cnt) {
//            case 0: repository.findUserMemberBy(pageable);
//
//            case 1:
////                if()
//        }
//
//
//
//
//
////
////        if(modifyDate == null && signDate != null){
////            result = repository.findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContainingAndSignDateBetween
////                    (gender, name, year, month, day, phone1, phone2, phone3, address1, email, status, signDateStart, signDateEnd, pageable);
////        } else if (signDate == null && modifyDate != null) {
////            result = repository.findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContainingAndModifyDateBetween
////                    (gender, name, year, month, day, phone1, phone2, phone3, address1, email, status, modifyDateStart, modifyDateEnd, pageable);
////        } else if (signDate == null && modifyDate == null){
////            result = repository.findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContaining
////                    (gender, name, year, month, day, phone1, phone2, phone3, address1, email, status, pageable);
////        } else {
////            result = repository.findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContainingAndSignDateBetweenAndModifyDateBetween
////            result = repository.findUserMemberByEmailLike
////                    (gender, name, year, month, day, phone1, phone2, phone3, address1, email, status, pageable);
////        }
//
//        log.info("최종 결과값 : " + result);
//        log.info("==================UserService.userMemberListSearch.END==================");
//        return result;
//    }

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
