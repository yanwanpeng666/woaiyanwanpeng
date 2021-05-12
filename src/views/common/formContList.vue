<template>
    <div>
        <!-- 搜索 -->
        <form-search v-model="searchValue" @querySearch="querySearch" :placeholder="'动态表单'">
            <template #searchBtn>
                <el-button size="small">新增</el-button>
                <el-button size="small">高级搜索</el-button>
                <el-button size="small" @click="$common.excel(infoData)">导出excel</el-button>
            </template>
        </form-search>
        <!-- 分页 -->
        <vue-page :infor="infor" @loadPage="loadPage" />
    </div>
</template>

<script>
export default {
    name: 'formContList',
    data() {
        return {
            searchValue: '',
            infoData: {},
            infor: {
                total: 0, // 总数
                page: 1, // 当前也
                size: 10 // 每页几条
            }
        }
    },
    methods:{
        querySearch(item) {
            console.log(item, 'item')
        },
        loadPage(item) {
            console.log(item, 'item')
        },
    }
}
</script>

<style>

</style>