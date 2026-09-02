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
		Schema::create('projectimages', function (Blueprint $table) {
			$table->ulid('id')->primary();
			$table->foreignId('project_id')->on('projects')->cascadeOnDelete();
			$table->tinyInteger('priority')->default(0)->index();
			$table->string('path')/*->unique()*/;
			$table->text('description')->nullable();

			$table->timestamp('created_at');
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('projectimages');
	}
};
