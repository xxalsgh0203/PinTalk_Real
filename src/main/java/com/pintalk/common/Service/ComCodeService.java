package com.pintalk.common.Service;

import com.pintalk.common.entity.ComCode;
import com.pintalk.common.repository.ComCodeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ComCodeService {
    private final ComCodeRepository comCodeRepository;

    public List<ComCode> getComCode(String codeGroup) {
        List<ComCode> result = comCodeRepository.findAllByCodeGroup(codeGroup);
        return result;
    }
    public List<ComCode> getComCodeArr(String[] codeGroup) {
        List<ComCode> result = new ArrayList<>();
        for (String key : codeGroup) {
            result = comCodeRepository.findAllByCodeGroup(key);
            result.forEach(comCode -> comCode.getCodeValue());
        }

        return result;
    }
}
