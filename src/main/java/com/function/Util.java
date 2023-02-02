package com.function;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class Util {

    private Logger log = LoggerFactory.getLogger(getClass().getName());

    /**
     * Object to Map
     *
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
     *
     * @param map
     */
    public void mapValueNullRemove(HashMap map) {

        map.values().removeAll(Collections.singletonList(null));
        map.values().removeAll(Collections.singletonList(""));

    }

    /**
     * mapKeySetToList
     *
     * @param map
     * @return
     */
    public List mapKeySetToList(Map map) {
        List result = new ArrayList();

        Iterator<String> keys = map.keySet().iterator();
        while (keys.hasNext()) {
            String key = keys.next();
            result.add(key);
        }
        return result;
    }

    /**
     * Date Format
     *
     * @param dateStr       변경할 날짜
     * @param dateStrFormat 변경할 날짜 현재 패턴
     * @param patternFormat 변경할 날짜 바꿀 패턴
     * @return
     * @throws ParseException
     */
    public String setDateFormatStr(String dateStr, String dateStrFormat, String patternFormat) throws ParseException {

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(dateStrFormat);
        Date date = simpleDateFormat.parse(dateStr);
        String result = new SimpleDateFormat(patternFormat).format(date);

        return result;
    }

    /**
     * Date Format
     *
     * @param dateStrFormat 변경할 날짜 패턴
     * @return
     * @throws ParseException
     */
    public String dateNowToStr(String dateStrFormat) {
        String result = LocalDateTime.now().format(DateTimeFormatter.ofPattern(dateStrFormat));
        return result;
    }

    /**
     * HashMap null 값 제거
     * @param map
     * @return
     */
    public HashMap mapKeyValueOupPut(Map map) {
        HashMap result = new HashMap();

        Iterator<Map.Entry<Object, Object>> it = map.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry<Object, Object> entry = it.next();
            log.debug(entry.getKey() + " : " + entry.getValue());
            if (entry.getValue() != null) {
                result.put(entry.getKey(), entry.getValue());
            }
        }
        return result;
    }

    public String passwordEncoder(String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String result = passwordEncoder.encode(password);
        return result;
    }
}
