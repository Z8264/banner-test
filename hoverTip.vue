<template>
  <div>
    <ul>
      <li
        :class="{ active: i === activeIndex }"
        href="javascript:void(0)"
        v-for="(item, i) in list"
        :key="i"
        @mouseover="selectStyle(i)"
      >
        <strong>{{item.text}}</strong>
        <span>{{item.des}}</span>
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
          text:'aaaaaa',
          des: '阿斯顿发的法师大法师发发的身份'
        },
        {
          text:'aaaaaa',
          des: '阿斯顿发的法师大法师发发的身份'   
        },
        {
          text:'aaaaaa',
          des: '阿斯顿发的法师大法师发发的身份'    
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
ul {
  position: relative;
  list-style: none;
}
li {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  width: 80px;
  background:#fff;;
  transition: all ease-out .3s;
  border-radius: 10px;
}
li:after {
  display: block;
  content: '';
  position: absolute;
  top:100%;
  left:50%;
  height: 50px;
  width:5px;
  background: #ddd;
}
li span {
  display: block;
  text-align: center;
  font-size: 14px;
  opacity: 0;
  display: none;
}
li strong {
  display: block;
  text-align: center;
  font-size: 18px;
}



li:nth-child(1) {
  top: 100px;
  left: 100px;
  transform:scale(1);
}
li:nth-child(2) {
  top: 300px;
  left: 300px;
  transform:scale(.7);
}
li:nth-child(3) {
  top: 250px;
  left: 200px;
  transform:scale(.5);
}

li.active {
  transform: scale(1);
  background: #def;
}
li.active span{
  display: block;
  opacity: 1;
}

</style>