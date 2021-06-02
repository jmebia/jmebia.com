<x-guest-layout>
        
        

        <!-- site intro -->
        <div class="p-6 md:px-72 md:text-center text-white md:pt-16 bg-blue-500 h-80 md:h-96 shadow-lg">
            <p class="text-4xl">Hi. I am JM.</p> 
            <p class="text-2xl text-gray-100">I am a <span class="line-through">Jedi Knight.</span></p>
            <p class="text-6xl text-gray-300"><span class="text-white font-bold">Web Developer</span></p>
            <!-- <img src="{{ asset('images/pixel-me.png') }}" class="w-48 md:w-64 md:mx-auto mt-12 mb-6" /> -->
            <div class="flex md:hidden ml-auto text-3xl place-self-center text-gray-100">
                    <div class="flex text-lg pt-1 md:mr-4">
                        <!-- <span class="p-4 flex hover:text-gray-200 px-2 
                            {{ (request()->is('/')) ? 'border-b border-blue-500' : '' }}">
                            <a href="{{ route('welcome') }}">
                                Home
                            </a>
                        </span> -->
                        <!-- <span class="p-4 flex hover:text-gray-200 px-2">
                            <a href="{{ route('journal.home') }}">
                                Journal
                            </a>
                        </span> -->
                    </div>
                    <span class="p-4 flex hover:text-gray-200 px-1">
                        <a href="https://www.linkedin.com/in/jmebia/" target="_blank">
                            <i class="fab fa-linkedin"></i> 
                        </a>
                    </span>
                    <span class="p-4 flex hover:text-gray-200 px-1">
                        <a href="https://github.com/jmebia" target="_blank">
                            <i class="fab fa-github"></i> 
                        </a>
                    </span>
                </div>
        </div>
        <!-- end of site intro -->

        <div class="md:grid md:grid-cols-4 gap-4 px-12 md:px-52 py-12 mx-auto">
            <div class="col-span-3 pb-12 md:p-0 text-gray-600">
                <p class="text-4xl text-blue-500 font-bold">
                    What? Who?
                </p>
                <p class="text-2xl py-2">
                    I am full-stack web developer from Manila who's been working professionally for {{ date('Y') - 2018 }} 
                    years now under various different clients. My skills ranges from
                     <span class="text-blue-500 font-bold">web design and programming</span> to 
                     <span class="text-blue-500 font-bold">SQL databases</span> and <span class="text-blue-500 font-bold">system architecture</span>. 
                     I am most comfortable and have the most experience with <span class="text-indigo-500 font-bold">PHP</span>
                     and <span class="text-red-500 font-bold">Laravel</span> in creating apps.
                </p>
                <p class="text-2xl py-2">
                    Outside my career, I do lots of digital art and gaming. Some <em>Riot Games</em> games and Elder Scrolls Online has been consuming 
                    a lot of my free time lately.
                     I also do have an <a href="https://www.instagram.com/poltnine/" target="_blank" class="text-yellow-500 font-bold underline">instagram</a> and 
                     <a href="https://www.facebook.com/poltnine/" class="text-yellow-500 font-bold underline">fb page</a> 
                     for my digital art content. <span class="text-gray-400">*wink wink*</span>
                </p>
            </div>
            <div class="">
                
            </div>
        <div>

</x-guest-layout>
