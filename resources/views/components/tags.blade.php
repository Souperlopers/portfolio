skills:
<ul class="skills">
	@foreach ($tagGroups as $type => $tags)
		<li>
			{{ $type }}:
			<ul>
				@foreach ($tags as $tag)
					<li class="skill">
						{{ $tag->name }}@if ($tag->version)
							: {{ $tag->version }}
						@endif
					</li>
				@endforeach
			</ul>
		</li>
	@endforeach
</ul>
