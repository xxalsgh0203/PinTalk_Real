package com.pintalk.user.repository;

import com.pintalk.user.entity.UserMember;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserMember, Integer> {

    //유저 전체 리스트
    Page<UserMember> findUserMemberBy(String userMember, Pageable pageable);

    //유저 전체 리스트(Where Like Name)
//    Page<UserMember> findUserMemberByNameContaining(String name, Pageable pageable);

    //유저 개인 리스트
//    List findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContainingAndSignDateBetweenAndModifyDateBetween
//            (String gender, String name, String year, String month, String day, String phone1, String phone2, String phone3, String address1, String email, String status, String signDateStart, String signDateEnd, String modifyDateStart, String modifyDateEnd);

    //유저 검색리스트(가입일자, 정보변경일자 Parameter 존재)
    Page<UserMember> findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContainingAndSignDateBetweenAndModifyDateBetween
    (String gender, String name, String year, String month, String day, String phone1, String phone2, String phone3, String address1, String email, String status, String signDateStart, String signDateEnd, String modifyDateStart, String modifyDateEnd, Pageable pageable);

    //유저 검색리스트(가입일자 Parameter 존재)
    Page<UserMember> findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContainingAndSignDateBetween
    (String gender, String name, String year, String month, String day, String phone1, String phone2, String phone3, String address1, String email, String status, String signDateStart, String signDateEnd, Pageable pageable);

    //유저 검색리스트(정보변경일자 Parameter 존재)
    Page<UserMember> findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContainingAndModifyDateBetween
    (String gender, String name, String year, String month, String day, String phone1, String phone2, String phone3, String address1, String email, String status, String modifyDateStart, String modifyDateEnd, Pageable pageable);

    //유저 검색리스트(가입일자, 정보변경일자 Parameter 존재 안할경우)
    Page<UserMember> findByGenderContainingAndNameContainingAndYearContainingAndMonthContainingAndDayContainingAndPhone1ContainingAndPhone2ContainingAndPhone3ContainingAndAddress1ContainingAndEmailContainingAndStatusContaining
    (String gender, String name, String year, String month, String day, String phone1, String phone2, String phone3, String address1, String email, String status, Pageable pageable);

}