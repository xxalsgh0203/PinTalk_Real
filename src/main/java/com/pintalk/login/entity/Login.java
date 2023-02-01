package com.pintalk.login.entity;

import com.pintalk.common.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@Table(name = "Login", uniqueConstraints = {
        @UniqueConstraint(
                name = "ID_UNIQUE"
                , columnNames = {"ID"}
        ),
        @UniqueConstraint(
                name = "USERNO_UNIQUE"
                , columnNames = {"userNo"}
        ),
})
public class Login extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "LOGIN_GENERATOR")
    @Column(columnDefinition = "int not null comment '고유번호'")
    private Integer no;

    @Column(columnDefinition = "varchar(20) not null comment '아이디'")
    private String id;

    @Column(columnDefinition = "varchar(40) not null comment '패스워드'")
    private String password;

    @Column(columnDefinition = "varchar(20) not null comment '이름'")
    private String name;

    @Column(columnDefinition = "varchar(13) not null comment '유저고유번호'")
    private String userNo;

    @Column(columnDefinition = "varchar(1) not null comment '상태'")
    private String status;
    @Column(columnDefinition = "varchar(1) not null comment '활성화'")
    private String saveStatus;

    @Column(columnDefinition = "varchar(8) not null comment '가입날짜(문자열)'")
    private String signDate;
    @Column(columnDefinition = "varchar(8) not null comment '정보수정 날짜(문자열)'")
    private String modifyDate;


}
