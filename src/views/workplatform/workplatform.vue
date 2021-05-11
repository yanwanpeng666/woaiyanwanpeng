<template>
    <div class="workplatform">
        <div class="work-ref">
            <div class="ref-div">
                <div id="echarts1" ref="echarts1"></div>
            </div>
            <div class="ref-div">
                <div id="echarts2" ref="echarts2"></div>
            </div>
            <div class="ref-div">
                <div id="echarts3" ref="echarts3"></div>
            </div>
            <div class="ref-div">{{mail|typeshow}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mail: '12979@126.com'
        }
    },
    filters:{
        typeshow(item) {
            if(item){
                let e = '';
                let list = (item.split('@')[0]).split('');
                list.forEach((ele,index)=> {
                    if(list.length<5) {
                        if(index==0) {
                            e = e + ele;
                        } else {
                            e = e + '*';
                        }
                    } else if((index<2)||(index==list.length-1)||(index==list.length-2)) {
                        e = e + ele;
                    } else {
                        e = e + '*';
                    }
                })
                return e +'@' + (item.split('@')[1]);
            }
        }
    },
    methods: {
        init(){
            this.getEcharts1();
            this.getEcharts2();
            this.getEcharts3();
        },
        getEcharts1() {
            let echarts1 = this.$echarts.init(this.$refs.echarts1);
            let option = {
                tooltip: {
                    trigger: 'item',
                    show: false
                },
                legend: {
                    orient: 'vertical',
                    left: '2%',
                    top: '5%'
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 1048, name: '搜索引擎'},
                            {value: 735, name: '直接访问'},
                            {value: 580, name: '邮件营销'},
                            {value: 484, name: '联盟广告'},
                            {value: 300, name: '视频广告'}
                        ]
                    }
                ]
            };
            echarts1.setOption(option, true);
        },
        getEcharts2() {
            let echarts2 = this.$echarts.init(this.$refs.echarts2);
            let option = {
                series: [{
                    type: 'gauge',
                    startAngle: 90,
                    endAngle: -270,
                    pointer: {
                        show: false
                    },
                    progress: {
                        show: true,
                        overlap: false,
                        roundCap: true,
                        clip: false,
                        itemStyle: {
                            borderWidth: 1,
                            borderColor: '#464646'
                        }
                    },
                    axisLine: {

                        lineStyle: {
                            width: 20
                        }
                    },
                    splitLine: {
                        show: false,
                        distance: 0,
                        length: 5
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        distance: 50
                    },
                    data: [{
                        value: 20,
                        name: '',
                        title: {
                            offsetCenter: ['0%', '-20%']
                        },
                        detail: {
                            offsetCenter: ['0%', '-30%']
                        }
                    },
                    {
                        value: 40,
                        name: '',
                        title: {
                            offsetCenter: ['0%', '0%']
                        },
                        detail: {
                            offsetCenter: ['0%', '5%']
                        }
                    },
                    {
                        value: 60,
                        name: '',
                        title: {
                            offsetCenter: ['0%', '30%']
                        },
                        detail: {
                            offsetCenter: ['0%', '40%']
                        }
                    }
                    ],
                    title: {
                        fontSize: 14
                    },
                    detail: {
                        width: 50,
                        height: 14,
                        fontSize: 14,
                        color: 'auto',
                        borderColor: 'auto',
                        borderRadius: 20,
                        borderWidth: 1,
                        formatter: '{value}%'
                    }
                }]
            };

            setInterval(function () {
                option.series[0].pointer.show = false;
                option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
                option.series[0].data[1].value = (Math.random() * 100).toFixed(2) - 0;
                option.series[0].data[2].value = (Math.random() * 100).toFixed(2) - 0;
                echarts2.setOption(option, true);
            }, 2000);

        },
        getEcharts3() {
            return
            let echarts3 = this.$echarts.init(this.$refs.echarts3);
            echarts3.setOption(option);
        }
    },
    mounted(){
        this.init();
    }
}
</script>

<style>

</style>