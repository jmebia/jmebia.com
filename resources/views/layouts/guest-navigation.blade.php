@auth
<div class="bg-gradient-to-r from-green-600 via-green-500 to-green-400 to-green-600 text-white w-full p-4">
    You are logged in as {{Auth::user()->name}}. Go to <a class="underline" href="{{route('dashboard')}}">dashboard</a>.
</div>
@endauth

<nav class="mt-0 mx-0 p-2 md:py-3 md:px-6 w-full bg-white shadow">
            <div class="flex">
                <div class="pl-4 pt-5 md:pt-3 md:pl-0">
                    <a href="/">
                    <span class="font-vibes text-4xl uppercase">JM Ebia</span>
                    </a>
                </div>

                <div class="hidden md:flex ml-auto text-3xl place-self-center text-gray-500">
                    <div class="flex text-lg pt-1 md:mr-4">
                        <span class="p-4 flex hover:text-gray-200 px-2 
                            {{ (request()->is('/')) ? 'border-b border-blue-500' : '' }}">
                            <a href="{{ route('welcome') }}">
                                Home
                            </a>
                        </span>
                        <span class="p-4 flex hover:text-gray-200 px-2">
                            <a href="{{ route('journal.home') }}">
                                Journal
                            </a>
                        </span>
                        <span class="p-4 flex hover:text-gray-200 px-2
                            {{ (request()->is('resume')) ? 'border-b border-blue-500' : '' }}">
                            <a href="{{ route('resume') }}">
                                Resumé
                            </a>
                        </span>
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
                    <!-- <span class="p-4 flex hover:text-gray-200 px-1">
                        <a href="https://twitter.com/poltnine" target="_blank">
                            <i class="fab fa-twitter-square"></i> 
                        </a>
                    </span> -->
                </div>

                <!-- hamburger menu -->
                <div class="flex md:hidden ml-auto">
                    <button class="px-5 py-0 text-2xl text-gray-500" id="button-menu">
                        <i class="fas fa-bars"></i>
                    </button> 
                </div>
                <!-- end of hamburger menu -->


            </div>

            <div class="absolute hidden md:hidden z-10 h-50 w-48 bg-white mx-0 px-0 fixed" id="menu">
                    <div class="text-lg pt-1 pr-6 md:mr-4">
                        <span class="p-4 flex hover:text-gray-200 px-2 
                            {{ (request()->is('/')) ? 'border-b border-blue-500' : '' }}">
                            <a href="{{ route('welcome') }}">
                                Home
                            </a>
                        </span>
                        <span class="p-4 flex hover:text-gray-200 px-2
                            {{ (request()->has('journal/*')) ? 'border-b border-blue-500' : '' }}">
                            <a href="{{ route('journal.home') }}">
                                Journal
                            </a>
                        </span>
                        <span class="p-4 flex hover:text-gray-200 px-2
                            {{ (request()->is('resume')) ? 'border-b border-blue-500' : '' }}">
                            <a href="{{ route('resume') }}">
                                Resumé
                            </a>
                        </span>
                    </div>
            </div>
        </nav>

        @section('scripts')
        <script>
            $("#button-menu").on('click', function(e){
                $("#menu").toggle('hidden');
                console.log('hanep');
            });
        </script>
        @endsection