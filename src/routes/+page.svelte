<script lang="ts">
  import Biobox from "$lib/components/biobox.svelte"
  import Chip from "$lib/components/chip.svelte"
</script>

<div class="flex items-center justify-center w-screen h-screen">
  <div class="w-fit h-fit -mt-20">
    <Biobox class="left-0 right-0 m-auto mb-4" />
    <div class="block sm:grid grid-rows-2 grid-cols-5 gap-8 w-[700px] sm:mt-8">
      <div class="col-span-2"></div>
      <Chip
        class="w-full shadow-neon-yellow"
        url="/CV.pdf">resumé</Chip
      >
      <div class="col-span-2"></div>
      <Chip
        class="w-full"
        url="https://hikka.pw">hikka</Chip
      >
      <Chip
        class="w-full"
        url="https://leninec.dan.tatar">leninec</Chip
      >
      <Chip
        class="w-full"
        url="https://t.me/ruvds_com_bot">ruvds</Chip
      >
      <Chip
        class="w-full"
        url="https://github.com/hikariatama/anonqa">anonqa</Chip
      >
      <Chip
        class="w-full"
        url="https://github.com/hikariatama/meddoc">meddoc</Chip
      >
    </div>
  </div>
</div>
