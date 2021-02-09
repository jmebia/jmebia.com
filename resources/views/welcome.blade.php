<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('fontawesome/css/all.css') }}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="{{ asset('fontawesome/js/all.js') }}" defer></script>

        <style>
            body {
                font-family: 'Nunito';
            }
        </style>
    </head>
    <body class="bg-gray-200">
        
        <!-- main -->
        <div class="absolute inset-x-0 top-0 pt-24 pb-6 px-6 h-screen md:h-screen bg-gray-800 text-white uppercase ">
            <div class="block mx-auto text-center text-6xl md:text-8xl mb-2 animate__animated animate__fadeIn">
                JM Ebia
            </div>
            <div class="block mx-auto text-center text-lg md:text-xl animate__animated animate__fadeInUp">
                Full-stack Web Developer
            </div>
            <div class="block mx-auto text-center text-lg md:text-xl lowercase mt-6 animate__animated animate__fadeIn animate__delay-1s">
                <i class="far fa-paper-plane"></i> 
                me@jmebia.com
            </div>

            <!-- footer -->
            <div class="absolute block inset-x-0 bottom-0 p-5 mx-auto items-center text-center">
                <div class="md:flex md:w-1/3 lg:1/4 mx-auto text-md md:text-xl place-self-center">
                    <span class="pb-4 block md:flex md:mx-auto animate__animated animate__fadeIn animate__delay-2s">
                        <a href="https://www.linkedin.com/in/jmebia/">
                            <i class="fab fa-linkedin"></i> 
                            LinkedIn
                        </a>
                    </span>
                    <span class="pb-4 block md:flex md:mx-auto animate__animated animate__fadeIn animate__delay-3s">
                        <a href="https://github.com/jmebia">
                            <i class="fab fa-github"></i> 
                            GitHub
                        </a>
                    </span>
                    <span class="pb-4 block md:flex md:mx-auto animate__animated animate__fadeIn animate__delay-4s">
                        <a href="https://twitter.com/poltnine">
                            <i class="fab fa-twitter-square"></i> 
                            Twitter
                        </a>
                    </span>
                </div>
            </div>
        </div>

    </body>
</html>
