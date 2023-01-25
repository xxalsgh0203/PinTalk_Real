package com.pintalk.comcode;

import com.pintalk.common.Service.ComCodeService;
import com.pintalk.common.entity.ComCode;
import com.pintalk.common.repository.ComCodeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.LongStream;
import java.util.stream.Stream;

@SpringBootTest
public class ComCodeTests {

    @Autowired
    private ComCodeService comCodeService;

    private ComCodeRepository comCodeRepository;

    List<ComCode> comCodes;


    @Test
    void test(){
        comCodes = comCodeService.getComCode("GENDER");
        System.out.println(comCodes);
    }
    @Test
    void test2(){




        String[] strArr = {"GENDER", "EMAIL"};



        for (String k : strArr) {
            System.out.println(" k : " + k);
            List<ComCode> result = comCodeService.getComCode(k);
            result.forEach(comCode -> System.out.println(comCode.getCodeValue()));
        }




//        arr.s
//        for(String a : arr)
//            System.out.println("a : " + a);
//        comCodes = arr.stream().


//        comCodes = comCodeService.getComCodeArr(arr);



//        System.out.println(comCodes);
    }

}
