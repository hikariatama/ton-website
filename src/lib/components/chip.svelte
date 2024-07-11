<script lang="ts">
  import { customGoto } from '$lib/utils';

  export let url: string;
  export let target: string = '_blank';

  const route = (e: MouseEvent) => {
    e.preventDefault();
    customGoto(url);
  };
</script>

<a
  href={url}
  {target}
  class="shadow-neon-green rounded-md h-9 p-2 px-6 text-xl w-fit cursor-pointer relative transition-all ease-in-out m-1 flex justify-center items-center text-center select-none hover:-translate-y-1 hover:hue-rotate-15 {$$props.class}"
  on:click={route}
>
  <slot />
</a>
