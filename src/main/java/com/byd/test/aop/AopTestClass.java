/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.aop;

import java.util.Date;

/**
 *
 * @author cgx1844568
 * @date 2014-5-9
 * @time 14:57:48
 *
 */
public class AopTestClass {
    public void checkAop(){
        System.out.println("AopTestClass.checkAop" + new Date());
    }
    public void checkLog(){
        System.out.println("AopTestClass.checkLog" + new Date());
    }

}
