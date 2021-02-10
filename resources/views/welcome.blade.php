<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Welcome!</title>

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
    <body class="bg-gray-200 pb-10">
        
        <!-- main jumbotron / welcome -->
        <div class="inset-x-0 top-0 pt-24 pb-6 px-6 h-screen md:h-96 bg-gray-800 uppercase">
            
            <!-- top info -->
            <div>
                <div class="block mx-auto text-center text-6xl md:text-8xl mb-2 text-white">
                    JM Ebia
                </div>
                <div class="block mx-auto text-center text-lg md:text-xl">
                    <span class="transition duration-500 ease-in-out block mt-2 text-gray-400 hover:text-gray-200">Full-stack Web Developer</span>
                </div>
                <div class="block mx-auto text-center text-gray-400 text-lg md:text-xl lowercase mt-6">
                    <i class="far fa-paper-plane"></i> 
                    me@jmebia.com
                </div>
            </div>

            <!-- footer -->
            <div class="block inset-x-0 bottom-0 p-5 mx-auto items-center text-center">
                <div class="md:flex md:w-1/3 lg:1/4 mx-auto text-md md:text-xl place-self-center text-gray-500">
                    <span class="transition duration-500 ease-in-out 
                        pb-4 block md:flex md:mx-auto hover:text-gray-200 px-1">
                        <a href="https://www.linkedin.com/in/jmebia/" target="_blank">
                            <i class="fab fa-linkedin"></i> 
                            LinkedIn
                        </a>
                    </span>
                    <span class="transition duration-500 ease-in-out 
                        pb-4 block md:flex md:mx-auto hover:text-gray-200 px-1">
                        <a href="https://github.com/jmebia" target="_blank">
                            <i class="fab fa-github"></i> 
                            GitHub
                        </a>
                    </span>
                    <span class="transition duration-500 ease-in-out 
                        pb-4 block md:flex md:mx-auto hover:text-gray-200 px-1">
                        <a href="https://twitter.com/poltnine" target="_blank">
                            <i class="fab fa-twitter-square"></i> 
                            Twitter
                        </a>
                    </span>
                </div>
            </div>
        </div>

        <!-- content -->
        <div class="block p-10 w-100">
            
            <!-- resume -->
            <div class="transition duration-500 ease-in-out mx-auto border-4 border-dashed hover:border-white
                border-gray-500 rounded-lg border-opacity-50 hover:border-opacity-100 hover:bg-white hover:shadow-lg
                pt-4 pb-10 text-gray-500 text-center hover:text-gray-900 md:w-3/4">

                <p class="text-2xl uppercase font-bold py-5">Resume</p>
                <hr class="w-3/4 mx-auto pb-3" />
                <p class="uppercase text-blue-500">
                    skills
                </p>
                <ul class="text-xl mb-8">
                    <li>PHP, HTML, CSS, JavaScript</li>
                    <li>C#, Python, Java</li>
                    <li>MySQL</li>
                    <li>Laravel, ASP.NET</li>
                    <li>Apache</li>
                    <li>Git Version Control</li>
                    <li>Windows and Linux Environments</li>
                </ul>

                <p class="uppercase text-blue-500">
                    education
                </p>
                <ul class="text-xl mb-8">
                    <li>
                        <span class="block">BS Computer Science</span>
                        <span class="block text-sm">Adamson University, March 2018</span>
                    </li>
                </ul>

                <p class="uppercase text-blue-500">
                    work experience
                </p>
                <ul class="text-xl mb-8 text-gray-400">
                    <li>
                        <span class="block mt-2 text-gray-500">Freelance Developer</span>
                        <span class="block text-sm text-gray-500">2017 - Present</span>
                    </li>
                    <li>
                        <span class="block mt-2 text-gray-500">Part-time</span>
                        <span class="block text-sm text-gray-500">Wyvern Corp, Sept 2020 - Present</span>
                    </li>
                    <li>
                        <span class="block mt-2">Acting CTO / Web Developer</span>
                        <span class="block text-sm">Wyvern Corp, Feb 2019 - Sept 2020</span>
                    </li>
                    <li>
                        <span class="block mt-2">Web Developer</span>
                        <span class="block text-sm">Omnibus Technologies, June 2018 - Sept 2020</span>
                    </li>
                    <li>
                        <span class="block mt-2">Intern</span>
                        <span class="block text-sm">UP ITDC, Dec 2017 - April 2018</span>
                    </li>
                </ul>
            </div>



        </div>

    </body>
</html>
