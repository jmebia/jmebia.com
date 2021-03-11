

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
                    <form method="POST" action="{{ route('journal.store') }}">
                        @csrf
                        <div class="mb-8">
                            <label class="text-xl">Title</label></br>
                            <input type="text" class="border-gray-300" name="title" id="title" required></input>
                        </div>

                        <div class="mb-8">
                            <label class="text-xl">Content</label></br>
                            <textarea name="content"></textarea>
                        </div>
                        <button role="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400" required>Submit Post</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>

@section('scripts')
<script src="{{ asset('ckeditor/ckeditor.js') }}"></script>

<script>
    CKEDITOR.replace( 'content' );
</script>

@show