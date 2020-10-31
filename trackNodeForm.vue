<template>
    <el-form ref="ruleForm" :rules="rules" :model="model">
        <div class="form-card" v-if="model">
            <div class="row-separate">
                <p class="row-top"></p>
                <p class="row-text">履约事项及对应款项</p>
                <!-- <p class="row-tips blue">
                    <template v-if="item.performstate == '5' && item.moneyamount > 0">
                        <a-icon type="check-circle" />对应款项执行完成
                    </template>
                    <template v-if="item.performstate == '5'">
                        <a-icon type="check-circle" />履约事项执行完成
                    </template>
                </p> -->
            </div>
            <el-form-item label-width="28%" class="half-width" label="事项完成日期" prop="eventdate">
                <el-date-picker v-model="model.eventdate" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" />
                <div class="hide-box">{{model.eventdate}}</div>
            </el-form-item>
            <el-form-item label-width="14%" label="执行事项说明" prop="eventmemo">
                <el-input type="textarea" rows="5" v-model="model.eventmemo" />
                <div class="hide-box">{{model.eventmemo}}</div>
            </el-form-item>
            <!-- <el-form-item label-width="28%" class="half-width" label="款项完成日期" v-if="item.moneyamount > 0">
                <el-date-picker v-model="model.moneydate" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" />
                <div class="hide-box">{{model.moneydate}}</div>
            </el-form-item>
            <el-form-item label-width="28%" class="half-width rel-div" label="执行款项金额" v-if="item.moneyamount > 0">
                <el-input v-model="model.moneyamount" class="form-unit-input"></el-input>
                <span class="form-unit-box">元</span>
                <div class="hide-box">{{model.moneyamount}}元</div>
            </el-form-item> -->
            <el-form-item label-width="14%" label="相关附件">
                <upload-file ref="perform" :relationId="model.objectid" groupId="contractPerformFile" :type="type"></upload-file>
            </el-form-item>
            <!-- <el-form-item label-width="28%" label="经办人" class="half-width">{{model.handleuser}}
            </el-form-item>
            <el-form-item label-width="28%" label="经办时间" class="half-width">{{model.createdatestr}}
            </el-form-item> -->
        </div>
    </el-form>
</template>
<script>
export default {
    name: 'trackNodeDetail',
    data() {
        return {
            rules:{
                eventmemo: [
                    { max: 400, message:'数据长度应限制在' + 400 + '以内', trigger:"change" }
                ],
                eventdate: [
                    { required: true, message:'事项完成日期为必填项', trigger:"change" }
                ]
            }
        }
    },
    props: {
        type: {
            default: 'edit'
        },
        item: {},
        value: {
            required: true
        }
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
        dataFormat() {
            this.model.uploadfileids = this.$refs.perform.getFileId();
        },
        save(func) {
            this.dataFormat();

            this.$nextTick(() => {
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        this.$emit("save", this.model, func);
                    } else {
                        this.$alert('请按照提示完善表单内容!');
                    }
                    //页面上的验证条件默认采用发送的验证
                    //保存按钮点击过以后, 页面上将按照保存的验证条件进行提示
                    //this.$nextTick(()=>{
                        //this.validateType = true;
                    //});
                });
            });
        },
        submit(type, func) {
            this.dataFormat();

            this.$nextTick(() => {
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        this.$emit(type, this.model, func);
                    } else {
                        this.$alert('请按照提示完善表单内容!');
                    }
                    //页面上的验证条件默认采用发送的验证
                    //保存按钮点击过以后, 页面上将按照保存的验证条件进行提示
                    //this.$nextTick(()=>{
                        //this.validateType = true;
                    //});
                });
            });
        }
    },
    created() {}
}

</script>
