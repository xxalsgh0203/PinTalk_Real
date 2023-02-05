package com.pintalk.account.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "account_hist")
@Getter
@Setter
public class AccountHist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "ACCOUNTHIST_GENERATOR")
    @Column(name = "hist_seq", nullable = false)
    private Integer hist_seq;

    @ManyToOne
    @JoinColumn(name = "account_no")
    private Account account;

    @Column(columnDefinition = "varchar(3) not null comment '출금(개설)기관.대표코드'")
    private String bankCodeStd;

    @Column(columnDefinition = "varchar(20) not null comment '출금(개설)기관명'")
    private String bankName;

    @Column(columnDefinition = "varchar(16) not null comment '계좌번호'")
    private String accountNum;

    @Column(columnDefinition = "varchar(255) not null comment '입출금 여부(01: 입금, 02: 출금)'")
    private String depositStatus;

    @Column(columnDefinition = "varchar(255) not null comment '내용'")
    private String histStory;

    @Column(columnDefinition = "varchar(14) not null comment '기록 ip'")
    private String createIP;

    @Column(columnDefinition = "varchar(14) not null comment '기록 생성한 사용자명'")
    private String createUser;

    @Column(columnDefinition = "varchar(14) not null comment '기록 생성 일시'")
    private String createDT;
}