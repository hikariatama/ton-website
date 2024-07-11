<script>
  import "../app.css"
</script>

<meta
  name="author"
  content="Daniil Gazizullin"
/>
<meta
  name="description"
  content="Inquisitive, curious, and a little bit of a nerd."
/>
<header class="absolute w-screen">
  <nav class="flex justify-end items-center p-4 text-gray-500">
    <div class="flex gap-4 p-2 px-4 border rounded-2xl">
      <a
        href="/"
        class="link">home</a
      >
      <a
        href="/comic"
        class="link">comic</a
      >
    </div>
  </nav>
</header>

<slot />
