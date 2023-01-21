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

        String signDateStart = "";
        String signDateEnd = "";

        String modifyDateStart = "";
        String modifyDateEnd = "";

        if(searchMap.get("signDateStart") != null){
            signDateStart = (String) searchMap.get("signDateStart");
            searchMap.put("signDateStart",util.setDateFormatStr(signDateStart,"yyyy-MM-dd","yyyyMMdd"));
        }

        if(searchMap.get("signDateEnd") != null){
            signDateEnd = (String) searchMap.get("signDateEnd");
            searchMap.put("signDateEnd",util.setDateFormatStr(signDateEnd,"yyyy-MM-dd","yyyyMMdd"));
        }

        if(searchMap.get("modifyDateStart") != null){
            modifyDateStart = (String) searchMap.get("modifyDateStart");
            searchMap.put("modifyDateStart",util.setDateFormatStr(modifyDateStart,"yyyy-MM-dd","yyyyMMdd"));
        }

        if(searchMap.get("modifyDateEnd") != null){
            modifyDateEnd = (String) searchMap.get("modifyDateEnd");
            searchMap.put("modifyDateEnd",util.setDateFormatStr(modifyDateEnd,"yyyy-MM-dd","yyyyMMdd"));
        }

        Page<UserMember> result = null;

        Map<String, Object> searchKeys = new HashMap<>();
        // Parameter 순차적으로 세팅
        for (Object key : searchMap.keySet()) {
            String value = String.valueOf(searchMap.get(key));
            if(value != null && !value.isEmpty() && !"null".equals(value)){
                searchKeys.put((String) key, searchMap.get(key));
            }
        }

        UserSpecification userSpecification = new UserSpecification();
        //결과값
        result = repository.findAll(userSpecification.searchWith(searchKeys),pageable);

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
