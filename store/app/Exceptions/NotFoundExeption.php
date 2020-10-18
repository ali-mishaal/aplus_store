<?php

namespace App\Exceptions;

use Exception;

class NotFoundExeption extends Exception
{
    //    page or other resource doesn't exist

    private $error;

    public function __construct($error , $message = "", $code = 0, Throwable $previous = null)
    {
        $this->error = $error;
        parent::__construct($message, $code, $previous);
    }

    public function render()
    {

       return \response()->json(['code'=>404,'message'=>$this->error],404);
    }
}
