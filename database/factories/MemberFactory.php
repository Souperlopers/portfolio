<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Member>
 */
class MemberFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		return [
			'name'        => $name = fake()->unique()->name(),
			'description' => fake()->paragraph(),
			'position'    => fake()->jobTitle(),

			'priority'  => fake()->randomElement([fake()->numberBetween(-128, 127), 0]),
			'slug'      => Str::slug($name),
			'thumbnail' => fake()->randomElement(range(1, 3)) . '.jpg',
			'banner'    => fake()->randomElement([
				fake()->randomElement(range(1, 2)) . '.jpg',
				null,
			]),

			'email'        => fake()->unique()->safeEmail(),
			'phone'        => fake()->unique()->phoneNumber(),
			'linkedin_url' => fake()->unique()->url(),
			'github_url'   => fake()->unique()->url(),
		];
	}
}
