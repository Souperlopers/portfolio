<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
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
            'username' => fake()->userName(),

            'name' => fake()->name(),
            'description' => fake()->paragraph(),
            'position' => fake()->jobTitle(),

            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->unique()->phoneNumber(),
            'linkedin_url' => fake()->unique()->url(),
            'github_url' => fake()->unique()->url(),
        ];
    }
}
