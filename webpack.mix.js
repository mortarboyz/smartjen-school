const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
/**
 * For All Dashboard
 */
mix.js('resources/js/src/admin/main.js', 'public/js/admin')
    .js('resources/js/src/teacher/main.js', 'public/js/teacher')
    .js('resources/js/src/student/main.js', 'public/js/student')
    .vue()
    .sass('resources/sass/app.scss', 'public/css/admin');

