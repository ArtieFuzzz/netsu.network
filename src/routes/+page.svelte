<main>
  <div class='flex flex-col items-center justify-center h-screen'>
    <h1>NetSu.<span  class='network'>NETWORK</span></h1>
    <div class='grid grid-flow-row'>
      <h2>Coming Soon, Near a Local Walmart.</h2>
    </div>
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
    margin: 0;

    @apply text-8xl;
  }

  h2 {
    color: white
  }
</style>
