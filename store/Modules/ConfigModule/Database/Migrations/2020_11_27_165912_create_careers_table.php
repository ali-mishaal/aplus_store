<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCareersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->timestamps();
        });

        Schema::create('career_translations', function (Blueprint $table) { 
            $table->id(); 
            $table->string('locale')->index();

            $table->unsignedBigInteger('career_id');
            $table->unique(['career_id', 'locale']);
            $table->foreign('career_id')
                ->references('id')
                ->on('careers')
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
        Schema::dropIfExists('career_translations');
        Schema::dropIfExists('careers');
    }
}
