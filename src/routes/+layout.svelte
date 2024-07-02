<script>
  import "../app.css"
  import { LoaderPinwheel } from "lucide-svelte"
  import { fade } from "svelte/transition"
  import { navigating } from "$app/stores"
</script>

{#if $navigating}
  <div
    class="fixed w-full h-full top-0 backdrop-blur-sm bg-black bg-opacity-50 z-50"
    in:fade={{ duration: 100 }}
    out:fade={{ duration: 100 }}
  >
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2"
    >
      <LoaderPinwheel class="w-10 h-10 animate-spin" />
    </div>
  </div>
{/if}

<header>
  <nav class="flex justify-end items-center p-4 text-gray-500">
    <div class="flex gap-4 p-2 px-4 border rounded-2xl">
      <a href="." class="link">home</a>
      <a href="comic" class="link">comic</a>
    </div>
  </nav>
</header>

<slot />
