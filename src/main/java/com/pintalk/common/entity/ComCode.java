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
    private Long no;

    private String codeValue;
    private String codeGroup;
    private String codeName;
    private String codeUser;
}
