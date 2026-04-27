<?php

namespace App\Http\Controllers;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view("pages.members");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $memberSlug)
    {
        return view("pages.member")->with("slug", $memberSlug);
    }
}
