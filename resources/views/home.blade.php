<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title')</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    {{--Styls--}}
{{--    <link href="{{ asset('css/app.css') }}" rel="stylesheet">--}}
    <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">

{{--    <script src="{{ asset('js/app.js') }}" defer></script>--}}
    <script src="{{ secure_asset('js/app.js') }}" defer></script>

    {{--fontawesome--}}
    <script src="https://kit.fontawesome.com/7d75c9db00.js" crossorigin="anonymous"></script>

</head>
<body>
    <div id="app">
        <app></app>
    </div>
</body>
</html>
