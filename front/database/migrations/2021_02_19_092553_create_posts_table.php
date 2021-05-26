<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title');
            $table->string('meta_title');
            $table->string('post_url', 30)->unique();
            $table->string('description')->nullable();
            $table->longtext('content');
            $table->string('cover_photo_url')->nullable();
            $table->foreignId('posted_by');
            $table->foreignId('parent_post_id')->nullable();
            $table->foreignId('category_id')->nullable();
            $table->dateTime('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
