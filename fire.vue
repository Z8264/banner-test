<template>
  <div>
   <canvas id="fire" height="712" width="769"></canvas>
  </div>
</template>
<script>
/* eslint-disable  */
import Fire from './Fire/Fire.js';
export default {
  mounted() {

    let oCanvas;
    const init = function () {
      oCanvas = new Fire();
      oCanvas.start();
    };

    window.onload = init;
  },
};
</script>
