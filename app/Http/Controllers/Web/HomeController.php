<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function show()
    {
        # 自定义页面头部
        $title = 'Home';
        return Inertia::render('Home/index', [
            'info' => [
                'title' => $title,
            ],
        ]);
        // @vue/server-renderer
        // vue-loader
    }
}
