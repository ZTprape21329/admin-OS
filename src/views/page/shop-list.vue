<template>
    <div>
        <Table :columns="columns" :data="data">
            <template slot-scope="{row}" slot="shopNumber">
            <span>{{ row.shopNumber }}</span>
            </template>

            <template slot-scope="{row}" slot="name">
            <span>{{ row.name }}</span>
            </template>

            <template slot-scope="{ row }" slot="img">
            <img style="height:50px; border-radius:5px;" :src="row.img" alt="">
            </template>

            <template slot-scope="{ row, index }" slot="date">
            <Input type="text" v-model="editDate" v-if="editIndex === index" />
            <span v-else>{{ getBirthday(row.date) }}</span>
            </template>

           <template slot-scope="{ row }" slot="price">
            <span>￥{{ row.price }}</span>
            </template>

            <template slot="grounding">
                <Switch true-color="#13ce66" false-color="#ff4949" />
            </template>

            <template slot-scope="{ row }" slot="count">
            <span>{{ row.count }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="action">
            <div>
                <Button @click="handleDel(row, index)" type="error">删除</Button>
            </div>
            </template>
        </Table>
        <div style="margin-top:10px;">
            <Page class="paging" :total="dataCount" :page-size="pageSize" show-total  @on-change="changePage"/>
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        dataCount: 0,
        pageSize:15,
        showData: [],
        columns: [
            {
            title: '商品编号',
            slot: 'shopNumber'
          },
          {
            title: '商品名称',
            slot: 'name'
          },
          {
            title: '商品图片',
            slot: 'img'
          },
          {
            title: '更新日期',
            slot: 'date'
          },
          {
            title: '商品价格',
            slot: 'price'
          },
           {
            title: '上架',
            slot: 'grounding'
          },
          {
            title: '库存',
            slot: 'count'
          },
          {
            title: '操作',
            slot: 'action'
          }
        ],
        data: [], //显示
        reqData: [
          {
            shopNumber:'101012512', 
            name: '照相机',
            img:require('../../assets/1.jpg') ,
            date: '919526400000',
            count: 99,
            price: 100.00
          },
          {
            shopNumber:'101012512', 
            name: '照相机',
            img:require('../../assets/1.jpg') ,
            date: '919526400000',
            count: 99,
            price: 100.00
          },
          {
            shopNumber:'101012512', 
            name: '照相机',
            img:require('../../assets/1.jpg') ,
            date: '919526400000',
            count: 99,
            price: 100.00
          },
          {
            shopNumber:'101012512', 
            name: '照相机',
            img:require('../../assets/1.jpg') ,
            date: '919526400000',
            count: 99,
            price: 100.00
          },
          {
            shopNumber:'101012512', 
            name: '照相机',
            img:require('../../assets/1.jpg') ,
            date: '919526400000',
            count: 99,
            price: 100.00
          }
        ],//请求的数据
        editIndex: -1,  // 当前聚焦的输入框的行数
        editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
        editSex: '',  // 第二列输入框
        editDate: '',  // 第三列输入框
        editAddress: '',  // 第四列输入框
        editUname: '',
        editEmail: ''
      }
    },
    methods: {
    getBirthday (birthday) {
        let date = new Date(parseInt(birthday));
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return `${year}-${month}-${day}`;
    },
    handleDel(row,index) {
        let r = confirm(`确定删除：${row.name}?`)
        if(r) {
            this.$Message.success('删除成功！')
        } else {
            // console.log(3)
        }
    },
    showPage() {
        this.dataCount = this.reqData.length;
        if (this.dataCount < this.pageSize) {
            this.data = this.reqData;
        } else {
            this.data = this.reqData.slice(0, this.pageSize)
        }
    },
    changePage(index) {
        let start = (index-1) * this.pageSize;
        let end = index * this.pageSize;
        this.data = this.reqData.slice(start, end);
    }
    },
    mounted() {
        this.showPage()
    }
  }
</script>

<style scoped lang="scss">
.paging{
      float:right;
      margin-top:10px;
  }
</style>
