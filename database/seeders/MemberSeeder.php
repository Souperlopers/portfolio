<?php

namespace Database\Seeders;

use App\Models\Member;
use Illuminate\Database\Seeder;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(int $membersQuantity, $tags)
    {
        return Member::factory($membersQuantity)->create()
            ->each(function ($member) use ($tags) {

                // Randomly select tags for the member
                $memberTags = $tags->random(rand(1, $tags->count()));

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
