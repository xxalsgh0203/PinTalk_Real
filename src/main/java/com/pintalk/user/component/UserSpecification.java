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
            if( key.equals("name") || key.equals("address") || key.equals("address1") || key.equals("email") || key.equals("phone2") || key.equals("phone3")) {
                predicate.add(builder.like(root.get(key), "%" + searchKeyword.get(key) + "%"));
            } else if (key.equals("signDateStart")){
                $signDateStartValue = searchKeyword.get("signDateStart") != null ? (String) searchKeyword.get("signDateStart") : "%";
            } else if (key.equals("signDateEnd")) {
                $signDateEndValue = searchKeyword.get("signDateEnd") != null ? (String) searchKeyword.get("signDateEnd") : "%";
            } else if (key.equals("modifyDateStart")){
                $modifyDateStartValue = searchKeyword.get("modifyDateStart") != null ? (String) searchKeyword.get("modifyDateStart") : "%";
            } else if (key.equals("modifyDateEnd")) {
                $modifyDateEndValue = searchKeyword.get("modifyDateEnd") != null ? (String) searchKeyword.get("modifyDateEnd") : "%";
            } else {
                predicate.add(builder.equal(root.get(key), searchKeyword.get(key)));
            }
        }

        if($signDateStartValue != null && $signDateEndValue != null){
            predicate.add(builder.between(root.get($signDate),$signDateStartValue,$signDateEndValue));
        } else {
            predicate.add(builder.between(root.get($signDate),$signDateStartValue,$signDateEndValue));
        }

        if($modifyDateStartValue != null && $modifyDateEndValue != null){
            predicate.add(builder.between(root.get($modifyDate),$modifyDateStartValue,$modifyDateEndValue));
        } else {
            predicate.add(builder.between(root.get($modifyDate),$signDateStartValue,$signDateEndValue));
        }

        return predicate;
    }

}