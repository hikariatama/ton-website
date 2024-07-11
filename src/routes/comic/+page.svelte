<script lang="ts">
  import { MoveLeft } from "lucide-svelte"
  import type { PageData } from "./$types"
  import Chip from "$lib/components/chip.svelte"
  import Comic from "$lib/components/comic.svelte"

  export let data: PageData
</script>

<div class="flex flex-col items-center justify-center w-screen h-screen">
  <Comic
    class="-mt-20"
    comic={data.comic}
  />
  <div class="flex w-full justify-center mt-8">
    <Chip
      url="/"
      target="_self"
      class="flex justify-center items-center gap-1"
    >
      <MoveLeft class="h-4" />
      back
    </Chip>
  </div>
</div>
