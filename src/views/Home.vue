<template>
    <div class="layout">
        <!-- 左侧导航 -->
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="0" theme="dark" width="auto" :open-names="['0']">
                <Submenu name="0">
                    
                    <template slot="title"><Icon type="md-home" />首页</template>
                    <router-link to="/index"><MenuItem name="0-1">首页</MenuItem> </router-link>
                </Submenu>
                <Submenu name="1">
                    <template slot="title"><Icon type="md-analytics" />数据管理</template>
                    <router-link to="/userList"><MenuItem name="1-1">用户列表</MenuItem></router-link>
                    <router-link to="/shopList"><MenuItem name="1-2">商家列表</MenuItem></router-link>
                    <router-link to="/foodList"><MenuItem name="1-3">食品列表</MenuItem></router-link>
                    <router-link to="/orderList"><MenuItem name="1-4">订单列表</MenuItem></router-link>
                </Submenu>
                <Submenu name="2">
                    <template slot="title"><Icon type="ios-keypad"></Icon>添加数据</template>        
                    <router-link to="/addShop"><MenuItem name="2-1">添加商铺</MenuItem></router-link>
                    <router-link to="/addGood"><MenuItem name="2-2">添加商品</MenuItem></router-link>
                </Submenu>
                <Submenu name="3">
                    <template slot="title"><Icon type="ios-analytics"></Icon>图表</template>        
                    <router-link to="/userDist"><MenuItem name="3-1">用户分布</MenuItem></router-link>
                    <router-link to="/userDetail"><MenuItem name="3-2">用户明细</MenuItem></router-link>
                </Submenu>
                <Submenu name="4">
                    <template slot="title"><Icon type="md-settings" />设置</template>        
                    <MenuItem name="4-1">管理员设置</MenuItem>
                    <MenuItem name="4-2">用户明细1</MenuItem>
                </Submenu>
                <Submenu name="5">
                    <template slot="title"><Icon type="ios-folder" />说明</template>        
                    <MenuItem name="5-1">说明1</MenuItem>
                    <MenuItem name="5-2">说明2</MenuItem>
                </Submenu>
                <Button @click="outLogin"  type="dashed" ghost>退出</Button>
            </Menu>
        </Sider>
        <!-- 右边内容 -->
        <Layout :style="{marginLeft: '200px'}">
            <Content :style="{padding: '0 16px 16px'}">
                <Card>
                    <div style="height: 100vh">
                        <router-view/>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        outLogin() {
            this.$router.replace('/')
        }
    }
}
</script>

<style>

</style>