package com.pintalk.ups.mapper;

import com.pintalk.ups.model.UpsMember;
import com.pintalk.user.model.UserMember;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface UpsMapper {

    //대출자 전체 리스트
    List<UpsMember> upsMemberList();
//    List<UpsMember> upsOneList(int no);
//    int upsModify(UpsMember model);
    int upsMemberInsert(UpsMember model);
//    int upsDelete(UpsMember model);
}