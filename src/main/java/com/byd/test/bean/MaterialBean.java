/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.bean;

import org.springframework.web.multipart.commons.CommonsMultipartFile;

/**
 *
 * @author cgx1844568
 * @date 2014-9-24
 * @time 15:56:58
 *
 */
public class MaterialBean {
    private String materialCode;
    private String materialDesc;
    private CommonsMultipartFile file;

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

    public CommonsMultipartFile getFile() {
        return file;
    }

    public void setFile(CommonsMultipartFile file) {
        this.file = file;
    }

}
