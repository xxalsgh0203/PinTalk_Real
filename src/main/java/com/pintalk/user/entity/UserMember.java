package com.pintalk.user.entity;

import com.pintalk.common.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;

@Entity(name = "USERMEMBER")
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
    private String job_key;
    private String status;
    private String save_status;


}
