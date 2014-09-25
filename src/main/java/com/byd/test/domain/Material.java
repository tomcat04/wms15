/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.byd.test.domain;

import com.byd.test.bean.BaseURL;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author cgx1844568
 * @date 2014-9-2
 * @time 11:28:28
 *
 */
public class Material {

    private static String baseUrl = "http://localhost:8091/wms15";
    
    private String materialCode;

    private String materialDesc;

    private String imagUrl;

    private String fileUrl;
    
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
//        if(imagUrl != null){
//            this.imagUrl = baseUrl + imagUrl;
//        }
        this.date = date;
    }
    
    public Material(String materialCode,String materialDesc,String imagUrl){
        this.materialCode = materialCode;
        this.materialDesc = materialDesc;
        this.imagUrl = imagUrl;
//        if(imagUrl != null){
//            this.imagUrl = baseUrl + imagUrl;
//        }
        this.date = new Date();
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

}
