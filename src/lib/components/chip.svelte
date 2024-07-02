<script lang="ts">
  import { customGoto } from '$lib/utils';

  export let url: string;
  export let small = false;
  export let target: string = '_blank';

  const route = (e: MouseEvent) => {
    e.preventDefault();
    customGoto(url);
  };
</script>

<a
  href={url}
  {target}
  class="w-fit h-fit block"
  on:click={route}
>
  <div
    class="chip h-9 p-2 px-8 text-xl w-fit cursor-pointer relative transition-all ease m-1 flex justify-center items-center text-center select-none box-border {small
      ? 'small h-8'
      : ''} {$$props.class}"
  >
    <slot />
  </div>
</a>

<style lang="postcss">
  .chip {
    border-radius: 0.55rem;
    background: #e6e7ee;
    color: #31344b;
  }

  .chip::before,
  .chip::after {
    content: '';
    opacity: 0;
    transition: opacity 0.3s ease;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0.55rem;
    left: 0;
    top: 0;
  }

  .chip::before {
    box-shadow:
      3px 3px 6px #b8b9be,
      -3px -3px 12px #f6f6ff11,
      -5px -5px 15px 0 #ffffffaa,
      5px 5px 15px 0 rgba(174, 174, 192, 0.4),
      inset -5px -5px 5px 0 rgba(174, 174, 192, 0.25),
      inset 5px 5px 5px 0 #f6f6ffaa;
    opacity: 1;
  }

  .chip::after {
    box-shadow:
      inset 2px 2px 5px #b8b9be,
      inset -3px -3px 7px #f6f6ffee;
  }

  .chip:hover::after {
    opacity: 1;
  }

  .chip:hover::before {
    opacity: 0;
  }

  .chip:active {
    transform: scale(0.95);
  }

  .chip.small {
    font-size: 15px;
    padding: 0.5rem 1rem;
  }
</style>
