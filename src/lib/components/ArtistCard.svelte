<script lang="ts">
    export let artistDetails: {
    imageSrc: string;
    artist_name: string;
    artist_bio: string;
    images: string[];
  } = {
    imageSrc: '',
    artist_name: '',
    artist_bio: '',
    images: [],
  };
    import { Button } from "$lib/components/ui/button";
    import * as Avatar from "$lib/components/ui/avatar";
    import Carousel from "$lib/components/ui/Carousel.svelte";
    let showImages = false;
</script>
<div class="ring-purple-200/50 ring-offset-slate-500 ring-offset-1 hover:ring-1 w-full sm:w-96 md:w-auto px-4 py-6 bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-lg">
    <div class="flex mb-4">
        <Avatar.Root class="w-16 h-16 sm:w-24 sm:h-24">
            <Avatar.Image src="{artistDetails.imageSrc}" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
        <div class="ml-4">
            <h3 class="font-medium text-indigo-300 scroll-m-20 text-2xl font-mono tracking-tight"> {artistDetails.artist_name} </h3>
            <!-- Additional content right of the avatar can go here -->
            <p class="font-mono font-medium text-xs sm:text-sm text-white"> {artistDetails.artist_bio} </p>
        </div>
    </div>
    <div class="flex items-center justify-center space-x-2 py-4 relative">
        {#if !showImages}
          <!-- Button: Show more -->
          <Button 
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 shadcn-button font-mono"
            on:click={() => showImages = !showImages}>
            Show more
          </Button>
        {/if}
      
        {#if showImages}
          <!-- Container for Up to Three Artist's Images, displayed horizontally -->
          <Carousel images={artistDetails.images}></Carousel>
        {/if}
      </div>
    
</div>