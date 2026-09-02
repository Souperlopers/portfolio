<?php

namespace Database\Seeders;

use App\Models\Member;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;

class MemberSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(int $membersQuantity, Collection $tags)
	{
		return Member::factory($membersQuantity)->create()->each(
			function ($member) use ($tags) {
				$tags = DatabaseSeeder::random($tags);
				$tags = DatabaseSeeder::appendableTag($tags);
				$member->tags()->attach($tags);
			}
		);
	}
}
