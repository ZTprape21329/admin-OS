<template>
    <div  class="layout">
        <Layout>
            <Content>
                <div class="top">
                    <h1>数据统计</h1>
                </div>
                <div class="topContent">
                    <div><h2>当日数据:</h2></div>
                    <div class="child">新增用户<span class="count">43</span></div>
                    <div class="child">新增订单<span class="count">24</span></div>
                    <div class="child">新增管理员<span class="count">15</span></div>
                </div>
                <div class="topContent">
                    <div style="background-color:#2d8cf0;"><h2>总数据:</h2></div>
                    <div class="child">注册用户<span class="count">21543</span></div>
                    <div class="child">订单<span class="count">21543</span></div>
                    <div class="child">管理员<span class="count">21543</span></div>
                </div>
                
            </Content>
            <div class="echartsMain">
                <div class="echartsContent">
                   <echats style="width:100%;height:400px"
                   :type="'bar'"
                   :data="data"
                   :xData="xData"
                   :titleText="title"
                   ></echats>  
                </div>
                </div> 
        </Layout>
    </div>
</template>

<script>
import echats from '../components/echart.vue';
export default {
    components: {
        echats
    },
    data() {
        return {
            list:[],
            title: 'zzzgasags',
            xData:['周一','周二','周三','周四','周五','周六','周日'],
            data:[{
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        stack: '总量',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        stack: '总量',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        stack: '总量',
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'搜索引擎',
                        type:'line',
                        stack: '总量',
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }]
        }
    }
}
</script>
<style>
 .top{
    text-align: center;
    padding: 10px 15px;
    letter-spacing: 10px;
    margin-bottom: 15px;
 }
 .topContent{
     width: 100%;
     height: 40px;
     display: flex;
     margin-bottom: 15px;
 }
 .topContent div{
     width: 15%;
     margin-right: 15px;
     background-color: #19be6b;
     border-radius: 8px;
     text-align: center;
     justify-content: space-between;
 }
 .topContent h2{
     line-height: 40px;
     letter-spacing: 5px;
     color: white;
 }
 .topContent .child{
     line-height: 40px;
     font-size: 20px;
     color:white;
     text-align: center;
     width: 20%;
     background-color: #bbc2d1;
 }
 .topContent .count{
     color:rgb(240, 12, 12);
     padding: 0 15px;
     font-size: 20px;
     white-space: nowrap; 
 }
 .echartsMain {
     border-top:15px solid white;
 }
</style>