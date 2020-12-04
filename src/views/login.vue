<template>
    <div class="loginbj" :class="{setloginbj: windowWidth<1366}">
        <!-- 登录页面 -->
        <div id="mydiv">
            <!-- 登录背景放置canvas动画 -->
        </div>
        <div class="loginForm">
            <h2 class="logintitle">欢迎登录</h2>
            <el-form :model="login" :rules="rules" ref="ruleForm" label-width="65px" class="demo-ruleForm">
                <el-form-item label="账号：" prop="username">
                    <el-input v-model="login.username"></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input v-model="login.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="" class="setitem">
                    <el-button type="primary" class="loginbtn" @click="goLogin('ruleForm')">登 录</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- <el-button type="primary" @click="goLogin">登录</el-button> -->
    </div>
</template>

<script>
import { getUserInfo } from '@/api/login.js'
export default {
    data() {
        return {
            login: {
                username: '',
                password: ''
            },
            windowWidth: 1600,
            rules: {
                username: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ]
            }
        };
    },
    mounted (){
        //配置
        let config = {
            domId: 'mydiv', //dom
            vx: 2, //小球x轴速度,正为右，负为左
            vy: 2, //小球y轴速度
            height: 2, //小球高宽，其实为正方形，所以不宜太大
            width: 2,
            count: 150, //点个数
            color: "255,255,255", //点颜色
            stroke: "255,255,255", //线条颜色
            dist: 6000, //点吸附距离
            //dist: 6000, //点吸附距离
            e_dist: 4000, //鼠标吸附加速距离
            //e_dist: 40000, //鼠标吸附加速距离
            max_conn: 10 //点到点最大连接数
            //max_conn: 40 //点到点最大连接数
            //注释掉的参数可以替换当前参数, 替换完成后可以达到"连线游戏"的功能
        }
        //调用
        CanvasParticle(config);
        let svg = document.getElementsByTagName('svg');
        //console.log(svg);
        for (let i = 0; i < svg.length; i++) {
            svg[i].setAttribute('focusable', false);
        }
    },
    created() {
        this.windowWidth = document.body.clientWidth;
    },
    methods: {
        goLogin(formName) {
            this.$refs[formName].validate(async(valid) => {
                if (valid) {
                    // const info = await getUserInfo();
                    const info = {
                        success: true,
                        data: {
                            item: '超级管理员'
                        }
                    }
                    if(info.success) {
                        if(this.login.username =='root' && this.login.password == '000000'||this.login.username =='ywp' && this.login.password == '000000'){
                            if(this.login.username =='ywp') {
                                info.data.item = '闫万鹏'
                            }
                        } else {
                            this.$alert('账号：root 密码：000000', '试一试', {
                                confirmButtonText: '确定'
                            });
                            return false;
                        }
                        window.sessionStorage.setItem('userItem', JSON.stringify(info.data));
                        this.$router.push({ path: "/home", query: {} });
                    } else {
                        this.$alert('服务异常请联系管理员', '提示', {
                            confirmButtonText: '确定'
                        });
                    }
                } else {
                    return false;
                }
            });
        },
    },
};
</script>

<style>
</style>