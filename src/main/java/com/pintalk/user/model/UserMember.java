package com.pintalk.user.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserMember {

    private int no;
    private String id;
    private String password;
    private String name;
    private String type;
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
    private LocalDateTime reg_date;
    private LocalDateTime update_date;
    private String ssn;
    private String status;
    private int erp_no;

}
