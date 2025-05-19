<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use App\Enums\RolesEnum;

class EnsureUserHasRole
{
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (!Auth::check() || !Auth::user()->hasRole($role)) {
            abort(403, 'Unauthorized action.');
        }

        return $next($request);
    }
}