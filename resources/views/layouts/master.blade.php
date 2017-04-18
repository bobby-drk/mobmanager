<!DOCTYPE html>
<html>
    <head>
        <title>@yield('title') :: Mob Manager</title>

        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

        <script>
            window.Laravel = {!! json_encode([
                'csrfToken' => csrf_token(),
            ]) !!};
        </script>



        <link rel="stylesheet" href="{{ mix('/css/app.css') }}" type="text/css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">



        @stack('page-css')

    </head>

    <body>
        <div id="app">

            <!-- Main Content Area-->
            <div class="container">

                    <main>
                        @yield('content')
                    </main>

            </div>
        </div>

        <script type="text/javascript" src="{{ mix('/js/manifest.js') }}"></script>
        <script type="text/javascript" src="{{ mix('/js/vendor.js') }}"></script>
        <script type="text/javascript" src="{{ mix('/js/app.js') }}"></script>

        @stack('page-js')

    </body>

</html>
