<script lang="ts">
    export let artistDetails: {
    profile_image: string;
    artist_name: string;
    description: string;
    popular_images: string[];
  } = {
    profile_image: '',
    artist_name: '',
    description: '',
    popular_images: [],
  };
    import { fly , slide } from 'svelte/transition';
    import { Button } from "$lib/components/ui/button";
    import * as Avatar from "$lib/components/ui/avatar";
    import Carousel from "$lib/components/ui/Carousel.svelte";
    let showImages = false;
</script>
<div class="ring-purple-200/50 ring-offset-slate-500 ring-offset-1 hover:ring-1 w-full sm:w-96 md:w-auto px-4 py-6 bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-lg mb-1" in:fly={{ y: -50, duration: 500 }} out:slide={{ duration: 500 }}>
    <div class="flex mb-4">
        <Avatar.Root class="w-16 h-16 sm:w-24 sm:h-24">
            <Avatar.Image src="{artistDetails.profile_image}" alt="@shadcn" />
            <Avatar.Fallback>{artistDetails.artist_name.slice(0, 2)}</Avatar.Fallback>
        </Avatar.Root>
        <div class="ml-4">
            <h3 class="font-medium text-indigo-300 scroll-m-20 text-2xl font-mono tracking-tight"> {artistDetails.artist_name} </h3>
            <!-- Additional content right of the avatar can go here -->
            <p class="font-mono font-medium text-xs sm:text-sm text-white"> {artistDetails.description} </p>
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
          <Carousel images={artistDetails.popular_images}></Carousel>
        {/if}
      </div>
    
</div>