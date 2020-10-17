<template>
    <div>
        <ul class="headertop">
            <li class="header-logo"></li>
            <li class="header-mid">
                <span :class="{active: hIndex == index}" v-for="(item, index) in headerList" :key="index" @click="hIndex = index">{{item}}</span>
            </li>
            <li>
                <span class="usericon"><i class="el-icon-s-custom"></i></span>
                <span>
                    超级管理员
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            hIndex: 0,
            dropdownList: ['个人信息', '修改信息', '退出'],
            iconList: ['el-icon-user', 'el-icon-edit-outline', 'el-icon-switch-button'],
            headerList:['首页', '合同管理']
        }
    },
    methods:{
        signout(){
            this.$router.replace({path: '/'});
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
    }
}
</script>

<style>

</style>