/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.byd.test.domain;

import java.util.Date;

/**
 *
 * @author cgx1844568
 * @date 2014-9-2
 * @time 11:28:28
 *
 */
public class Material {

    private String materialCode;

    private String materialDesc;

    private String imagUrl;

    private Date date;

    public String getMaterialCode() {
        return materialCode;
    }

    public void setMaterialCode(String materialCode) {
        this.materialCode = materialCode;
    }

    public String getMaterialDesc() {
        return materialDesc;
    }

    public void setMaterialDesc(String materialDesc) {
        this.materialDesc = materialDesc;
    }

    public String getImagUrl() {
        return imagUrl;
    }

    public void setImagUrl(String imagUrl) {
        this.imagUrl = imagUrl;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    
    public Material(){
    }
    
    public Material(String materialCode,String materialDesc,String imagUrl,Date date){
        this.materialCode = materialCode;
        this.materialDesc = materialDesc;
        this.imagUrl = imagUrl;
        this.date = date;
    }
    
    public Material(String materialCode,String materialDesc,String imagUrl){
        this.materialCode = materialCode;
        this.materialDesc = materialDesc;
        this.imagUrl = imagUrl;
        this.date = new Date();
    }

}
