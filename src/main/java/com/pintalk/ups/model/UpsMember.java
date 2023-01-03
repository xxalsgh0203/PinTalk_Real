package com.pintalk.ups.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UpsMember {

    private int no;
    private String id;
    private String password;
    private String name;
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
    private String ssn;
    private String status;
    private int user_no;
    private int ups_no;

    private String ssn1;
    private String ssn2;
    private String type;
}
