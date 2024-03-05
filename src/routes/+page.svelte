<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import * as Avatar from "$lib/components/ui/avatar";
    import ArtistCard from '$lib/components/ArtistCard.svelte'
    import Carousel from "$lib/components/ui/Carousel.svelte";
    let artistDetails = {
    imageSrc: "https://pbs.twimg.com/profile_images/1645453871936946177/i8TW1geN_400x400.jpg",
    artist_name: "Monkeyspiritart",
    artist_bio: "Drawer of fluffybutts | 🏳️‍🌈 | Extremely bi woof | 18+ | Married to the adorable @ChapilleLP | All my pages: https://monkeyspirit.carrd.co",
    images: [
      'https://static1.e621.net/data/48/b7/48b7038685807311108b8cef27c74c32.png',
      'https://static1.e621.net/data/08/f5/08f5d5c453e2b7d42c03e9ed8f737913.png',
      'https://static1.e621.net/data/e0/12/e012e1b98d0e1a5460fa8f1dab8d98fb.png',
    ],
  };
</script>
    <div class="grid grid-rows-6 grid-cols-3 gap-4 bg-cover bg-[url('/jackson-hendry-eodA_8CTOFo-unsplash.jpg')]">
        <div class="mt-4 row-start-1 col-span-3 md:col-start-2 md:col-span-1 flex flex-col items-center justify-start w-full p-4 bg-white/90 backdrop-blur-lg rounded-lg border border-purple-200/50 shadow-lg">
            <h2 class="font-mono scroll-m-20 text-2xl tracking-tight text-lg text-black text-center"> Surprise me!</h2>
            <p class="text-sm text-center text-black font-mono">Picks a random artist from our database for you.</p>
            <Button class="shadcn-button mt-4 font-mono">Generate</Button>
            <!-- <hr class="border-0 h-1 bg-gradient-to-r from-[#e0eafc] via-[#cfdef3] to-[#e0eafc] my-4 w-full"> -->
        </div>
        
        <!-- Adjusting for mobile: col-span-3 (takes all columns on mobile), then md:col-start-2 md:col-span-1 for larger screens -->
        <div class="p-1 row-start-2 row-span-5 col-span-3 md:col-start-2 md:col-span-1 flex flex-col overflow-y-auto">
            <!-- Scrollable content goes here -->
            <!-- <div class="bg-slate-200/90 mb-1 w-full sm:w-96 md:w-auto px-4 py-6 bg-white shadow-lg rounded-lg">
                <Avatar.Root class="w-16 h-16 sm:w-24 sm:h-24">
                    <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                    <Avatar.Fallback>CN</Avatar.Fallback>
                </Avatar.Root>
                <h3 class="scroll-m-20 font-mono text-2xl tracking-tight">Their top 3 images</h3>
            </div> -->
            <ArtistCard {artistDetails} ></ArtistCard>
        </div>
        <!-- Other grid items can be defined here -->
    </div>
  