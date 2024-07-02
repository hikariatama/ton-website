<script lang="ts">
  import { LoaderPinwheel } from 'lucide-svelte';
  import { fetchComic, getRelativePublicationDate, type Comic } from '../../api';

  let comic: Comic | null = null;
  fetchComic().then(newComic => {
    comic = newComic;
  });
</script>

<div class="w-fit h-fit min-w-[600px] transition-all ease {$$props.class}">
  <div class="bg-[#e6e7ee] p-4 px-6 min-h-[200px] rounded-2xl comic relative">
    {#if comic !== null}
      <img
        class="h-[25vh]"
        src={comic.img}
        alt={comic.alt}
      />
      <div class="text-3xl font-semibold text-gray-900">{comic.safe_title}</div>
      <div class="text-gray-700">{getRelativePublicationDate(comic)}</div>
    {:else}
      <LoaderPinwheel
        class="top-0 right-0 left-0 bottom-0 m-auto absolute animate-spin text-gray-600"
      />
    {/if}
  </div>
</div>
<svg
  width="0"
  height="0"
  xmlns="http://www.w3.org/2000/svg"
>
  <filter id="replaceWhite">
    <feColorMatrix
      type="matrix"
      values="
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 1 0"
      result="black"
    />
    <feFlood
      flood-color="#e6e7ee"
      result="newColor"
    />
    <feComposite
      in="newColor"
      in2="black"
      operator="in"
    />
    <feBlend
      in="SourceGraphic"
      in2="#"
      mode="multiply"
    />
  </filter>
</svg>

<style lang="postcss">
  .comic {
    box-shadow:
      6px 6px 12px #b8b9be,
      -6px -6px 18px #f6f6ff11,
      -10px -10px 30px 0 #ffffffaa,
      10px 10px 30px 0 rgba(174, 174, 192, 0.4),
      inset -10px -10px 10px 0 rgba(174, 174, 192, 0.25),
      inset 10px 10px 10px 0 #f6f6ffaa;
  }

  .comic img {
    filter: url(#replaceWhite);
  }
</style>
