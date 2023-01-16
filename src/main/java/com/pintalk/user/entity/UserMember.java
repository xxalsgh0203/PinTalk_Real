package com.pintalk.user.entity;

import com.pintalk.common.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@Table(name = "USER_MEMBER")
public class UserMember extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USERMEMBER_GENERATOR")
    @SequenceGenerator(name = "USERMEMBER_GENERATOR", sequenceName = "USERMEMBER_SEQ", initialValue = 1, allocationSize = 1)
    private Integer no;
    private String id;
    private String password;
    private String name;
    private String ssn;
    private String ssn1;
    private String ssn2;
    private String year;
    private String month;
    private String day;
    private String phone1;
    private String phone2;
    private String phone3;
    private String email;
    private String gender;
    private String address1;
    private String address2;
    private String jobKey;
    private String status;
    private String saveStatus;

    @Column(name = "signDate", length = 8)
    private String signDate;    // 가입날짜
    @Column(name = "modifyDate", length = 8)
    private String modifyDate;  // 정보수정 날짜


}
