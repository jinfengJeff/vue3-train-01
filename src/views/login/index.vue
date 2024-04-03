<template>
    <div class="login-container">
    <!-- <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">版本管理平台</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="loginClickHandle"
        />
        <!-- <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span> -->
      </el-form-item> -->

      <!-- <el-button class="login-btn" :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登 录</el-button> -->

      <el-button :loading="btnLoading" @click.native.prevent="loginClickHandle" type="primary">登 录</el-button>

    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

    // const validateUsername = (value: string, callback) => {
    //   if (!value) {
    //     callback(new Error('请输入用户名'))
    //     // callback(new Error('Please enter the correct user name'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validatePassword = (value, callback) => {
    //   if (value.length < 6) {
    //     callback(new Error('密码不能少于6位'))
    //     // callback(new Error('The password can not be less than 6 digits'))
    //   } else {
    //     callback()
    //   }
    // }

    let btnLoading = ref(false);
    let passwordType = "password";

    const loginForm = reactive({
        username: '',
        password: ''
    })

    const loginClickHandle = () => {
        btnLoading.value = true;
    }

    // const loginRules = reactive({
    //     username: [{ required: true, trigger: 'blur', validator: validateUsername }],
    //     password: [{ required: true, trigger: 'blur', validator: validatePassword }]
    // })

    



</script>

<style lang="scss" scoped>
    $bg:#2d3a4b;
    $dark_gray:#889aa4;
    $light_gray:#eee;

    .login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .login-form {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }

    .title-container {
        position: relative;

        .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
        letter-spacing: 4px;
        }
    }

    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }

    .login-btn.el-button {
        // width: 128px !important;
        margin: 0 auto;
        padding: 12px;
    }
    }
</style>
