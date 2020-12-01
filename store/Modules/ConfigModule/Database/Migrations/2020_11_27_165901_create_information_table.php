<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('information', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->timestamps();
        });

        Schema::create('information_translations', function (Blueprint $table) { 
            $table->id(); 
            $table->string('locale')->index();

            $table->unsignedBigInteger('information_id');
            $table->unique(['information_id', 'locale']);
            $table->foreign('information_id')
                ->references('id')
                ->on('information')
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
        Schema::dropIfExists('information_translations');
        Schema::dropIfExists('information');
    }
}
