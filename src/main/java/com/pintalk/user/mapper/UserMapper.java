package com.pintalk.user.mapper;

import com.pintalk.user.model.UserMember;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface UserMapper {
    List<UserMember> getUserList();
}
