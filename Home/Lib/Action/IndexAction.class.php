<?php

include_once '/Util/MyCurl.php';


class IndexAction extends Action {
    
    private $website = "http://118.190.207.80";
    
    public function index(){
        
        $this->assign("website",$this->website);
        
        $column_nav = MyCurl::get($this->website."/main/column_nav");//die($column_nav);
        $this->assign("column_nav",$column_nav["data"]);
        
        
        $link = MyCurl::get($this->website."/main/link");//die($link);
        $this->assign("link",$link["data"]["list"]);
        
        
        $index = MyCurl::get($this->website."/main/index");//die($index);
        $this->assign("index",$index);
        
        
        
        $this->display("index");
        
        
    }
    
    
    public function article_detail(){
        $this->display("article_detail");
    }
    
    
    public function column(){
        $this->display("column");
    }
    
    public function fame_home_page(){
        $this->display("fame_home_page");
    }
    
    public function hall_of_fame(){
        $this->display("hall_of_fame");
    }
    
    public function live_broadcast_detail(){
        $this->display("live_broadcast_detail");
    }
    
    public function live_broadcast_list(){
        $this->display("live_broadcast_list");
    }
    
    public function pc_home(){
        $this->display("pc_home");
    }
    
    public function pc_message(){
        $this->display("pc_message");
    }
    
    public function pc_my_hall(){
        $this->display("pc_my_hall");
    }
    
    public function pc_personal_info(){
        $this->display("pc_personal_info");
    }
    
    public function pc_public(){
        $this->display("pc_public");
    }
    
    public function preview(){
        $this->display("preview");
    }
    
    public function search_result(){
        $this->display("search_result");
    }
    
    public function special_detail(){
        $this->display("special_detail");
    }
    
    public function special_theme_page(){
        $this->display("special_theme_page");
    }
    
    public function video_detail(){
        $this->display("video_detail");
    }
    
    
    
}