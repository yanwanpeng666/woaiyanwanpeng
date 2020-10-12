<template>
    <div>
        <ul class="headertop">
            <li>1</li>
            <li>1</li>
            <li>
                <span>
                    超级管理员
                </span>
                <el-dropdown>
                    <span class="el-dropdown-link setting-header">
                        <i class="el-icon-setting"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" @command="setUser">
                        <el-dropdown-item v-for="(item, index) in dropdownList" :key="index">
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
            dropdownList: ['个人信息', '修改信息', '退出'],
            iconList: ['el-icon-user', 'el-icon-edit-outline', 'el-icon-switch-button'],
        }
    },
    methods:{
        setUser(item) {
            console.log(item, 'item')
        }
    }
}
</script>

<style>

</style>