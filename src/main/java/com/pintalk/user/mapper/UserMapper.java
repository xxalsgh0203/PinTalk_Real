package com.pintalk.user.mapper;

import com.pintalk.ups.model.UpsMember;
import com.pintalk.user.model.UserMember;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
@Mapper
public interface UserMapper {
    int getUserListSeq();
    List<UserMember> getUserList();
    int userMemberInsert(HashMap model);
}
