<template>
    <div>
        <!-- <div class="components-container board">
            <hello-world class="one" :key="1" :group="group" :list="list1" header-text="left" />
            <hello-world class="two" :key="2" :group="group" :list="list2" header-text="mid" />
            <hello-world class="three" :key="3" :group="group" :list="list3" header-text="right" />
        </div> -->
        <el-container>
            <el-header>
                <my-header></my-header>
            </el-header>
            <el-container>
                <el-aside width="200px"></el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>

        <!-- <header></header> -->
        <el-tooltip placement="top" content="顶部">
            <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="50" transition-name="fade" />
        </el-tooltip>
    </div>
</template>

<script>
import {getUserInfo, goLogin} from '@/api/login.js'
export default {
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
                {id:9,name:'我是九'}
            ],
            list2: [
                {id:21,name:'我是二一'},
                {id:22,name:'我是二二'},
                {id:23,name:'我是二三'},
                {id:24,name:'我是二四'},
                {id:25,name:'我是二五'},
                {id:26,name:'我是二六'},
                {id:27,name:'我是二七'},
                {id:28,name:'我是二八'},
                {id:29,name:'我是二九'}
            ],
            list3: [
                {id:31,name:'我是三一'},
                {id:32,name:'我是三二'},
                {id:33,name:'我是三三'},
                {id:34,name:'我是三四'},
                {id:35,name:'我是三五'},
                {id:36,name:'我是三六'},
                {id:37,name:'我是三七'},
                {id:38,name:'我是三八'},
                {id:39,name:'我是三九'}
            ],
        }
    },
    methods: {
        async getlogin() {
        //   const info = await getUserInfo({id: 5}); // 传参方式 get 
        //   const login = await goLogin({data: {item: '12313'}}); // 传参方式 post
        //   const info = await getUserInfo();
        //   console.log(info, 'info')
        }
    },
    created() {
        this.getlogin()
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
}
.two {
    background-color: yellow;
    margin:0 10px;
}
.three {
    background-color: green;
}
</style>