package com.pintalk.erp.model;

import lombok.Data;

import java.util.Date;

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
    private String reg_date;
    private String update_date;
    private String status;
    private String password;
    private int user_no;
    private int erp_no;
    private int contract_no;

}
