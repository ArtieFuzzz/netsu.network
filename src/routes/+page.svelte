<script type='ts'>
	import MetaButtons from '../components/MetaButtons.svelte';
</script>

<main>
  <div class='flex flex-col items-center justify-center h-screen'>
    <h1>NetSu.<span  class='network'>NETWORK</span></h1>
    <MetaButtons/>
    <div class='grid grid-flow-row-dense text-sm lg:text-lg'>
      <h2>Coming Soon, Near a Local Walmart.</h2>
    </div>
  </div>
</main>

<style lang='scss'>
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
