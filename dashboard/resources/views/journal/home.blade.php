<x-guest-layout>        
        <!-- main jumbotron / welcome -->
        <div class="inset-x-0 top-0 pt-24 pb-4 px-6 h-96 bg-gray-100 uppercase">
            
        @isset($posts)
            @foreach($posts as $post)
            <a  href="{{route('journal.show', ['url' => $post->post_url])}}">
            <div class="group overflow-hidden shadow-md mb-4 w-full md:w-3/5 mx-auto bg-white hover:bg-blue-100">
                <!-- card header -->
                <div class="px-6 py-4  border-b border-gray-200 font-bold uppercase">
                    <span class="text-xl">{{$post->title}}</span>
                    <span class="text-md text-gray-400 block font-normal">posted on {{ $post->created_at }}</span>
                </div>

                <!-- card body -->
                <div class="p-6 border-b border-gray-200 ">
                    <!-- content goes here -->
                    <p class="text-gray-500">
                        {{ $post->description }}
                    </p>
                    <!-- button link -->
                    <div class="block mt-4 text-right">
                    <a class="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase" 
                        href="{{route('journal.show', ['url' => $post->post_url])}}">Read</a>
                    </div>
                </div>

            </div>
            </a>
            @endforeach
        @else
            <div class="text-center">
                There seems to be nothing here...
            </div>
        @endif
            
        
        {{ $posts->links() }}
        </div>

</x-guest-layout>
