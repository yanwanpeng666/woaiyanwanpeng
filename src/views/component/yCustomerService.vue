<template>
    <div>
        <el-dialog custom-class="service-dialog" :close-on-click-modal="false" :close-on-press-escape	="false" title="人工客服" :visible.sync="loading" width="80%">
            <!-- 历史消息 -->
            <div class="service-news" id="serviceScoll">
                <div class="service-news-li" v-for="(item, index) in msgList" :key="index">
                    <span class="service-span">{{item.msg}}
                        <span class="service-user"></span>
                    </span>
                </div>
            </div>
            <!-- 客服输入消息 -->
            <div class="service-textarea">
                <el-input type="textarea" autofocus="true" :rows="5" placeholder="请输入..." maxlength="400" show-word-limit v-model="textarea"></el-input>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button size="mini" @click="loading = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="goSend">发 送</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'service',
    data() {
        return {
            loading: false,
            textarea: '',
            msgList: []
        };
    },
    methods: {
        show() {
            this.loading = true;
            this.getScoll();
        },
        getScoll(){
            setTimeout(()=>{
                document.getElementById('serviceScoll').scrollTop = document.getElementById('serviceScoll').scrollHeight;
            },0)
        },
        goSend() {
            if(!this.textarea) {
                return false;
            }
            let $this = this;
            var ws = new WebSocket("wss://echo.websocket.org");
            ws.onopen = function(evt) { 
                console.log("Connection open ..."); 
                ws.send($this.textarea);
            };

            ws.onmessage = function(evt) {
                console.log( "Received Message: " + evt.data);
                $this.msgList.push({
                    msg: evt.data
                })
                $this.textarea = '';
                $this.getScoll();
                // ws.close();
            };

            ws.onclose = function(evt) {
                console.log("Connection closed.");
            };   
        }
    },
};
</script>

<style>
</style>