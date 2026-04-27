<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Member;
use App\Models\Project;
use App\Models\Tag;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // disable foreign key checking temporarily
        DB::statement('PRAGMA foreign_keys = OFF;');

        // clear out tables previous data
        DB::table('taggables')->truncate();
        DB::table('member_project')->truncate();
        Member::truncate();
        Project::truncate();
        Tag::truncate();

        // define the amount each table should have value
        $membersQuantity = 10;
        $projectsQuantity = 30;
        $tagsQuantity = 15;

        // create tags
        $tags = Tag::factory($tagsQuantity)->create();

        // Create members and assign tags
        $members = Member::factory($membersQuantity)->create()
            ->each(function ($member) use ($tags) {
                // Ensure each member has 3 to 5 tags
                $numberOfTags = rand(3, 5);

                // Randomly select tag IDs for the member
                $tagIds = $tags->pluck('id'); // Get IDs of all created tags
                $memberTagIds = $tagIds->random($numberOfTags);
                $member->tags()->attach($memberTagIds);
            });

        // Create projects and associate members
        Project::factory($projectsQuantity)->create()
            ->each(function ($project) use ($members, $membersQuantity) {
                // Attach members to the project
                $randMemberIds = $members->random(rand(1, $membersQuantity))->pluck('id');
                $project->members()->attach($randMemberIds);

                // Collect all unique tag IDs from the project's members
                $projectTagIds = collect();
                foreach ($project->members as $projectMember) {
                    $projectTagIds = $projectTagIds->merge($projectMember->tags->pluck('id'));
                }

                // Make the tag IDs unique and attach them to the project
                $project->tags()->attach($projectTagIds->unique()->values());
            });
    }
}
