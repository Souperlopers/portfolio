<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Projectimage>
 */
class ProjectimageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'priority' => fake()->randomElement([fake()->numberBetween(-128, 127), 0]),
            'path' => '/assets/images/p/gallery/' . fake()->randomElement(range(1, 7)) . '.png',
            'description' => fake()->paragraph(),
            'created_at' => fake()->time(),
        ];
    }
}
