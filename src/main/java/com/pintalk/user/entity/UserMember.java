package com.pintalk.user.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "USER_MEMBER")
public class UserMember {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer no;
    private String id;
    private String password;
    private String name;
    private String ssn;
    private String ssn1;
    private String ssn2;
    private String phone1;
    private String phone2;
    private String phone3;
    private String email;
    private String gender;
    private String address1;
    private String address2;
    private String job_key;
    private String reg_date;
    private String update_date;
    private String status;
    private String save_status;

}
