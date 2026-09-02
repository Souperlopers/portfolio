<?php

namespace App\Http\Controllers;

use App\Http\Resources\Project\Image\ProjectImageCollection;
use App\Http\Resources\Project\ProjectResource;
use App\Http\Resources\Project\ProjectCollection;
use App\Models\Member;
use App\Models\Project;

class ProjectController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index(?Member $member = null)
	{
		return new ProjectCollection(
			($member
				? $member->projects()
				: (new Project())->sort()
			)->get()
		);
	}



	/**
	 * Display the specified resource.
	 */
	public function show(Project $project)
	{
		return new ProjectResource(
			$project
				->load(['tags', 'members', 'images'])
				->appendContribution()
		);
	}



	/**
	 * Display the specified resource.
	 */
	public function images(Project $project)
	{
		return new ProjectImageCollection(
			$project->images()->get()
		);
	}
}
