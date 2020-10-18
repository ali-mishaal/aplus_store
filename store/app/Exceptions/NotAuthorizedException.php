<?php

namespace App\Exceptions;

use Exception;

class NotAuthorizedException extends Exception
{
   //    not loggen in

   private $error;

   public function __construct($error , $message = "", $code = 0, Throwable $previous = null)
   {
       $this->error = $error;
       parent::__construct($message, $code, $previous);
   }

   public function render()
   {

       return \response()->json(['code'=>401,'message'=>$this->error],401);
   }
}
