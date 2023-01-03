package com.pintalk.ups.mapper;

import com.pintalk.ups.model.UpsMember;
import com.pintalk.user.model.UserMember;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
@Mapper
public interface UpsMapper {

    //대출자 전체 리스트
    int getUpsMemberSeq();
    List<UpsMember> upsMemberList();
//    List<UpsMember> upsOneList(int no);
//    int upsModify(UpsMember model);
    int upsMemberInsert(HashMap model);
//    int upsDelete(UpsMember model);
}