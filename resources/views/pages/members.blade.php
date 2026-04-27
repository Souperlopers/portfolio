@extends('layouts.main')

@section('title', 'Souperlopers | Members')

@section('body')
	<h1>Members</h1>
	@foreach ($members as $member)
		<div class="name">
			name:
			<a class="link" href="/{{ $member->slug }}">{{ $member->name }}</a>
		</div>
		<div class="position">position: {{ $member->position }}</div>
		<br>
	@endforeach
@endsection
