<script lang="ts">
  import { MoveLeft } from "lucide-svelte"
  import Chip from "$lib/components/chip.svelte"
  import Comic from "$lib/components/comic.svelte"
  import { base } from "$app/paths"
</script>

<Comic class="absolute top-0 left-0 right-0 bottom-0 m-auto transfrom -translate-y-20" />
<div class="flex w-full justify-center mt-8">
  <Chip
    url={base}
    target="_self"
    class="flex justify-center items-center gap-1"
  >
    <MoveLeft class="h-4" />
    back
  </Chip>
</div>
