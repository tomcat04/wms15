/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.domain;

/**
 *
 * @author cgx1844568
 * @date 2014-8-22
 * @time 11:06:40
 *
 */
public class Menu {
    private String id;  
    private String tid;
    private String text;  
    private boolean leaf;  
    private String parentId;

    public String getTid() {
        return tid;
    }

    public void setTid(String tid) {
        this.tid = tid;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isLeaf() {
        return leaf;
    }

    public void setLeaf(boolean leaf) {
        this.leaf = leaf;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }
    
    public Menu(){
    };
    
    public Menu(String id,String tid,String text,boolean  leaf,String parentId){
        this.id = id;
        this.tid = tid;
        this.text = text;
        this.leaf = leaf;
        this.parentId = parentId;
    }
    public Menu(String tid,String text,boolean  leaf,String parentId){
        this.tid = tid;
        this.text = text;
        this.leaf = leaf;
        this.parentId = parentId;
    }
}
