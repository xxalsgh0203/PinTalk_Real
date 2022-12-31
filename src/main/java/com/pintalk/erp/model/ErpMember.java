package com.pintalk.erp.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ErpMember {

    private int no;
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
    private LocalDateTime reg_date;
    private LocalDateTime update_date;
    private int user_no;
    private String status;
    private int contract_no;
    private String password;

}
