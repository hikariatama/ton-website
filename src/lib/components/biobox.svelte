<div
  class="biobox flex justify-center items-center text-[#31344b] bg-[#e6e7ee] w-fit h-fit p-10 px-12 box-border transition-all ease rounded-2xl text-center select-none relative z-20 {$$props.class}"
>
  <div>
    <h1 class="text-4xl font-thin mb-3">daniil gazizullin</h1>
    <span class="text-2xl">a.k.a hikariatama, innocoffee</span><br />
    <span class="text-xl">full-stack developer @ Standoff</span>
    <ul class="w-fit relative text-left left-0 right-0 m-auto flex gap-4 mb-2">
      <li>
        <span class="text-xl">python</span>
      </li>
      <li>
        <span class="text-xl">infosec</span>
      </li>
      <li>
        <span class="text-xl">web</span>
      </li>
    </ul>
    <div class="flex gap-4 align-center justify-center">
      <a
        href="https://t.me/hikariatama"
        class="link"
        target="_blank"
      >
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/pulsar-line/128/telegram-app.png"
          alt="telegram"
          class="monoicon"
          id="tg-link"
        />
      </a>
      <a
        href="https://github.com/hikariatama"
        class="link"
        target="_blank"
      >
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/pulsar-line/128/github.png"
          alt="github"
          class="monoicon"
          id="gh-link"
        />
      </a>
      <a
        href="mailto:me@hikariatama.ru"
        class="link"
        target="_blank"
      >
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/pulsar-line/128/email-sign.png"
          alt="email"
          class="monoicon"
          id="email"
        />
      </a>
    </div>
  </div>
</div>
<svg
  width="0"
  height="0"
>
  <defs>
    <filter
      id="colorChange"
      color-interpolation-filters="sRGB"
    >
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0.192
                    0 0 0 0 0.204
                    0 0 0 0 0.294
                    0 0 0 1 0"
      />
    </filter>
  </defs>
</svg>

<style lang="postcss">
  .biobox::before,
  .biobox::after {
    content: '';
    opacity: 0;
    transition: all 0.3s ease;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  .biobox::before {
    box-shadow:
      6px 6px 12px #b8b9be,
      -6px -6px 18px #f6f6ff11,
      -10px -10px 30px 0 #ffffffaa,
      10px 10px 30px 0 rgba(174, 174, 192, 0.4),
      inset -10px -10px 10px 0 rgba(174, 174, 192, 0.25),
      inset 10px 10px 10px 0 #f6f6ffaa;
    opacity: 1;
  }

  .biobox::after {
    box-shadow:
      inset 2px 2px 5px #b8b9be,
      inset -3px -3px 7px #f6f6ffee;
  }

  .biobox:hover::after {
    opacity: 1;
  }

  .biobox:hover::before {
    opacity: 0;
  }
</style>
