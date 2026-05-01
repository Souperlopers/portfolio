<?php

namespace Database\Seeders;

use App\Models\Member;
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
        // disable foreign key checking temporarily
        DB::statement('PRAGMA foreign_keys = OFF;');

        // clear out tables previous data
        DB::table('taggables')->truncate();
        DB::table('member_project')->truncate();
        Member::truncate();
        Project::truncate();
        Projectimage::truncate();
        Tag::truncate();

        // define the amount each table should have value
        $tagsQuantity = 15;
        $membersQuantity = 5;
        $projectsQuantity = 30;

        // create tags
        $tags = (new TagSeeder)->run($tagsQuantity);

        // Create members and assign tags
        $members = (new MemberSeeder)->run($membersQuantity, $tags, $tagsQuantity);

        // Create projects and associate members
        (new ProjectSeeder)->run($projectsQuantity, $members, $membersQuantity);
    }
}
