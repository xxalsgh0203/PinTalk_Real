package com.pintalk.user.mapper;

import com.pintalk.user.model.UserMember;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface UserMapper {

    @Select("SELECT * FROM USER_MEMBER WHERE 1=1 AND ID = #{id} ")
    HashMap getUserMember(@Param("id") String id);

    @Select("SELECT * FROM USER_MEMBER WHERE 1=1")
    List<UserMember> getUserMemberList();
}
