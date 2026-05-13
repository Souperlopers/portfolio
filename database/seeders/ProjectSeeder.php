<?php

namespace Database\Seeders;

use App\Models\MemberProject;
use App\Models\Project;
use App\Models\Projectimage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(int $projectsQuantity, Collection $members)
    {
        return Project::factory($projectsQuantity)->create()->each(
            function ($project) use ($members) {
                $this->appendImages($project);
                $this->appendMembers($project, $members);
                $this->appendMemberProjectTags($project);
                $this->appendProjectTags($project);
            }
        );
    }


    private function appendImages(Project $project)
    {
        $imageNum = fake()->numberBetween(0, 10);

        $project->image = Projectimage::factory($imageNum)->for($project)->create();
    }


    private function appendMembers(Project $project, Collection $members)
    {
        $attachmentData = [];

        foreach (DatabaseSeeder::random($members) as $member) {
            $attachmentData[$member->id] = [
                'member_priority_in_project' => DatabaseSeeder::fakePriority($member),
                'project_priority_for_member' => DatabaseSeeder::fakePriority($project)
            ];
        }

        $project->members()->attach($attachmentData);
    }


    private function appendMemberProjectTags(Project $project)
    {
        foreach ($project->members as $member) {
            $mp = MemberProject::getRecord($member, $project);

            $tags = $member->tags()->get();
            $tags = DatabaseSeeder::random($tags);
            $tags = DatabaseSeeder::appendableTag($tags);
            $mp->tags()->attach($tags);
        }
    }


    public function projectMembersTags(Project $project)
    {
        $memberProjects = MemberProject::query()->where('project_id', $project->id)->get();

        $tags = collect();

        foreach ($memberProjects as $memberProject) {

            $tags = $tags->merge($memberProject->tags);
        }

        return $tags->unique()->values();
    }


    private function appendProjectTags(Project $project)
    {
        $tags = $this->projectMembersTags($project);
        $tags = DatabaseSeeder::appendableTag($tags);
        $project->tags()->attach($tags);
    }
}
