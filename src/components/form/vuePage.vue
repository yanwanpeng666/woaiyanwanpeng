<template>
    <div class="box-footers">
        <el-pagination
            background
            :layout="layout"
            @size-change="handleSizeChange"
            @current-change="page"
            @prev-click ="page"
            @next-click ="page"
            :page-sizes="[5, 10, 20, 50, 100]"
            :page-size="infor.size"
            :current-page.sync="infor.page"
            :total="infor.total">
        </el-pagination>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        handleSizeChange: function(num) {
            this.size = num;
            this.$nextTick(function(){
                this.$emit("loadPage", 1);
            });
        },
        page: function(num) {
            this.$nextTick(function(){
                this.$emit("loadPage", num);
            });
        }
    },
    props: {
        infor: {},
        layout: {
            default: 'total, prev, pager, next, sizes, jumper'
        }
    },
    computed: {
        size: {
            get() {
                return this.infor.size;
            },
            set(newValue) {
                this.infor.size = newValue;
            }
        }
    }

}

</script>
