package com.pintalk.common.repository;

import com.pintalk.common.entity.ComCode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComCodeRepository extends JpaRepository<ComCode, Long> {
    List<ComCode> findAllByCodeGroup(String codeGroup);
    List<ComCode> findAllByCodeGroup(String[] codeGroup);
}
