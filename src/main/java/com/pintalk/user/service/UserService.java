package com.pintalk.user.service;

import com.fasterxml.jackson.databind.ObjectMapper;
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
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;


@Service
@EnableJpaAuditing
public class UserService {

    @Autowired
    public UserRepository repository;

    Util util = new Util();

    Logger log = LoggerFactory.getLogger(getClass().getName());

    /**
     * 회원 전체 리스트
     *
     * @param pageable
     * @return
     */
    public Page<UserMember> userMemberList(Pageable pageable) {
        log.info("==================UserService.userMemberList.START==================");
        Page<UserMember> result = repository.findAll(pageable);
        log.info("==================UserService.userMemberList.END==================");
        return result;
    }


    /**
     * 회원 개인 리스트
     *
     * * @param userMember
     * @param pageable
     * @return
     * @throws ParseException
     */
    public Page<UserMember> userMemberListSearch(Param param, Pageable pageable) throws ParseException {
        log.info("==================UserService.userMemberListSearch.START==================");
        HashMap paramMap = util.convertObjectToMap(param);
        HashMap searchMap = new HashMap();

        //HashMap null 값 제거
        searchMap = util.mapKeyValueOupPut(paramMap);

        String signDateStart = "";
        String signDateEnd = "";

        String modifyDateStart = "";
        String modifyDateEnd = "";

        if (searchMap.get("signDateStart") != null) {
            signDateStart = (String) searchMap.get("signDateStart");
            searchMap.put("signDateStart", util.setDateFormatStr(signDateStart, "yyyy-MM-dd", "yyyyMMdd"));
        }

        if (searchMap.get("signDateEnd") != null) {
            signDateEnd = (String) searchMap.get("signDateEnd");
            searchMap.put("signDateEnd", util.setDateFormatStr(signDateEnd, "yyyy-MM-dd", "yyyyMMdd"));
        }

        if (searchMap.get("modifyDateStart") != null) {
            modifyDateStart = (String) searchMap.get("modifyDateStart");
            searchMap.put("modifyDateStart", util.setDateFormatStr(modifyDateStart, "yyyy-MM-dd", "yyyyMMdd"));
        }

        if (searchMap.get("modifyDateEnd") != null) {
            modifyDateEnd = (String) searchMap.get("modifyDateEnd");
            searchMap.put("modifyDateEnd", util.setDateFormatStr(modifyDateEnd, "yyyy-MM-dd", "yyyyMMdd"));
        }

        Page<UserMember> result = null;

        Map<String, Object> searchKeys = new HashMap<>();
        // Parameter 순차적으로 세팅
        for (Object key : searchMap.keySet()) {
            String value = String.valueOf(searchMap.get(key));
            if (value != null && !value.isEmpty() && !"null".equals(value)) {
                searchKeys.put((String) key, searchMap.get(key));
            }
        }

        UserSpecification userSpecification = new UserSpecification();
        //결과값
        result = repository.findAll(userSpecification.searchWith(searchKeys), pageable);
        log.info("==================UserService.userMemberListSearch.END==================");
        return result;
    }

    /**
     * 회원상세 페이지
     *
     * @param no
     * @return
     */
    public UserMember userMemberDetail(int no) {
        log.info("==================UserService.userMemberDetail.START==================");
        UserMember result = repository.findById(no).get();
        log.info("최종 결과값 : " + result);
        log.info("==================UserService.userMemberDetail.END==================");
        return result;
    }

    /**
     * 회원상세 페이지 수정 처리
     *
     * @param param
     * @return
     */
    public boolean userMemberDetailModify(Param param) {
        log.info("==================UserService.userMemberDetail.START==================");

        int no = param.getNo();
        Map<String, String> paramMap = util.convertObjectToMap(param);
        System.out.println("paramMap : " + paramMap);
        HashMap resultMap = new HashMap();
        UserMember result = new UserMember();

        Optional<UserMember> oUserMember = repository.findById(no);
        if (oUserMember.isPresent()) {
            UserMember guserMember = oUserMember.get();
            System.out.println("guserMember : " + guserMember);
            if (guserMember.getNo() != null) {
                for (Map.Entry key : paramMap.entrySet()) {
//                    if (key.getValue() != null) {
                        System.out.println(key.getKey() + " : " + key.getValue());
                        resultMap.put(key.getKey(), key.getValue());
//                    }
                }
                System.out.println("resultMap : " + resultMap);

                System.out.println("for문 시작");
                result = UserMember.builder()
                        .no(no)
                        .id((String) resultMap.get("id"))
                        .gender((String) resultMap.get("gender"))
                        .address((String) resultMap.get("address"))
                        .address1((String) resultMap.get("address1"))
                        .address2((String) resultMap.get("address2"))
                        .phone1((String) resultMap.get("phone1"))
                        .phone2((String) resultMap.get("phone2"))
                        .phone3((String) resultMap.get("phone3"))
                        .ssn((String) resultMap.get("ssn"))
                        .ssn1((String) resultMap.get("ssn1"))
                        .ssn2((String) resultMap.get("ssn2"))
                        .password((String) resultMap.get("password"))
                        .name((String) resultMap.get("name"))
                        .email((String) resultMap.get("email"))
                        .status((String) resultMap.get("status"))
                        .saveStatus((String) resultMap.get("saveStatus"))
                        .signDate(guserMember.getSignDate())
                        .modifyDate(util.dateNowToStr("yyyyMMDD"))
                        .build();

                System.out.println("for문 끝");

            }
        }


        log.info("최종 결과값 : " + result);
        try {
            repository.save(result);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

        log.info("==================UserService.userMemberDetail.END==================");
        return true;
    }

    /**
     * 회원 신규 등록 화면
     *
     * @param
     * @return
     */
//    public boolean userMemberInsertView(String[] str) throws ParseException {
//        log.info("==================UserService.userMemberInsertView.START==================");
//
//        ComCode comCode= new ComCode();
//        List<String> strList = Arrays.asList(str);
//
//        try {
//            Stream<String> strArrStream = Arrays.stream(str);
//
//
//        } catch (Exception e) {
//            return false;
//        }
//        log.info("==================UserService.userMemberInsertView.END==================");
//        return true;
//    }

    /**
     * 회원 신규 등록
     *
     * @param
     * @return
     */
    public boolean userMemberInsert(HashMap resMap) throws ParseException {
        log.info("==================UserService.userMemberInsert.START==================");
        String ssn = (String) resMap.get("ssn");
        resMap.put("ssn1", ssn.substring(0, 6));
        resMap.put("ssn2", ssn.substring(7, 13));

        LocalDate seoulNow = LocalDate.now(ZoneId.of("Asia/Seoul"));
        String signDate = util.setDateFormatStr(seoulNow.toString(), "yyyy-MM-dd", "yyyyMMdd");

        resMap.put("sign_Date", signDate);
        resMap.put("modify_Date", signDate);

        ObjectMapper objectMapper = new ObjectMapper();
        UserMember userMember = objectMapper.convertValue(resMap, UserMember.class);

        try {
            repository.save(userMember);
        } catch (Exception e) {
            return false;
        }
        log.info("==================UserService.userMemberInsert.END==================");
        return true;
    }


}
