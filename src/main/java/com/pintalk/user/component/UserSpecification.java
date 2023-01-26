package com.pintalk.user.component;

import com.pintalk.user.entity.UserMember;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class UserSpecification {

    public static Specification<UserMember> searchWith(Map<String, Object> searchKeyword) {
        return (Specification<UserMember>) ((root, query, builder) -> {
            List<Predicate> predicate = getPredicateWithKeyword(searchKeyword, root, builder);
            return builder.and(predicate.toArray(new Predicate[0]));
        });
    }

    private static List<Predicate> getPredicateWithKeyword(Map<String, Object> searchKeyword, Root<UserMember> root, CriteriaBuilder builder) {
        List<Predicate> predicate = new ArrayList<>();

        String $signDate = "signDate";
        String $signDateStartValue = "";
        String $signDateEndValue = "";

        String $modifyDate = "modifyDate";
        String $modifyDateStartValue = "";
        String $modifyDateEndValue = "";

        for (String key : searchKeyword.keySet()) {
            if (key.equals("name") || key.equals("address") || key.equals("address1") || key.equals("email") || key.equals("phone2") || key.equals("phone3")) {
                predicate.add(builder.like(root.get(key), "%" + searchKeyword.get(key) + "%"));
            } else {
                if (key.equals("signDateStart") || key.equals("signDateEnd") || key.equals("modifyDateStart") || key.equals("modifyDateEnd")) {
                    if (key.equals("signDateStart")) {
                        $signDateStartValue = (String) searchKeyword.get(key);
                    }
                    if (key.equals("signDateEnd")) {
                        $signDateEndValue = (String) searchKeyword.get(key);
                    }
                    if (key.equals("modifyDateStart")) {
                        $modifyDateStartValue = (String) searchKeyword.get(key);
                    }
                    if (key.equals("modifyDateEnd")) {
                        $modifyDateEndValue = (String) searchKeyword.get(key);
                    }
                } else {
                    predicate.add(builder.equal(root.get(key), searchKeyword.get(key)));
                }
            }
        }

        if (searchKeyword.get("signDateStart") != null || searchKeyword.get("signDateEnd") != null) {
            if (searchKeyword.get("signDateStart") != null || searchKeyword.get("signDateStart") == null) {
                if (searchKeyword.get("signDateEnd") == null) {
                    $signDateEndValue = "99991231";
                }
                if (searchKeyword.get("signDateStart") == null) {
                    $signDateStartValue = "00000101";
                }
                predicate.add(builder.between(root.get($signDate), $signDateStartValue, $signDateEndValue));
            }
        }
        if (searchKeyword.get("modifyDateStart") != null || searchKeyword.get("modifyDateEnd") != null) {
            if (searchKeyword.get("modifyDateStart") != null || searchKeyword.get("modifyDateStart") == null) {
                if (searchKeyword.get("modifyDateStart") == null) {
                    $modifyDateStartValue = "00000101";
                }
                if (searchKeyword.get("modifyDateEnd") == null) {
                    $modifyDateEndValue = "99991231";
                }
                predicate.add(builder.between(root.get($modifyDate), $modifyDateStartValue, $modifyDateEndValue));
            }
        }
        return predicate;
    }

}