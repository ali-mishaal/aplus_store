<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->timestamps();
        });

        Schema::create('news_translations', function (Blueprint $table) { 
            $table->id(); 
            $table->string('locale')->index();

            $table->unsignedBigInteger('news_id');
            $table->unique(['news_id', 'locale']);
            $table->foreign('news_id')
                ->references('id')
                ->on('news')
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
        Schema::dropIfExists('news_translations');
        Schema::dropIfExists('news');
    }
}
