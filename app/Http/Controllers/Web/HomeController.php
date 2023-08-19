<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Service\Web\RouterService;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function show($route = '/')
    {
        // 先校验路由
        $routes = RouterService::routeList;
        if (!in_array($route, $routes)) {
            // 重定向到laravel默认404页面
            abort(404);
        }
        # 自定义页面头部
        $title = '测试首页';
        return Inertia::render('index', [
            'info' => [
                'title' => $title,
                'path' => $route,
            ],
        ]);
        // @vue/server-renderer
        // vue-loader
    }
}
