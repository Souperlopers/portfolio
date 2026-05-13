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
            $table->string("slug", 50)->unique()->index();
            $table->tinyInteger('priority')->default(0)->index();
            $table->string('thumbnail')/*->unique()*/;

            $table->string("name", 50)->unique()->index();
            $table->string("url", 150)->nullable();
            $table->string('description', 1000)->nullable();
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
