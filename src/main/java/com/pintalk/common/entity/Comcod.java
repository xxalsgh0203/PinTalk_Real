package com.pintalk.common.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class Comcod extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "COMCOD_GENERATOR")
    @SequenceGenerator(name = "COMCOD_GENERATOR", sequenceName = "COMCOD_SEQ", initialValue = 1, allocationSize = 1)
    private Integer no;

    private String code_value;
    private String code_name;
    private String username;
}
