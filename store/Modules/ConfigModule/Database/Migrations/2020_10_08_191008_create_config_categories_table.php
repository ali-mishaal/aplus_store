<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConfigCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('config_categories', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });

        Schema::create('config_categories_translations', function (Blueprint $table) { 
            $table->bigIncrements('id'); 
            $table->string('locale')->index();

            $table->unsignedBigInteger('config_category_id');
            $table->unique(['config_category_id', 'locale']);
            $table->foreign('config_category_id')
                ->references('id')
                ->on('config_categories')
                ->onDelete('cascade');

            $table->string('title');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('config_categories_translations');
        Schema::dropIfExists('config_categories');
        
    }
}
