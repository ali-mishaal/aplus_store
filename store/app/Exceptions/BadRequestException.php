<?php

namespace App\Exceptions;

use Exception;

class BadRequestException extends Exception
{
    //    something wrong with url or parameters

    private $error = 'something wrong please try again later';

    public function __construct($error , $message = "", $code = 0, Throwable $previous = null)
    {
        $this->error = !empty($error)?$error:$this->error;
        parent::__construct($message, $code, $previous);
    }

    public function render()
    {

        return \response()->json(['code'=>400,'message'=>$this->error],400);
    }
}
