package com.pintalk.user.entity;

import com.pintalk.common.entity.BaseEntity;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@ToString
public class Param extends BaseEntity {
    private Integer no;             //유저 고유 번호

    private String id;              //유저 아이디
    private String password;        //유저 패스워드
    private String name;            //유저 이름
    private String ssn;             //유저 주민번호
    private String ssn1;            //유저 주민번호(앞자리)
    private String ssn2;            //유저 주민번호(뒷자리)
    private String phone1;          //유저 번호 앞자리
    private String phone2;          //유저 번호 중간자리
    private String phone3;          //유저 번호 뒷자리
    private String email;           //유저 이메일
    private String gender;          //유저 성별
    private String address;         //유저 통합 주소
    private String address1;        //유저 사는곳
    private String address2;        //유저 상세주소
    private String jobKey;          //유저 직업코드
    private String status;          //유저 상태
    private String saveStatus;      //유저 활성화

    private String signDate;        // 가입날짜
    private String modifyDate;      // 정보수정 날짜
    
    private String signDateStart;   // 가입일자 시작
    private String signDateEnd;     // 가입일자 끝
    private String modifyDateStart; // 수정일자 시작
    private String modifyDateEnd;   // 수정일자 끝

    private LocalDateTime reg_Date;
    private LocalDateTime update_Date;
}
