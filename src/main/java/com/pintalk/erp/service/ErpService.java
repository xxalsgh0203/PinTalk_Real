package com.pintalk.erp.service;

import com.pintalk.erp.mapper.ErpMapper;
import com.pintalk.erp.model.ErpMember;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ErpService {

    @Autowired
    public ErpMapper mapper;

    Logger logger = LoggerFactory.getLogger(getClass().getName());

    //대출자 전체 리스트
    public List<ErpMember> getErpMemberList() throws Exception {
        List<ErpMember> result = mapper.erpMemberList();
        logger.debug("===================================================================");
        logger.debug("UpsService.getUpsList 실행쿼리 결과 값  : " + result);
        logger.debug("===================================================================");
        return result;
    }

    public List getErpMemberOneList(ErpMember model) throws Exception{
        List result = mapper.erpMemberOneList(model);
        logger.debug("===================================================================");
        logger.debug("UpsService.getUpsList 실행쿼리 결과 값  : " + result);
        logger.debug("===================================================================");
        return result;
    }
//
//    public int getUpsModify( UpsMember model) throws Exception{
//        int result = mapper.upsModify(model);
//        logger.debug("===================================================================");
//        logger.debug("UpsService.getUpsModify 실행쿼리 결과 값  : " + result);
//        logger.debug("===================================================================");
//        return result;
//    }
//    public int getUpsInsert(UpsMember model) throws Exception{
//        int result = mapper.upsInsert(model);
//        logger.debug("===================================================================");
//        logger.debug("UpsService.getUpsModify 실행쿼리 결과 값  : " + result);
//        logger.debug("===================================================================");
//        return result;
//    }
//    public int getUpsDelete(UpsMember model) throws Exception{
//        int result = mapper.upsDelete(model);
//        logger.debug("===================================================================");
//        logger.debug("UpsService.getUpsDelete 실행쿼리 결과 값  : " + result);
//        logger.debug("===================================================================");
//        return result;
//    }

}
