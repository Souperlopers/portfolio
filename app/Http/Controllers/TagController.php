<?php

namespace App\Http\Controllers;

use App\Http\Resources\Tag\TagCollection;
use App\Models\Member;
use App\Models\MemberProject;
use App\Models\Project;
use App\Models\Tag;

class TagController extends Controller
{
	public function __invoke(Member|Project $taggable = null)
	{
		return new TagCollection(
			(isset($taggable)
				? $taggable->tags()
				: (new Tag())->sort()
			)->get()
		);
	}

	public function memberTags(Member $member)
	{
		return $this($member);
	}

	public function projectTags(Project $project)
	{
		return $this($project);
	}

	public function MemberProject(Member $member, Project $project)
	{
		return new TagCollection(
			MemberProject
				::getRecord($member, $project)
				->tags()
				->get()
		);
	}

	public function ProjectMember(Project $project, Member $member)
	{
		return $this->MemberProject($member, $project);
	}
}
