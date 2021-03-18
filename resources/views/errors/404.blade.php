<html>

    <head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    </head>

    <body>
        <div class="h-screen w-screen bg-gray-500 flex justify-center content-center flex-wrap">
            <div class="block text-center">
                <p class="font-sans text-white text-10xl md:text-9xl">404</p>
                <p class="font-sans text-gray-400 text-8xl md:text-4xl">Page Not Found</p>
            </div>

        </div>

        <div class="hidden xl:block absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
            <span class="opacity-50">Take me back to</span>
            <a class="border-b" href="{{ route('welcome') }}">jmebia.com</a>
        </div>
    </body>
</html>