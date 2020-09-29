<template>
  <div>
      <div class="components-container board">
        <hello-world class="one" :key="1" :group="group" :list="list1" header-text="left" />
        <hello-world class="two" :key="2" :group="group" :list="list2" header-text="mid" />
        <hello-world class="three" :key="3" :group="group" :list="list3" header-text="right" />
    </div>
    <el-tooltip placement="top" content="顶部">
        <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="50" transition-name="fade" />
    </el-tooltip>
  </div>
</template>

<script>
import BackToTop from '@/components/BackToTop'

export default {
    components: {
        BackToTop
    },
    data() {
        return {
            myBackToTopStyle: {
                right: '50px',
                bottom: '50px',
                width: '40px',
                height: '40px',
                'border-radius': '4px',
                'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
                background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
            },
            group: 'mission',
            list1: [
                {id:1,name:'我是一'},
                {id:2,name:'我是二'},
                {id:3,name:'我是三'},
                {id:4,name:'我是四'},
                {id:5,name:'我是五'},
                {id:6,name:'我是六'},
                {id:7,name:'我是七'},
                {id:8,name:'我是八'},
                {id:9,name:'我是九'},
                {id:10,name:'我是十'}
            ],
            list2: [
                {id:21,name:'我是二一'},
                {id:22,name:'我是二二'},
                {id:23,name:'我是二三'},
                {id:24,name:'我是二四'}
            ],
            list3: [
                {id:1,name:'我是三一'},
                {id:2,name:'我是三二'},
                {id:3,name:'我是三三'},
                {id:4,name:'我是三四'}
            ],
        }
    }
}
</script>

<style>
.components-container {
    display: flex;
    justify-content: space-between;
}
.components-container div {
    flex: 1;
}
.one {
    background-color: red;
    margin: 15px;
}
.two {
    background-color: yellow;
    margin: 15px;
}
.three {
    background-color: green;
    margin: 15px;
}
</style>