package com.function;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Map;

public class function {


    /**
     * Object to Map keySet
     * @param object
     * @return
     */
    public Map mapKeySet(Object object){

        ObjectMapper objectMapper = new ObjectMapper();

        Map<String, Object> result = objectMapper.convertValue(object, Map.class);
            for(String key : result.keySet()){
            System.out.println(key + " : " + key);
        }

        return result;

    }

}
