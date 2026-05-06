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
                : (new Project())->getSorted()
            )
                ->paginate(10, pageName: $member ? "projectPage" : 'page')
        );
    }



    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $project = $project->load([
            'tags' => fn($query) => $query->limit(4),
            'members' => fn($query) => $query->limit(4),
        ]);

        $project->members->each(function ($mbr) {
            $mbr = $mbr->load('tags');
            $mbr->tags = $mbr->pivot->tags->where('pivot.priority_for_taggable', '>', 64);
        });

        return new ProjectResource($project);
    }



    /**
     * Display the specified resource.
     */
    public function images(Project $project)
    {
        return new ProjectImageCollection(
            $project->images()->paginate(10)
        );
    }
}
