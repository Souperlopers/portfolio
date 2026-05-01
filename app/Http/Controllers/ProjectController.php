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
            $member
                ? $member->projects()->paginate(10)
                : (new Project())->getSorted()->paginate(10, pageName: "projectPage")
        );
    }



    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return new ProjectResource(
            $project->load([
                'members' => fn($query) => $query->limit(4),
                'tags' => fn($query) => $query->limit(4),
                'projectimages' => fn($query) => $query->limit(1),
            ])
        );
    }



    /**
     * Display the specified resource.
     */
    public function images(Project $project)
    {
        return new ProjectImageCollection(
            $project->projectimages()->paginate(10)
        );
    }
}
