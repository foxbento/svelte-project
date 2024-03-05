<script lang="ts">
    import type { EmblaCarouselType } from 'embla-carousel';
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import { onMount } from 'svelte';
  
    // Corrected: Declare embla as possibly holding an instance of EmblaCarouselType.
    let emblaApi: EmblaCarouselType
    let selectedIndex: number = 0;
  
    export let images: string[] = []; // Accept images as a prop
  
    function onInit(event: CustomEvent): void {
      emblaApi = event.detail;
      emblaApi.on('select', updateSelectedIndex);
      updateSelectedIndex(); // Initialize the selected index on mount
    }
  
    function updateSelectedIndex(): void {
      if (emblaApi) {
        selectedIndex = emblaApi.selectedScrollSnap();
      }
    }
  </script>
  
  
  
  <div use:emblaCarouselSvelte on:emblaInit={onInit} class="embla">
    <div class="embla__container">
      {#each images as image, index}
        <div class="embla__slide">
          <img class="w-full h-full object-cover" src={image} alt={`Art by artist ${index + 1}`} />
        </div>
      {/each}
    </div>
    <!-- Dot Indicators -->
    <div class="embla__dots absolute bottom-2.5 left-1/2 transform -translate-x-1/2 z-10 flex justify-center p-2.5">
        {#each images as _, index}
          <button
              class="embla__dot w-2.5 h-2.5 bg-gray-400 rounded-full mx-1 transition-opacity duration-150 ease-in-out {selectedIndex === index ? 'opacity-100' : 'opacity-50'}"
              aria-label={`Go to slide ${index + 1}`}
              on:click={() => emblaApi && emblaApi.scrollTo(index)}>
          </button>
        {/each}
      </div>
  </div>
  
  
  
  
  
  

<style>
.embla {
    overflow: hidden;
}
.embla__container {
    display: flex;
}
.embla__slide {
    flex: 0 0 100%;
    min-width: 0;
}
</style>

  
  