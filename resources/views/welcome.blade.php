<x-guest-layout>
        
        

        <!-- site intro -->
        <div class="p-6 md:text-center md:pt-16 bg-white h-auto shadow-lg">
            <p class="text-4xl">Hi. I am JM.</p> 
            <p class="text-xl text-gray-400 line-through">I am a Jedi, like my father before me</p>
            <p class="text-2xl text-gray-600">I am a <span class="text-blue-500 font-bold">web developer</span></p> 
            <img src="{{ asset('images/pixel-me.png') }}" class="w-48 md:w-64 mx-auto my-12" />
        </div>
        <!-- end of site intro -->

        <div class="h-auto px-10 py-12 text-center">
            <p class="text-2xl">Under my box of dev stacks are</p> 
            <p class="text-gray-500">The following are the stuff I commonly use in my web projects</p>

            <div class="flex flex-wrap justify-center mx-auto w-auto mt-10 md:px-72">
                <div class="text-8xl text-blue-500 pb-4 px-6" style="line-height:0 !important">
                    <i class="fab fa-php"></i><br>
                    <span class="text-lg">PHP</span>
                </div>
                <div class="text-8xl text-yellow-700 pb-4 px-6" style="line-height:0 !important">
                    <i class="fab fa-html5"></i><br>
                    <span class="text-lg">HTML</span>
                </div>
                <div class="text-8xl text-green-500 pb-4 px-6" style="line-height:0 !important">
                    <i class="fab fa-css3-alt"></i><br>
                    <span class="text-lg">CSS</span>
                </div>
                <div class="text-8xl text-yellow-500 pb-4 px-6" style="line-height:0 !important">
                    <i class="fab fa-js-square"></i><br>
                    <span class="text-lg">JavaScript</span>
                </div>
                <div class="text-8xl text-gray-700 pb-4 px-6" style="line-height:0 !important">
                    <i class="fas fa-database" ></i><br>
                    <span class="text-lg">MySQL</span>
                </div>
                <div class="text-8xl text-red-600 pb-4 px-6" style="line-height:0 !important">
                    <i class="fab fa-laravel" ></i><br>
                    <span class="text-lg">Laravel</span>
                </div>
            </div>
        </div>

</x-guest-layout>
