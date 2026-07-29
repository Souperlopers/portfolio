<?php

use App\Models\DevelopmentCycle;
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
		Schema::create('development_cycles', function (Blueprint $table) {
			$table->ulid('id')->primary();

			$table->bigInteger('project_id')->required()->index();
			$table->foreign('project_id')->references('id')->on('projects')->cascadeOnDelete();

			$table->enum('name', array_keys(DevelopmentCycle::NAMES));
			$table->text('description')->nullable();

			$table->timestamp('started_at')->nullable();
			$table->timestamp('completed_at')->nullable();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('development_cycles');
	}
};
