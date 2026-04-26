<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Member;
use App\Models\Project;
use App\Models\Tag;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tag>
 */
class TagFactory extends Factory
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
            'id' => fake()->unique()->numberBetween(),
            'name' => fake()->word(),
            'type' => fake()->randomElement(Tag::TYPES),
            'version' => fake()->optional()->word(),
            'taggable_id' => $related->id,
            'taggable_type' => $taggable,
        ];
    }
}
