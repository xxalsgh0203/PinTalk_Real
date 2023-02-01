package com.pintalk.common.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class ComCode extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "COMCODE_GENERATOR")
    @Column(columnDefinition = "int not null comment '고유번호'")
    private Long no;

    @Column(columnDefinition = "varchar(20) not null comment '코드값'")
    private String codeValue;
    @Column(columnDefinition = "varchar(20) not null comment '코드그룹'")
    private String codeGroup;
    @Column(columnDefinition = "varchar(20) not null comment '코드명'")
    private String codeName;
    @Column(columnDefinition = "varchar(20) not null comment '생성자'")
    private String codeUser;
}
