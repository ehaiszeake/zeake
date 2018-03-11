<?php

// include_once dirname ( __FILE__ ).'/Util/MyCurl.php';
include_once './Util/MyCurl.php';
// require_once './Util/MyCurl.php';

class IndexAction extends Action {

    private $website = "http://testback.zaeke.com";//118.190.207.80
//     private $website = "http://118.190.207.80";//118.190.207.80
//     private $myCur = new MyCurl();

    function construct(){
        $this->assign("website",$this->website);
//         $column_nav = $this->myCur->get($this->website."/main/column_nav");
        $column_nav = MyCurl::get($this->website."/main/column_nav");//die($column_nav);
        $this->assign("column_nav",$column_nav["data"]);


        $link = MyCurl::get($this->website."/main/link");//die($link);
        $this->assign("link",$link["data"]["list"]);
    }

    public function index(){

        self::construct();

        $index = MyCurl::get($this->website."/main/index");//die($index);
        $this->assign("index",$index);



        $this->display("index");


    }


    public function article_detail(){
        self::construct();
        $this->assign("id",$_GET["id"]);
        $article = MyCurl::quickGet($this->website."/main/article",array(id=>$_GET["id"]));
        $this->assign("data",$article);


//         $this->display("article_detail_v2");
        $this->display("article_detail");
    }


    public function column(){

        self::construct();

        $column = $_GET["column"];
        $this->assign("column",$_GET["id"]);
        $this->assign("id",$_GET["id"]);


        $column_detail = MyCurl::quickGet($this->website."/main/column_detail",array(id=>$_GET["id"],skipnum=>0,length=>5));//var_dump($column_detail);die();
        $this->assign("index",$column_detail);

        $this->display("column");
    }

    public function fame_home_page(){
        self::construct();
        $this->display("zaeke_famous");
    }

    public function mobile_fame_home_page(){
        self::construct();
        //echo "lllll";
        $this->display("zaeke_personal");
    }


    public function hall_of_fame(){
        $this->assign("column_1","on");
        self::construct();

        $data = MyCurl::quickGet($this->website."/main/vip");//var_dump($data);die();
        $this->assign("data",$data);


        $this->display("hall_of_fame");
    }

    public function live_broadcast_detail(){
        self::construct();
        $this->display("live_broadcast_detail");
    }

    public function live_broadcast_list(){
        self::construct();
        $this->display("live_broadcast_list");
    }

    public function pc_home(){
        self::construct();
        $this->display("zaeke_center");
        #$this->display("pc_home");
    }

    public function mobile_home(){
        self::construct();
        $this->display("mobile_center");
        //echo "qwerqwer";
    }

    public function pc_message(){
        self::construct();
        $this->display("pc_message");
    }

    public function pc_my_hall(){
        self::construct();
        $this->display("pc_my_hall");
    }

    public function pc_personal_info(){
        self::construct();
        $this->display("pc_personal_info");
    }

    public function pc_public(){
        self::construct();
        $this->assign("pc_public_write",true);
        $this->display("pc_public");
    }

    public function preview(){
        self::construct();
        $this->display("preview");
    }

    public function search_result(){
        self::construct();
        $this->display("search_result");
    }

    public function special_detail(){
        self::construct();
        $this->display("special_detail");
    }

    public function special_theme_page(){
        $this->assign("column0","on");
        self::construct();

        $data = MyCurl::quickGet($this->website."/main/special_list",array(skipnum=>0,length=>10));//var_dump($data);die();
        $this->assign("data",$data);

        $this->display("special_theme_page");
    }

    public function video_detail(){
        self::construct();
        $this->display("video_detail");
    }



}
