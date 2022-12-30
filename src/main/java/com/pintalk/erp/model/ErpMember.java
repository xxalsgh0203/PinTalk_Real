package com.pintalk.erp.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ErpMember {

    private int NO;
    private String ID;
    private String NAME;
    private String SSN;
    private int PHONE1;
    private int PHONE2;
    private int PHONE3;
    private String EMAIL;
    private String GENDER;
    private String ADDRESS1;
    private String ADDRESS2;
    private String JOB_KEY;
    private String ERP_LEVEL;
    private LocalDateTime REG_DATE;
    private LocalDateTime UPDATE_DATE;
    private int USER_NO;
    private String STATUS;
    private int CONTRACT_NO;
    private String PASSWORD;

}
