<template>
    <div>
        <ul class="headertop">
            <li class="header-logo"></li>
            <li class="header-mid">
                <template :title="item" v-for="(item, index) in headerList">
                    <span v-if="index<=4" :title="item.title" :key="index" @click="showMore(item, index)" :class="{active: hIndex == index}">
                        {{headerList.length>5 && index == 4?'更多':item.title}}
                    </span>
                </template>
            </li>
            <li>
                <span class="usericon"><i class="el-icon-s-custom"></i></span>
                <span>
                    {{$common.userInfo.item}}
                </span>
                <el-dropdown @command="setUser">
                    <span class="el-dropdown-link setting-header">
                        <i class="el-icon-setting"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="item" v-for="(item, index) in dropdownList" :key="index">
                            <i :class="iconList[index]"></i>
                            {{item}}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
        </ul>
         <div class="hide-none-header" v-if="showtype">
            <template v-for="(item, index) in headerList">
                <span v-if="index>=4" :title="item.title" :class="{active: showtypeIndex == index}" :key="index" @click="setTypeshow(item, index)">
                        {{item.title}}
                </span>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hIndex: 0,
            dropdownList: ['个人信息', '修改信息', '退出'],
            iconList: ['el-icon-user', 'el-icon-edit-outline', 'el-icon-switch-button'],
            headerList:[
                {
                    path: '/home',
                    title: '首页',
                    name: 'home'
                },
                {
                    path: '/formContList',
                    title: '动态表单',
                    name: 'formContList'
                },
                {
                    path: '/contract',
                    title: '管理2',
                    name: 'contract'
                },
                {
                    path: '/contract',
                    title: '管理3',
                    name: 'contract'
                },
                {
                    path: '/contract',
                    title: '管理3',
                    name: 'contract'
                },
                {
                    path: '/contract',
                    title: '管理3',
                    name: 'contract'
                },
                {
                    path: '/contract',
                    title: '管理3',
                    name: 'contract'
                },
                {
                    path: '/contract',
                    title: '管理3',
                    name: 'contract'
                },
                {
                    path: '/contract',
                    title: '管理3',
                    name: 'contract'
                },
                 {
                    path: '/contract',
                    title: '管理3',
                    name: 'contract'
                }],
            showtype: false,
            showtypeIndex: -1
        }
    },
    methods:{
        setTypeshow(item, index) {
            this.showtypeIndex = index;
            this.hIndex = -1;
            this.$router.push({path: item.path})
        },
        showMore(item, index) {
            this.showtypeIndex = -1;
            if(index == 4) {
                this.showtype = true;
            } else {
                this.showtype = false;
                this.$router.push({path: item.path})
            }
            this.hIndex = index;
        },
        signout(){
            this.$router.replace({path: '/'});
            this.$common.routTab = [];
            // userItem
        },
        setUser(item) {
            switch (item) {
                case '个人信息':break;
                case '修改信息':break;
                case '退出': this.signout();break;
                default:break;
            }
        }
    },
    created() {}
}
</script>

<style>

</style>