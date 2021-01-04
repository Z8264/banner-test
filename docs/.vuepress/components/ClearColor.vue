<template>
  <div class="demo">
    <canvas></canvas>
  </div>
</template>
<script>

export default {
  data() {
    return {
      p: '',
    };
  },
  mounted() {
    // window.removeEventListener(evt.type, setupWebGL, false);

    // References to the document elements.
    const canvas = document.querySelector('canvas');

    // Getting the WebGL rendering context.
    const gl = canvas.getContext('webgl')
    || canvas.getContext('experimental-webgl');
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    // const setColorMask = () => {

    // };

    const switchColor = () => {
      gl.clearColor(Math.random(), Math.random(), Math.random(), 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
    };
    switchColor();

    canvas.addEventListener('click', switchColor, false);
  },
};
</script>
<style scoped>
</style>
