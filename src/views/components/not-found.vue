<template>
    <div>
        <div class="notFound">
            <h1>404</h1>
            <h2 style="margin-bottom:20px;">糟糕，该页面不存在哦......</h2>
            <router-link to="/index"><Button type="success">返回首页>></Button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    }
}
</script>

<style>
.notFound{
    margin-top: 80px;
    text-align: center;
}
.notFound h1{
    letter-spacing: 50px;
    font-size: 230px;
}
</style>