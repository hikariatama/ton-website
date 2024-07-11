<script lang="ts">
  import { getRelativePublicationDate, type Comic } from '../../api';

  export let comic: Comic;
</script>

<div class="w-fit h-fit min-w-[600px] transition-all ease {$$props.class}">
  <div class="shadow-neon-red p-6 min-h-[200px] rounded-2xl comic relative">
    <img
      class="h-[25vh] invert brightness-[97%] rounded-sm"
      src={comic.img}
      alt={comic.alt}
    />
    <div class="text-3xl font-semibold text-gray-100 mt-4">{comic.safe_title}</div>
    <div class="text-gray-500">{getRelativePublicationDate(comic)}</div>
  </div>
</div>
