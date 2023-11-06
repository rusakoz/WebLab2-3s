package com.lab2.web.model;

import lombok.EqualsAndHashCode;
import lombok.ToString;

@EqualsAndHashCode
@ToString
public class CheckHit {

    public static boolean checkHit(float X,float Y,float R){
        return (X <= R && Y <= R && X >= 0 &&  Y >= 0) ||
                (Math.pow(X, 2) + Math.pow(Y, 2) <= Math.pow(R, 2) && X <= 0 && Y <= 0) ||
                (Math.abs(Y) + Math.abs(X) * 2 <= R && X <= 0 && Y >= 0);
    }
}
