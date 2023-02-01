package com.pintalk.login.repository;

import com.pintalk.common.entity.Param;
import com.pintalk.login.entity.Login;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {

    //로그인
//    Login findLoginByIdContainsAndPasswordContains(Param param);


}