package com.pintalk.common.entity;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
//JPA Entity 클래스들이 BaseEntity를 상속할 때 createdDate, modifiedDate도 컬럼으로 인식하도록 한다.
@MappedSuperclass
//BaseEntity에 Auditing 기능을 포함 시킨다.
//리스너 클래스 지정을 통해 엔티티 객체 상태가 변경될 때 해당 리스너로 콜백을 받는다.
//AuditingEntityListener는 JPA 내부에서 엔티티 객체가 생성/변경 되는것을 감지한다.
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity {

//    @Column(name = "reg_date", nullable = false, updatable = false)
//    //생성일 자동 저장
    @CreatedDate
    private LocalDateTime reg_Date;
//
//    @Column(name = "update_date")
//    //마지막 수정시간 자동저장
    @LastModifiedDate
    private LocalDateTime update_Date;
}
