<?php

namespace App\Http\Controllers;

use App\Models\Member;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $members = Member::all();

        return view("pages.members")
            ->with("members", $members);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $memberSlug)
    {
        $member = Member::firstWhere('slug', $memberSlug);

        if (!$member) {
            return view('pages.404');
        }

        $tagGroups = [];
        foreach ($member->tags as $tag) {
            $tagGroups[$tag['type']][] = $tag;
        }

        return view("pages.member")
            ->with("member", $member)
            ->with("tagGroups", $tagGroups);
    }
}
