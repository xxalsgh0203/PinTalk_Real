package com.pintalk.account.entity;

import com.pintalk.user.entity.UserMember;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "account")
@Getter
@Setter
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "ACCOUNT_GENERATOR")
    @Column(columnDefinition = "int not null comment '계좌_SEQ'")
    private Integer no;

    @ManyToOne
    @JoinColumn(name = "user_member_no")
    private UserMember userMember;

    @Column(columnDefinition = "varchar(24) not null comment '핀테크이용번호'")
    private String finTechUseNum;

    @Column(columnDefinition = "varchar(50) not null comment '계좌별명'")
    private String alias;

    @Column(columnDefinition = "varchar(3) not null comment '출금(개설)기관.대표코드'")
    private String bankCodeStd;

    @Column(columnDefinition = "varchar(7) null comment '출금(개설)기관.점별코드'")
    private String bankCodeSub;

    @Column(columnDefinition = "varchar(20) null comment '출금(개설)기관명'")
    private String bankName;

    @Column(columnDefinition = "varchar(20) comment '개별저축은행명'")
    private String savingsBankName;

    @Column(columnDefinition = "varchar(20) null comment '계좌예금주명'")
    private String HolderName;

    @Column(columnDefinition = "varchar(1) not null comment '계좌구분(P:개인)'")
    private String HolderType;

    @Column(columnDefinition = "varchar(1) not null comment '계좌종류(‘1’:수시입출금, ‘2’:예적금, ‘6’:수익증권, ‘T’:종합계좌)'")
    private String type;

    @Column(columnDefinition = "varchar(20) not null comment '계좌번호'")
    private String accountNo;

    @Column(columnDefinition = "varchar(1) null comment '조회서비스 동의여부'")
    private String inquiryAgreeYn;

    @Column(columnDefinition = "varchar(14) null comment '조회서비스 동의일시'")
    private String inquiryAgreeDt;

    @Column(columnDefinition = "varchar(1) null comment '출금서비스 동의여부'")
    private String transferAgree_yn;

    @Column(columnDefinition = "varchar(14) null comment '출금서비스 동의일시'")
    private String transferAgreeDt;

    @Column(columnDefinition = "varchar(2) not null comment '계좌상태(‘01’:사용, ‘09’:해지)'")
    private String State;


    @Column(columnDefinition = "varchar(14) not null comment '계좌개설 일시'")
    private String createDT;
    @Column(columnDefinition = "varchar(14) not null comment '계좌수정 일시'")
    private String modifyDT;
    
    @OneToMany(mappedBy = "account")
    private List<AccountHist> accountHists = new ArrayList<>();

}
