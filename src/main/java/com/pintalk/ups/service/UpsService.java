package com.pintalk.ups.service;

import com.pintalk.ups.mapper.UpsMapper;
import com.pintalk.ups.model.UpsMember;
import com.pintalk.user.mapper.UserMapper;
import com.pintalk.user.model.UserMember;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.websocket.server.PathParam;
import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class UpsService {

    @Autowired
    public UpsMapper mapper;

    Logger logger = LoggerFactory.getLogger(getClass().getName());

    //대출자 전체 리스트
    public int getUpsMemberSeq() throws Exception {
        int seq = mapper.getUpsMemberSeq();
        logger.debug("===================================================================");
        logger.debug("UpsService.getUpsMemberSeq 실행쿼리 결과 값  : " + seq);
        logger.debug("===================================================================");
        return seq;
    }
    //대출자 전체 리스트
    public List<UpsMember> getUpsMemberList() throws Exception {
        List<UpsMember> result = mapper.upsMemberList();
        logger.debug("===================================================================");
        logger.debug("UpsService.getUpsList 실행쿼리 결과 값  : " + result);
        logger.debug("===================================================================");
        return result;
    }
//    public List<UpsMember> getUpsOneList(@PathParam("no") int no) throws Exception{
//        List<UpsMember> result = mapper.upsOneList(no);
//        logger.debug("===================================================================");
//        logger.debug("UpsService.getUpsList 실행쿼리 결과 값  : " + result);
//        logger.debug("===================================================================");
//        return result;
//    }

    public int getUpsInsert(HashMap model) throws Exception{

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

        int result = mapper.upsMemberInsert(model);
        logger.debug("===================================================================");
        logger.debug("UpsService.getUpsModify 실행쿼리 결과 값  : " + result);
        logger.debug("===================================================================");
        return result;
    }

}
