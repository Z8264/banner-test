


<ClientOnly>
  <ClearColor/>
</ClientOnly>

``` js
const canvas = document.querySelector('canvas');

const gl = canvas.getContext('webgl')
|| canvas.getContext('experimental-webgl');
gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

const switchColor = () => {
  gl.clearColor(Math.random(), Math.random(), Math.random(), 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
};

switchColor();

canvas.addEventListener('click', switchColor, false);
```



# Hello VuePress


::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::


> 目录（Table of Contents）的渲染可以通过 markdown.toc 选项来配置。



``` js
console.log('a')
```