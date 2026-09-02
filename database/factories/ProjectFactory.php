<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		return [
			'name' => $name = fake()->unique()->words(3, true),
			'priority' => fake()->randomElement([fake()->numberBetween(-128, 127), 0]),
			'slug' => Str::slug($name),
			'thumbnail' => fake()->randomElement(range(1, 3)) . '.png',
			'url' => fake()->unique()->url(),
			'short_description' => fake()->paragraph(1),
			'description' => fake()->paragraph(),
		];
	}
}
