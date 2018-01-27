<?php

class MyCurl {    
    private static  $url = ''; // 访问的url
    private static $oriUrl = ''; // referer url
    private static $data = array(); // 可能发出的数据 post,put
    private   static $method; // 访问方式，默认是GET请求
    
    public static  function post($url,$data = array()){
        return json_decode(self::send($url,$data,"post"),true);
    }
    
    public static  function get($url,$data = array()){
        return json_decode(self::send($url,$data,"get"),true);
    }
    
    public static function send($url, $data = array(), $method = 'get') {
        if (!$url) exit('url can not be null');
        self::$url = $url;
        self::$method = $method;
        $urlArr = parse_url($url);
        self::$oriUrl = $urlArr['scheme'] .'://'. $urlArr['host'];
        self::$data = $data;
        if ( !in_array(
                self::$method,
                array('get', 'post', 'put', 'delete')
             )
           ) {
                    exit('error request method type!');
             }
        
                $func = self::$method . 'Request';
                return self::$func(self::$url);
    }
    /**
     * 基础发起curl请求函数
     * @param int $is_post 是否是post请求
     */
    private  function doRequest($is_post = 0) {
        $ch = curl_init();//初始化curl
        curl_setopt($ch, CURLOPT_URL, self::$url);//抓取指定网页
        curl_setopt($ch, CURLOPT_AUTOREFERER, true);
        // 来源一定要设置成来自本站
        curl_setopt($ch, CURLOPT_REFERER, self::$oriUrl);
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//要求结果为字符串且输出到屏幕上
        if($is_post == 1) curl_setopt($ch, CURLOPT_POST, $is_post);//post提交方式
        if (!empty(self::$data)) {
            self::$data = self::dealPostData(self::$data);
            curl_setopt($ch, CURLOPT_POSTFIELDS, self::$data);
        }
        
        $data = curl_exec($ch);//运行curl    
        curl_close($ch);
        return $data;
    }
    /**
     * 发起get请求
     */
    public function getRequest() {
        return self::doRequest(0);
    }
    /**
     * 发起post请求
     */
    public function postRequest() {
        return self::doRequest(1);
    }
    /**
     * 处理发起非get请求的传输数据
     * 
     * @param array $postData
     */
    public function dealPostData($postData) {
        if (!is_array($postData)) exit('post data should be array');
        foreach ($postData as $k => $v) {
            $o .= "$k=" . urlencode($v) . "&";
        }
        $postData = substr($o, 0, -1);
        return $postData;
    }
    /**
     * 发起put请求
     */
    public function putRequest($param) {
        return self::doRequest(2);
    }
    
    /**
     * 发起delete请求
     */
    public function deleteRequest($param) {
        return self::doRequest(3);
    }
    
    
    
    public static function quickGet($url,$data = array(), $timeoutMs = 3000)
    {
        if(!empty($data))$url.="?".self::dealPostData($data);
        return json_decode(self::eRequest($url, false, $timeoutMs),true);
    }
    
    public static function quickPost($url, $data, $timeoutMs = 3000)
    {
        return self::eRequest($url, $data, $timeoutMs);
    }
    
    protected static function eRequest($url, $data, $timeoutMs = 3000)
    {
        $ch = curl_init();
    
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT_MS, $timeoutMs);
    
        if (!empty($data)) {
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        }
    
        $rs = curl_exec($ch);
    
        curl_close($ch);
    
        return $rs;
    }
    
    
    
    
}


// $res = MyCurl::send('http://www.ipip.net/ip.html',array('ip' => '61.142.206.145'),'post');
// $res = MyCurl::post('http://www.ipip.net/ip.html',array('ip' => '61.142.206.145'));
// var_dump($res);die();

