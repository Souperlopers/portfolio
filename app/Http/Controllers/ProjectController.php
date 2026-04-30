<?php

namespace App\Http\Controllers;

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
                ? (
                    $member->projects()
                    ->orderByDesc('project_priority_for_member')
                    ->orderBy('name')
                    ->paginate(10)
                )
                : (
                    Project
                    ::orderByDesc('priority')
                    ->orderBy('name')
                    ->paginate(10, pageName: "projectPage")
                )
        );
    }



    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return new ProjectResource(
            $project->load([
                'members' => fn($query) => $query
                    ->orderByPivot('member_priority_in_project', 'desc')
                    ->limit(4),
                'tags' => fn($query) => $query
                    ->orderByPivot('priority_for_taggable', 'desc')
                    ->limit(4)
            ])
        );
    }
}
