<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Inertia\Inertia;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $members = Member::orderBy('priority', 'desc')
            ->paginate(10);

        return Inertia::render('Members', [
            'members' => $members,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $memberSlug)
    {
        $member = Member::firstWhere('slug', $memberSlug);

        if (! $member) {
            return Inertia::render('NotFound');
        }

        $tagGroups = [];
        foreach ($member->tags as $tag) {
            $tagGroups[$tag['type']][] = $tag;
        }

        return Inertia::render('Member', [
            'member' => $member,
            'tagGroups' => $tagGroups,
        ]);
    }
}
