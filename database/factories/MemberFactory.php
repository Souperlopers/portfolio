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
        $name = fake()->unique()->name();

        return [
            'name' => $name,
            'description' => fake()->paragraph(),
            'position' => fake()->jobTitle(),

            'priority' => fake()->randomElement([fake()->numberBetween(-128, 127), 0]),
            'slug' => Str::slug($name),
            'thumbnail' => '/assets/images/m/' . fake()->randomElement(range(1, 3)) . '.png',

            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->unique()->phoneNumber(),
            'linkedin_url' => fake()->unique()->url(),
            'github_url' => fake()->unique()->url(),
        ];
    }
}
