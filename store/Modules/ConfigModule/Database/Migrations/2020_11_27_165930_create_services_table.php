<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->timestamps();
        });

        Schema::create('service_translations', function (Blueprint $table) { 
            $table->id(); 
            $table->string('locale')->index();

            $table->unsignedBigInteger('service_id');
            $table->unique(['service_id', 'locale']);
            $table->foreign('service_id')
                ->references('id')
                ->on('services')
                ->onDelete('cascade');

            $table->string('name');
            $table->text('description');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_translations');
        Schema::dropIfExists('services');
    }
}
