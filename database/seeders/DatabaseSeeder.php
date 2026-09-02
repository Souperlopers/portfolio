<?php

namespace Database\Seeders;

use App\Models\Member;
use App\Models\MemberProject;
use App\Models\Project;
use App\Models\Projectimage;
use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

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
		$tagsQuantity = count(Tag::NAMES);
		$membersQuantity = 5;
		$projectsQuantity = 5;

		$tags = (new TagSeeder)->run($tagsQuantity);
		$members = (new MemberSeeder)->run($membersQuantity, $tags);
		$projects = (new ProjectSeeder)->run($projectsQuantity, $members);
	}


	public static function fakePriority(Model $priorable)
	{
		return fake()->randomElement([
			fake()->numberBetween(-128, 127),
			$priorable->priority
		]);
	}

	public static function random(Collection $collection)
	{
		$num = $collection->count();
		return $collection->random(rand(1, $num));
	}

	public static function appendableTag(Collection $tags)
	{
		$attachmentData = [];

		foreach ($tags as $tag) {
			$attachmentData[$tag->id] = [
				'priority_for_taggable' => DatabaseSeeder::fakePriority($tag)
			];
		}

		return $attachmentData;
	}
}
