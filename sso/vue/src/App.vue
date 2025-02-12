<template>
  <h1>vue3</h1>
</template>

<script setup lang='ts'>
//如果有token代表登录过了 如果没有跳转到 登录页面也就是SSO 那个页面，并且地址栏携带AppID
const token = new URLSearchParams(location.search).get('token')
if (!token) {
  fetch('http://localhost:3000/login?appId=Rs6s2aHi').then(res => {
    console.log('res:::----->', res)
    location.href = res.url
  })
}
</script>

<style></style>
