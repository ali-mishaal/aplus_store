<?php

namespace App\Exceptions;

use Exception;

class NotAllowedException extends Exception
{
    //   logged in but access to the requested data is not allowed

    private $error;

    public function __construct($error , $message = "", $code = 0, Throwable $previous = null)
    {
        $this->error = $error;
        parent::__construct($message, $code, $previous);
    }

    public function render()
    {

        return \response()->json(['code'=>403,'message'=>$this->error],403);
    }
}
