<template>
  <div>
    <div class="banner" ref="banner">
      <a
        :class="{ active: i === activeIndex }"
        href="javascript:void(0)"
        v-for="(item, i) in list"
        :key="i"
      >
        <img :src="item.src" />
      </a>
    </div>
    <ul class="controller" ref="controller">
      <li
        :class="{ active: i === activeIndex }"
        v-for="(item, i) in list"
        :key="i"
        @mouseover="selectStyle(i)"
      >
        {{ i + 1 }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
    list:[
      {
        src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607885537377&di=ecb28ec97dfda45c5dd629b32c2068e9&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg'
      },
      {
        src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607885537377&di=303e5e5a3ec8199c88ae15f534eadbf2&imgtype=0&src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fuserup%2F0909%2F2Z64022L38.jpg',
      },
      {
        src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607885537377&di=e34e9ae05c0083fa8b0f4632931a5d64&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg'
      }
    ],
    activeIndex: 1
    }
  },
  mounted() {
  },
  methods: {
    selectStyle(i){
      this.activeIndex = i;
    }
  },
}
</script>
<style  scoped>
.banner {
  position: relative;
  width: 500px;
  height: 250px;
  overflow: hidden;
}

.banner a {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: all ease-out 0.3s;
}
.banner a.active {
  opacity: 1;
}
.banner img {
  display: block;
  width: 100%;
  height: 100%;
}

.controller {
  padding: 0;
}
.controller li {
  display: block;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ddd;
  transition: all ease-out 0.3s;
}
.controller li.active {
  transform: translateX(30px);
  background: rgba(0, 0, 0, 0.1);
}
</style>