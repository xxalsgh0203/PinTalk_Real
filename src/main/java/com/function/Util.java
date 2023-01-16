package com.function;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.text.ParseException;
import java.text.SimpleDateFormat;
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

    /**
     * Date Format
     * @param dateStr 변경할 날짜
     * @param dateStrFormat 변경할 날짜 현재 패턴
     * @param patternFormat 변경할 날짜 바꿀 패턴
     * @return
     * @throws ParseException
     */
    public String setDateFormatStr(String dateStr,String dateStrFormat, String patternFormat) throws ParseException {

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(dateStrFormat);
        Date date= simpleDateFormat.parse(dateStr);
        String result = new SimpleDateFormat(patternFormat).format(date);

        return result;
    }
}
