<script lang="ts">
  import Biobox from "$lib/components/biobox.svelte"
  import Chip from "$lib/components/chip.svelte"
</script>

<div class="w-fit h-fit right-0 left-0 m-auto mt-20">
  <Biobox class="left-0 right-0 m-auto mb-6" />
  <div class="block sm:flex w-[600px] justify-evenly">
    <Chip url="https://t.me/hikariatama">telegram</Chip>
    <Chip url="/CV.pdf">resumé</Chip>
    <Chip url="https://github.com/hikariatama">github</Chip>
  </div>
  <div class="block sm:flex w-[600px] justify-evenly sm:mt-2">
    <Chip
      small={true}
      url="https://hikka.pw">hikka</Chip
    >
    <Chip
      small={true}
      url="https://leninec.dan.tatar">leninec</Chip
    >
    <Chip
      small={true}
      url="https://t.me/ruvds_com_bot">ruvds</Chip
    >
    <Chip
      small={true}
      url="https://github.com/hikariatama/anonqa">anonqa</Chip
    >
    <Chip
      small={true}
      url="https://github.com/hikariatama/meddoc">meddoc</Chip
    >
  </div>
  <div class="flex w-full justify-center mt-8">
    <Chip url="comic" target="_self">view comic</Chip>
  </div>
</div>
