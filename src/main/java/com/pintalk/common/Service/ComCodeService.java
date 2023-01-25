package com.pintalk.common.Service;

import com.pintalk.common.entity.ComCode;
import com.pintalk.common.repository.ComCodeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ComCodeService {
    private final ComCodeRepository comCodeRepository;

    public List<ComCode> getComCode(String codeGroup) {
        return comCodeRepository.findAllByCodeGroup(codeGroup);
    }
    public List<ComCode> getComCodeArr(String[] codeGroup) {
        return comCodeRepository.findAllByCodeGroup(codeGroup);
    }
}
