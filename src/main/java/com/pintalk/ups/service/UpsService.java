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
import java.util.List;

@Service
@Transactional
public class UpsService {

    @Autowired
    public UpsMapper mapper;

    Logger logger = LoggerFactory.getLogger(getClass().getName());

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
//
//    public int getUpsModify( UpsMember model) throws Exception{
//        int result = mapper.upsModify(model);
//        logger.debug("===================================================================");
//        logger.debug("UpsService.getUpsModify 실행쿼리 결과 값  : " + result);
//        logger.debug("===================================================================");
//        return result;
//    }
    public int getUpsInsert(UpsMember model) throws Exception{
        int result = mapper.upsMemberInsert(model);
        logger.debug("===================================================================");
        logger.debug("UpsService.getUpsModify 실행쿼리 결과 값  : " + result);
        logger.debug("===================================================================");
        return result;
    }
//    public int getUpsDelete(UpsMember model) throws Exception{
//        int result = mapper.upsDelete(model);
//        logger.debug("===================================================================");
//        logger.debug("UpsService.getUpsDelete 실행쿼리 결과 값  : " + result);
//        logger.debug("===================================================================");
//        return result;
//    }

}
