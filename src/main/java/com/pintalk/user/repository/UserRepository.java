package com.pintalk.user.repository;

import com.pintalk.user.entity.Erp_Member_Info;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Erp_Member_Info, Integer> {

    //투자자 전체 리스트
    Page<Erp_Member_Info> findErpMemberBy(String searchKeyword, Pageable pageable);

}