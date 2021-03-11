<x-guest-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Journal
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <a href="{{route('journal.index')}}" class="text-blue-500">Go back to Journal</a>

            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-6">
                <div class="p-6 bg-white border-b border-gray-200">
                    
                    @isset($post)
                    <div class="block mb-4 p-4">
                    <span class="block text-2xl">{{$post->title}}</span>
                    <span class="text-md text-gray-500">posted on {{$post->created_at}}</span>
                    </div>
                    <hr>
                    <div class="mt-4">
                        {!! $post->content !!}
                    </div>
                    @endif
                    
                </div>
            </div>
        </div>
    </div>
</x-guest-layout>