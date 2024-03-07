<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import * as Avatar from "$lib/components/ui/avatar";
    import ArtistCard from '$lib/components/ArtistCard.svelte'
    import Carousel from "$lib/components/ui/Carousel.svelte";

    type ArtistCardData = {
        profile_image: string;
        artist_name: string;
        description: string;
        popular_images: string[];
    };

    async function fetchRandomArtistCard(): Promise<ArtistCardData> {
        const response = await fetch('http://localhost:8000/artistcard/random');
        const data = await response.json();
        
        // Transform the response data to match the expected structure
        const transformedData: ArtistCardData = {
            profile_image: data.profile_image,
            artist_name: data.artist_name,
            description: data.description,
            popular_images: data.popular_images,
        };
        
        return transformedData;
    }

    let artistCards: ArtistCardData[] = [];

    async function handleGenerateClick() {
        const newArtistCard = await fetchRandomArtistCard();
        artistCards = [newArtistCard, ...artistCards];
    }
</script>

<div class="grid grid-rows-[auto_1fr] grid-cols-3 gap-4 min-h-screen bg-cover bg-[url('/jackson-hendry-eodA_8CTOFo-unsplash.jpg')]">
    <div class="mt-4 row-start-1 col-span-3 md:col-start-2 md:col-span-1 flex flex-col items-center justify-start w-full p-4 bg-white/90 backdrop-blur-lg rounded-lg border border-purple-200/50 shadow-lg">
        <h2 class="font-mono scroll-m-20 text-2xl tracking-tight text-lg text-black text-center">Surprise me!</h2>
        <p class="text-sm text-center text-black font-mono">Picks a random artist from our database for you.</p>
        <Button class="shadcn-button mt-4 font-mono" on:click={handleGenerateClick}>Generate</Button>
    </div>
    
    <div class="row-start-2 col-span-3 md:col-start-2 md:col-span-1 flex flex-col">
        <div class="overflow-y-auto p-1">
            {#each artistCards as card, index (card)}
                <ArtistCard artistDetails={card} />
            {/each}
        </div>
    </div>
</div>