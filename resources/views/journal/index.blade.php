<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Journal
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    
                    @isset($posts)
                        @foreach($posts as $post)
                        <div class="block mb-4 p-4">
                            <a href="{{ route('journal.show', ['url' => $post->post_url]) }}">
                                <span class="text-lg">{{$post->title}}</span>
                            </a>
                        </div>
                        <div>
                            {!! $post->content !!}
                        </div>
                        <hr>
                        @endforeach
                    @endif
                    
                </div>
            </div>
        </div>
    </div>
</x-app-layout>