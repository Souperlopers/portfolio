members:
<ul class="members">
	@foreach ($members as $member)
		<li>name: <a href="/{{ $member->slug }}">{{ $member->name }}</a></li>
	@endforeach
</ul>
