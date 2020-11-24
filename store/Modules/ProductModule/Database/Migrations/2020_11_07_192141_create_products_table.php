<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBiginteger('category_id');
            $table->unsignedBiginteger('measurement_id');
            $table->integer('quantity');
            $table->string('model');
            $table->string('image');
            $table->text('imgs')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('category_id')
            ->references('id')
            ->on('categories')
            ->onDelete('cascade');

            $table->foreign('measurement_id')
            ->references('id')
            ->on('measurements')
            ->onDelete('cascade');
        });

        Schema::create('product_translations', function (Blueprint $table) { 
            $table->id(); 
            $table->string('locale')->index();

            $table->unsignedBigInteger('product_id');
            $table->unique(['product_id', 'locale']);
            $table->foreign('product_id')
                ->references('id')
                ->on('products')
                ->onDelete('cascade');

            $table->string('name');
            $table->text('description')->nullable();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_translations');
        Schema::dropIfExists('products');
    }
}
