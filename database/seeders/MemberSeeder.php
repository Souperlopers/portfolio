<?php

namespace Database\Seeders;

use App\Models\Member;
use App\Models\Tag;
use Illuminate\Database\Seeder;
use Ramsey\Collection\Collection;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(int $membersQuantity, $tags)
    {
        return Member::factory($membersQuantity)->create()
            ->each(function ($member) use ($tags) {
                // Ensure each member has 3 to 5 tags
                $numberOfTags = rand(3, 5);

                // Randomly select tags for the member
                $memberTags = $tags->random($numberOfTags);

                $attachmentData = [];
                foreach ($memberTags as $memberTag) {
                    $attachmentData[$memberTag->id] = [
                        'priority_for_taggable' => fake()->randomElement([
                            fake()->numberBetween(-128, 127),
                            $memberTag->priority
                        ]),
                    ];
                }

                $member->tags()->attach($attachmentData);
            });
    }
}
