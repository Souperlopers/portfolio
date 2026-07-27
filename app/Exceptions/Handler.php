<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
	/**
	 * The list of the inputs that are never flashed to the session on validation exceptions.
	 *
	 * @var array<int, string>
	 */
	protected $dontFlash = [
		'current_password',
		'password',
		'password_confirmation',
	];

	/**
	 * Register the exception handling callbacks for the application.
	 */
	public function register(): void
	{
		$this->renderable(function (NotFoundHttpException $e, Request $request) {
			if ($request->is('api/*') || $request->expectsJson()) {
				return response()->json([
					'message' => $e->getMessage(),
				], 404);
			}
		});
	}

	/**
	 * Determine if the request should return JSON.
	 */
	protected function shouldReturnJson($request, Throwable $e): bool
	{
		// ✅ Equivalent to Laravel 13's shouldRenderJsonWhen()
		if ($request->is('api/*')) {
			return true;
		}

		return parent::shouldReturnJson($request, $e);
	}
}
