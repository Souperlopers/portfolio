<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Member;
use App\Models\Project;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TaggableFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $taggable = fake()->randomElement([
            Member::class,
            Project::class,
        ]);

        $related = $taggable::inRandomOrder()->first();

        return [
            'tag_id' => fake()->unique()->numberBetween(),
            'taggable_id' => $related->id,
            'taggable_type' => $taggable,
        ];
    }
}
