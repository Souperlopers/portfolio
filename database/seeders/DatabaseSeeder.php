<?php

namespace Database\Seeders;

use App\Models\Member;
use App\Models\MemberProject;
use App\Models\Project;
use App\Models\Projectimage;
use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // clear out tables previous data
        DB::table('taggables')->truncate();
        Tag::truncate();
        MemberProject::truncate();
        Member::truncate();
        Projectimage::truncate();
        Project::truncate();

        // define the amount each table should have value
        $tagsQuantity = 15;
        $membersQuantity = 5;
        $projectsQuantity = 30;

        $tags = (new TagSeeder)->run($tagsQuantity);
        $members = (new MemberSeeder)->run($membersQuantity, $tags);
        $projects = (new ProjectSeeder)->run($projectsQuantity, $members);
    }
}
