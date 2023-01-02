package com.pintalk.erp.controller;

import com.pintalk.erp.model.ErpMember;
import com.pintalk.erp.service.ErpService;
import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class ErpController {

    private Logger logger = LoggerFactory.getLogger(getClass().getName());

    @Autowired
    ErpService service;


    //투자자 전체 리스트
    @GetMapping("/erpMemberList")
    public List getErpMemberList() throws Exception {
        List<ErpMember> li_result = service.getErpMemberList();

        logger.debug("===================================================================");
        logger.debug("ErpController.getErpMemberList 리스트 결과값  : " + li_result);
        logger.debug("===================================================================");

        return li_result;
    }
    //투자자 개인 리스트
    @RequestMapping("/erpMemberOneList")
    public HashMap getErpMemberOneList(ErpMember model) throws Exception {



        HashMap result = service.getErpMemberOneList(model);

        logger.debug("===================================================================");
        logger.debug("ErpController.getErpMemberOneList 리스트 결과값  : " + result);
        logger.debug("===================================================================");

        return result;
    }

//    @RequestMapping("/erpMemberInsertView")
//    public String getErpMemberInsertView(){
//        return "/upsMemberInsertView";
//    }
//
//    @RequestMapping("/erpMemberInsert")
//    public String getUpsMemberInsert(ErpMember model){
//        service.getUpsInsert(model);
//        return "redirect:/upsMemberInsert";
//    }

//    @RequestMapping("/userMemberUpdate")
//    public int getUpsModify(UpsMember model,@Param("user_no") int user_no) throws Exception {
//        model.setNo(user_no);
//        int li_result = service.getUpsModify(model);
//
//        logger.debug("===================================================================");
//        logger.debug("UserController.getUserModify 리스트 결과값  : " + li_result);
//        logger.debug("===================================================================");
//
//        return li_result;
//    }
}
