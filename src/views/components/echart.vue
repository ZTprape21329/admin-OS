<template>
    <div id="main" ref="main"></div>
</template>

<script>
import echarts from 'echarts';
export default {
    data() {
        return {
            myCharts: null,
        }
    },
    props: {
        type: {
            type: String,
            default: 'line'
        },
        data: {
            type: Array,
            default: () => []
        },
        time: {
            type: Array,
            default: () => []
        },
        titleText: {
            type: String,
            default: ''
        },
        fontSize: {
            type: Number,
            default: 1
        },
        xData: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        optFilter () {
            switch(this.type) {
                case 'line':
                    this.myCharts.setOption(this.option_line(), true)
                    break;
                // case 'polar':
                //     this.myCharts.setOption(this.option_polar(), true)
                // case 'bar': 
                //     this.myCharts.setOption(this.option_bar(), true);
                //     break;
                // case 'graph':
                //     this.myCharts.setOption(this.option_graph(), true);
                //     break;
            }
        },
        setCharts () {
            this.myCharts =echarts.init(this.$refs.main);
            this.optFilter();
        },
        option_line() {
            return {
                title: {
                    left: 'center',
                    text: this.titleText,
                    textStyle: {
                        color: '#2b85e4',
                        fontSize: 15 * this.fontSize
                    },
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    data: this.xData
                },
                yAxis: {
                    type: 'value'
                },
                series: this.data   
            }
        }
    },
    mounted () {
        this.setCharts()
    }
}
</script>

<style>

</style>