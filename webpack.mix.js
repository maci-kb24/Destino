let mix = require('laravel-mix');


mix.js('src/js/index.js', 'public/js')
    .sass('src/scss/style.scss', 'public/css')
    .options({
        processCssUrls: false
    });