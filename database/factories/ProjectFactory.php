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
        $name = fake()->unique()->words(3, true);

        return [
            'name' => $name,
            'priority' => fake()->randomElement([fake()->numberBetween(-128, 127), 0]),
            'slug' => Str::slug($name),
            'url' => fake()->unique()->url(),
            'description' => fake()->paragraph(),
        ];
    }
}
