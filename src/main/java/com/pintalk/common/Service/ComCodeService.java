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
        for (String k : codeGroup) {
            System.out.println(" k : " + k);
            result = comCodeRepository.findAllByCodeGroup(k);
            result.forEach(comCode -> System.out.println(comCode.getCodeValue()));
        }

        return result;
    }
}
