<template>
  <div>
    <p>{{ p }}</p>
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
    const detectWebGL = () => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl')
      || canvas.getContext('experimental-webgl');
      return !!(gl && gl instanceof WebGLRenderingContext);
    };
    if (detectWebGL()) {
      this.p = 'Congratulations! Your browser supports WebGL.';
    } else {
      this.p = 'Your browser or device may not support WebGL.';
    }
  },
};
</script>
<style scoped>
</style>
