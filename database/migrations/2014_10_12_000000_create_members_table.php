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
		Schema::create('members', function (Blueprint $table) {
			$table->id();
			$table->string('slug')->unique()->index();
			$table->tinyInteger('priority')->default(0)->index();

			$table->string('name')->unique()->index();
			$table->text('description')->nullable();
			$table->string('position');
			$table->string('thumbnail')/*->unique()*/->nullable();
			$table->string('banner')/*->unique()*/->nullable();

			$table->string('email')->unique()->nullable();
			$table->string('phone')->unique()->nullable();
			$table->string('linkedin_url')->unique()->nullable();
			$table->string('github_url')->unique()->nullable();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('members');
	}
};
