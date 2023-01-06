package com.pintalk.user.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Erp_Member_Info {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer no;
    private String id;
    private String name;
    private String ssn;
    private String phone1;
    private String phone2;
    private String phone3;
    private String email;
    private String gender;
    private String address1;
    private String address2;
    private String job_key;
    private String erp_level;
    private String reg_date;
    private String update_date;
    private String status;
    private String password;
    private Integer user_no;
    private Integer contract_no;

}
