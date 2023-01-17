package com.pintalk.user.entity;

import com.pintalk.common.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@Table(name = "USER_MEMBER")
public class UserMember extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USERMEMBER_GENERATOR")
    @SequenceGenerator(name = "USERMEMBER_GENERATOR", sequenceName = "USERMEMBER_SEQ", initialValue = 1, allocationSize = 1)
    private Integer no;             //유저 고유 번호

    private String id;              //유저 아이디
    private String password;        //유저 패스워드
    private String name;            //유저 이름
    private String ssn;             //유저 주민번호
    private String ssn1;            //유저 주민번호(앞자리)
    private String ssn2;            //유저 주민번호(뒷자리)
    private String year;            //유저 생년
    private String month;           //유저 월
    private String day;             //유저 일
    private String phone1;          //유저 번호 앞자리
    private String phone2;          //유저 번호 중간자리
    private String phone3;          //유저 번호 뒷자리
    private String email;           //유저 이메일
    private String gender;          //유저 성별
    private String address1;        //유저 사는곳
    private String address2;        //유저 상세주소
    private String jobKey;          //유저 직업코드
    private String status;          //유저 상태
    private String saveStatus;      //유저 활성화

    @Column(name = "signDate", length = 8)
    private String signDate;        // 가입날짜
    @Column(name = "modifyDate", length = 8)
    private String modifyDate;      // 정보수정 날짜


}
