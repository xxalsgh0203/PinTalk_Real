package com.pintalk.user.entity;

import com.pintalk.account.entity.Account;
import com.pintalk.common.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "USER_MEMBER", uniqueConstraints = {
        @UniqueConstraint(
                name = "ID_UNIQUE"
                , columnNames = {"ID"}
        ),
        @UniqueConstraint(
                name = "SSN_UNIQUE"
                , columnNames ={"ssn"}
        )
})
public class UserMember extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "USERMEMBER_GENERATOR")
    @Column(columnDefinition = "int not null comment '유저 고유번호'")
    private Integer no;

    @OneToMany(mappedBy = "userMember")
    private List<Account> accounts = new ArrayList<>();

    @Column(columnDefinition = "varchar(20) not null comment '아이디'")
    private String id;

    @Column(columnDefinition = "varchar(40) not null comment '패스워드'")
    private String password;

    @Column(columnDefinition = "varchar(20) not null comment '이름'")
    private String name;

    @Column(columnDefinition = "varchar(13) not null comment '주민번호'")
    private String ssn;

    @Column(columnDefinition = "varchar(6) not null comment '주민번호(앞자리)'")
    private String ssn1;

    @Column(columnDefinition = "varchar(7) not null comment '주민번호(뒷자리)'")
    private String ssn2;

    @Column(columnDefinition = "varchar(3) null comment '휴대폰 번호 앞자리'")
    private String phone1;
    @Column(columnDefinition = "varchar(4) null comment '휴대폰 번호 중간자리'")
    private String phone2;
    @Column(columnDefinition = "varchar(4) null comment '휴대폰 번호 뒷자리'")
    private String phone3;
    @Column(columnDefinition = "varchar(40) null comment '이메일'")
    private String email;
    @Column(columnDefinition = "varchar(1) not null comment '성별'")
    private String gender;
    @Column(columnDefinition = "varchar(100) null comment '통합 주소'")
    private String address;
    @Column(columnDefinition = "varchar(40) null comment '사는곳'")
    private String address1;
    @Column(columnDefinition = "varchar(60) null comment '상세주소'")
    private String address2;
    @Column(columnDefinition = "varchar(4) null comment '직업코드'")
    private String jobkey;
    @Column(columnDefinition = "varchar(1) not null comment '탈퇴여부'")
    private String saveStatus;

    @Column(columnDefinition = "varchar(8) not null comment '가입날짜(문자열)'")
    private String signDate;
    @Column(columnDefinition = "varchar(8) not null comment '정보수정 날짜(문자열)'")
    private String modifyDate;

    @Column(columnDefinition = "int null comment '사용자 등록계좌 개수'")
    private String resCnt;



}

