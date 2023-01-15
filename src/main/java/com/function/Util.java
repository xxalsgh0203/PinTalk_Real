package com.function;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.*;

public class Util {

    Util util;

    /**
     * Object to Map
     * @param object
     * @return
     */
    public HashMap convertObjectToMap(Object object) {
        ObjectMapper objectMapper = new ObjectMapper();

        HashMap<String, Object> result = (HashMap<String, Object>) objectMapper.convertValue(object, Map.class);
        return result;
    }

    /**
     * Map values null Remove
     * @param map
     */
    public void mapValueNullRemove(HashMap map){

        map.values().removeAll(Collections.singletonList(null));
        map.values().removeAll(Collections.singletonList(""));

    }

    /**
     * mapKeySetToList
     * @param map
     * @return
     */
    public List mapKeySetToList(Map map){
        List result = new ArrayList();

        Iterator<String> keys = map.keySet().iterator();
        while (keys.hasNext()){
            String key = keys.next();
            result.add(key);
        }
        return result;
    }

}
