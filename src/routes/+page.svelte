<main>
  <div class='flex flex-row items-center justify-center h-screen'>
    <h1>NetSu.<span  class='network'>NETWORK</span></h1>
  </div>
</main>

<style type='scss'>
  main {
    @apply h-screen w-screen;
  }

  span {
    &.network {
      @apply text-lg font-bold;
    };
  }

  h1 {
    background: linear-gradient(to right, #B4D9EF, #F8C57C, #F8C57C);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;

    @apply text-8xl;
  }
</style>
