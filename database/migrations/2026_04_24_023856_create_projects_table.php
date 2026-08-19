<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string("slug")->unique()->index();
            $table->tinyInteger('priority')->default(0)->index();
            $table->string('thumbnail')/*->unique()*/->nullable();

            $table->string("name")->unique()->index();
            $table->string("url")->unique()->nullable();
            $table->string("figma")->unique()->nullable();
            $table->string("github")->unique()->nullable();
            $table->text('short_description')->nullable();
            $table->text('description')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
