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
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "COMCODE_GENERATOR")
    @SequenceGenerator(name = "COMCODE_GENERATOR", sequenceName = "COMCODE_SEQ", initialValue = 1, allocationSize = 1)
    private Integer no;

    private String codeValue;
    private String codeGroup;
    private String codeName;
    private String codeUser;
}
