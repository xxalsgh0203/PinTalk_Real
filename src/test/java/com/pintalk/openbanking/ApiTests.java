package com.pintalk.openbanking;

import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

@SpringBootTest
public class ApiTests {

    @Test
    //오픈뱅킹 토큰발급
    public void Token() {

        String client_id = "8757fc57-8765-48ab-a705-48f26112eb63&";
        String client_secret = "c18084d6-1c45-4872-8c12-3b1f60d84df1&";
        String scope = "oob&";
        String grant_type = "client_credentials";


        String  requestURL = "https://developers.kftc.or.kr/proxy/oauth/2.0/token?client_id=";
                requestURL += client_id + "client_secret=";
                requestURL += client_secret + "scope=";
                requestURL += scope + "grant_type=";
                requestURL += grant_type;

        try {
            URL url = new URL(requestURL);

            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("POST"); // http 메서드
            conn.setRequestProperty("Accept", "application/json"); // header Accept 정보
            conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded"); // header Content-Type 정보

            conn.setDoOutput(true); // 서버로부터 받는 값이 있다면 true

            // 서버로부터 데이터 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder sb = new StringBuilder();
            String line = null;

            if(conn.getResponseCode() == HttpURLConnection.HTTP_OK) {
                while ((line = br.readLine()) != null) { // 읽을 수 있을 때 까지 반복
                    sb.append(line);
                }
                br.close();
            }

            JSONObject obj = new JSONObject(sb.toString()); // json으로 변경 (역직렬화)
            System.out.println("JSON object = "+ obj);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
