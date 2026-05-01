<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Projectimage;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(int $projectsQuantity, $members, int $membersQuantity)
    {
        return Project::factory($projectsQuantity)
            ->create()
            ->each(function ($project) use ($members, $membersQuantity) {
                // Get random members to attach to the project
                $randomMembers = $members->random(rand(1, $membersQuantity));

                // Prepare data for attaching members with pivot attributes
                $attachmentData = [];
                foreach ($randomMembers as $member) {
                    $attachmentData[$member->id] = [
                        'member_priority_in_project' => fake()->randomElement([
                            fake()->numberBetween(-128, 127),
                            $member->priority
                        ]),
                        'project_priority_for_member' => fake()->randomElement([
                            fake()->numberBetween(-128, 127),
                            $project->priority
                        ]),
                    ];
                }

                // Attach members with additional pivot data
                $project->members()->attach($attachmentData);

                // Collect all unique tag IDs from the project's members
                $projectTags = collect();
                foreach ($project->members as $projectMember) {
                    $projectTags = $projectTags->merge($projectMember->tags);
                }
                $projectTags = $projectTags->unique()->values();

                $attachmentData = [];
                foreach ($projectTags as $projectTag) {
                    $attachmentData[$projectTag->id] = [
                        'priority_for_taggable' => fake()->randomElement([
                            fake()->numberBetween(-128, 127),
                            $projectTag->priority
                        ]),
                    ];
                }

                // Make the tag IDs unique and attach them to the project
                $project->tags()->attach($attachmentData);

                // attach projectimages to the project
                $project->projectimages = Projectimage::factory(
                    fake()->numberBetween(0, 10)
                )->for($project)->create();
            });
    }
}
