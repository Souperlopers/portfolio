@extends('layouts.main')

@section('title', 'Souperlopers | {{ $member->name }}')

@section('body')
	<h1>Member</h1>
	<div class="name"> name: {{ $member->name }} </div>
	<div class="position">position: {{ $member->position }}</div>
	<div class="description">description: {{ $member->description }}</div>

	@include('components.tags', ['tagGroups' => $tagGroups])

	@include('components.projects', ['projects' => $member->projects])

	<div class="email">email: {{ $member->email }}</div>
	<div class="phone">phone: {{ $member->phone }}</div>
	<div class="linkedin_url">linkedin_url: {{ $member->linkedin_url }}</div>
	<div class="github_url">github_url: {{ $member->github_url }}</div>
@endsection
