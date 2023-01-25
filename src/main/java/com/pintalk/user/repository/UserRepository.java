package com.pintalk.user.repository;

import com.pintalk.user.entity.UserMember;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserMember, Integer> {

    //유저 전체 리스트
    Page<UserMember> findUserMemberBy(Pageable pageable);
    Page<UserMember> findAll(Specification<UserMember> spec, Pageable pageable);


}