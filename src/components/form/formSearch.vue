<template>
    <div>
        <form @submit.prevent="normalLoadPage()" method="get" >
            <el-input :placeholder="'请输入 '+placeholder+' 进行查询'" v-model="model" class="query-search">
                <el-button slot="append" icon="el-icon-search" @click="normalLoadPage"></el-button>
            </el-input>
            <div class="slot-query">
                <slot name="searchBtn"></slot>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props:{
        placeholder: '',
        value: {
            required: true
        }
    },
    data() {
        return {}
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(newValue) {
                this.$emit('input', newValue);
            }
        }
    },
    methods: {
        normalLoadPage() {
            if(this.model) {
                this.$emit('querySearch', this.model)
            }
        }
    }
}
</script>

<style>

</style>