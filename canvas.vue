<template>
  <div>
    <canvas id="canvas" width="600" height="400" ref="canvas"></canvas>
  </div>
</template>
<script>
export default {
  mounted() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    // ctx.font = '38pt Arial';
    // ctx.fillStyle = 'cornflowerblue';
    // ctx.strokeStyle = 'blue';
    // ctx.fillText('Hello Canvas', canvas.width/2 -150, canvas.height/2- + 15);
    // ctx.strokeText('Hello Canvas',canvas.width/2 - 150,canvas.height/2 + 15);

    ctx.lineJoin = 'round';
    ctx.lineWidth = 30;
    ctx.font = '24px Helvetica';
    ctx.fillText('click anywhere to erase', 175, 40);

    ctx.strokeRect(74, 100, 200, 200);
    ctx.fillRect(325, 100, 200, 200);

    ctx.canvas.onmousedown = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  },
};
</script>
<style lang="css" scoped>
canvas {
  border: 1px solid #ddd;
}
</style>
