<template>
  <div class="wrapper">
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
        <strong>{{ i + 1 }}</strong>
        <span
          >实体实体实体实体实体实体实体实体实体实体实体实体实体实体实体实体实体</span
        >
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
.wrapper {
  position: relative;
  overflow: hidden;
}
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
  margin: 0;
  display: flex;
  align-items: flex-end;
  padding: 0;
  width: 500px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.controller li {
  float: left;
  display: block;
  width: 20%;
  height: 50px;
  padding: 10px;
  border: 1px solid #ddd;
  transition: width ease-out 0.3s;
  background: #fff;
}
.controller li strong {
  display: block;
  margin-bottom: 10px;
  transform: translateY(30px);
  transition: all ease-out 0.3s;

}
.controller li span {
  width: 100%;
  line-height: 20px;
  font-size: 14px;
  height: 0;
  width: 180px;
  opacity: 0;
  overflow: hidden;
  transition: opacity ease-out 0.3s;

}
.controller li.active {
  width: 40%;
  height: auto;
  background: #def;
}
.controller li.active span {
  display: block;
  opacity: 1;
  height: 60px;
}
.controller li.active strong {
  display: block;
  transform: translateY(0)

}
</style>