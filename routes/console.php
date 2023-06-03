<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');


// 清除 opcache 全部缓存
Artisan::command('clear-all:opcache', function () {
    opcache_reset();
    $this->comment('OPcache 所有缓存已清除');
})->purpose('Clear all OPcache');

// 清除掉最近一次更新文件的缓存
Artisan::command('clear:opcache', function () {
    exec('git diff --name-only HEAD~ HEAD', $output);
    foreach ($output as $file) {
        $path = base_path($file);
        opcache_invalidate($path, true);
    }
    dd('刷新完成');
})->purpose('Clear OPcache');
