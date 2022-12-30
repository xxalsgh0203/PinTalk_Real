package com.pintalk.erp.mapper;

import com.pintalk.erp.model.ErpMember;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface ErpMapper {

    //대출자 전체 리스트
    List<ErpMember> erpMemberList();
//    String erpMemberOneList(ErpMember model);
//    int erpModify(UpsMember model);
//    int erpMemberInsert(ErpMember model);
//    int erpDelete(UpsMember model);
}