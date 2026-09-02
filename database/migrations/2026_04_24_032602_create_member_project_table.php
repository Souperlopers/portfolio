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
			$table->id();
			$table->foreignId('member_id')->on('members')->cascadeOnDelete();
			$table->foreignId('project_id')->on('projects')->cascadeOnDelete();

			$table->tinyInteger('member_priority_in_project')->required()->index();
			$table->tinyInteger('project_priority_for_member')->required()->index();
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
