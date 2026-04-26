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
        Schema::create('member_project', function (Blueprint $table) {
            $table->bigInteger("member_id")->unsigned();
            $table->bigInteger("project_id")->unsigned();

            $table->foreign("member_id")->references("id")->on("members")->cascadeOnDelete();
            $table->foreign("project_id")->references("id")->on("projects")->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('member_project');
    }
};
