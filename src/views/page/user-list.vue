<template>
    <div>
        <Table :columns="columns" :data="data">
            <template slot-scope="{ row, index }" slot="uname">
            <Input type="text" v-model="editUname" v-if="editIndex === index" />
            <span v-else>{{ row.uname }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="name">
            <Input type="text" v-model="editName" v-if="editIndex === index" />
            <span v-else>{{ row.name }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="sex">
            <Input type="text" v-model="editSex" v-if="editIndex === index" />
            <span v-else>{{ row.sex }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="birthday">
            <Input type="text" v-model="editDate" v-if="editIndex === index" />
            <span v-else>{{ getBirthday(row.birthday) }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="address">
            <Input type="text" v-model="editAddress" v-if="editIndex === index" />
            <span v-else>{{ row.address }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="email">
            <Input type="text" v-model="editEmail" v-if="editIndex === index" />
            <span v-else>{{ row.email }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="action">
            <div v-if="editIndex === index">
                <Button @click="handleSave(index,row)" type="success">保存</Button>
                <Button @click="editIndex = -1" type="error">取消</Button>
            </div>
            <div v-else>
                <Button @click="handleEdit(row, index)" type="info">编辑</Button>
                <Button @click="handleDel(row, index)" type="error">删除</Button>
            </div>
            </template>
            
        </Table>
        <div style="margin-top:10px;">
            <Page class="paging" :total="dataCount" :page-size="pageSize" show-total  @on-change="changePage"/>
        </div>
        <div>
            <Button type="info" @click="handleAdd">添加</Button>
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        dataCount: 0,
        pageSize:13,
        columns: [
            {
            title: '用户名',
            slot: 'uname'
          },
          {
            title: '姓名',
            slot: 'name'
          },
          {
            title: '性别',
            slot: 'sex'
          },
          {
            title: '注册日期',
            slot: 'birthday'
          },
           {
            title: '邮箱',
            slot: 'email'
          },
          {
            title: '地址',
            slot: 'address'
          },
          {
            title: '操作',
            slot: 'action'
          }
        ],
        data: [], //显示
        reqData: [
  
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
    computed: {
    host() {
      return this.$store.state.host
    }
  },
    methods: {
    handleEdit (row, index) {
        this.editName = row.name;
        this.editUname = row.uname;
        this.editEmail = row.email;
        this.editSex = row.sex;
        this.editAddress = row.address;
        this.editDate = row.birthday;
        this.editIndex = index;
    },
    handleSave (index) {
        this.data[index].name = this.editName;
        this.data[index].uname = this.editUname;
        this.data[index].sex = this.editSex;
        this.data[index].birthday = this.editDate;
        this.data[index].email = this.editEmail;
        this.data[index].address = this.editAddress;
        this.editIndex = -1;
    },
    handleDel(row,index) {
        let r = confirm(`确定删除：${row.name}?`)
        if(r) {
            this.$Message.success('删除成功！')
        } else {
            // console.log(3)
        }
    },
    getBirthday (birthday) {
        let date = new Date(parseInt(birthday));
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours =date.getHours(); //小时 
        let m = date.getMinutes();//分 
        let s = date.getSeconds(); //秒 
        return `${year}-${month}-${day}:${hours}:${m}:${s}`;
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
    },
    getData() {
        let url = this.host + '/list/userList';
        this.axios.get(url).then(res => {
            let listData = res.data;
            let ajaxData = [];
            for(let i = 0; i < listData.length; i++) {
                let item = {
                    uname: listData[i].uname, 
                    name: listData[i].name,
                    sex: listData[i].sex,
                    birthday: listData[i].time,
                    email: listData[i].email,
                    address: listData[i].address
                }
                ajaxData.push(item)
                
            }
                this.reqData = ajaxData;
        })
    },
    handleAdd() {
        let item = {
            uname: 'angel', 
            name: '张张',
            sex: '男',
            birthday: Date.now(),
            email: '243243@qq.com',
            address: '北京'
        }
        this.reqData.push(item)
    }
    },
    mounted() { 
        this.getData()
    },
    watch: {
        reqData: {
            deep: true,
            immediate: true,
            handler: function() {
                this.showPage()
            }
        }
    }
  }
</script>

<style scoped lang="scss">
.paging{
      float:right;
      margin-top:10px;
  }
</style>
