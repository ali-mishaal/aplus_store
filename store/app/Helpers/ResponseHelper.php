<?php


namespace App\Helpers;


use phpDocumentor\Reflection\Types\Self_;

class ResponseHelper
{
    public static $code=200;
    public static $data=[];

    private static $_instance = null;

    private function __construct ()
    {
      Self::$data['code']=200;
    }

    public static function getInstance ()
    {
        if (self::$_instance === null) {
            self::$_instance = new self;
        }

        return self::$_instance;
    }

    public function setCode($value)
    {
        self::$data['code'] = $value;
        self::$code = $value;
        return $this;
    }

    public function setMessage($value)
    {
        self::$data['message'] = $value;
        return $this;
    }

    public function setData($value) {
        self::$data['data'] = $value;
        return $this;
    }

    public function response() {
        return \response()->json(self::$data,self::$code);
    }
}
