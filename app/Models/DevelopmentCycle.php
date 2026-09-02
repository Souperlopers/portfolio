<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;

class DevelopmentCycle extends Model
{
	use HasUlids;

	public $timestamps = false;

	public const NAMES = [
		'planning'    => '',
		'develop'     => '',
		'complete'    => '',
		'maintenance' => '',
		'upgrade'     => '',
	];
}
