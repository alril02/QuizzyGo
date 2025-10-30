<template>
  <q-page class="flex flex-center bg-light-bg">
    <div class="app-screen">
      <!-- Header -->
      <div class="login-header">
        <!-- Status Bar -->
        <div class="status-bar">
          <div class="time-display">9:41</div>
          <div class="status-icons">
            <div class="signal">
              <div class="signal-bar" v-for="i in 4" :key="i"></div>
            </div>
            <div class="battery">
              <div class="battery-level"></div>
            </div>
          </div>
        </div>

        <div class="leaf-design"></div>
        <div class="header-content">
          <p class="greeting-hello">Hello!</p>
          <p class="greeting-welcome">Welcome to Plantland</p>
        </div>
      </div>

      <!-- Form -->
      <div class="login-form-container">
        <h1 class="login-title">Login</h1>
        <q-form @submit="login">
          <q-input v-model="email" type="email" filled label="Email" class="q-mb-md" />
          <q-input v-model="password" type="password" filled label="Password" class="q-mb-sm" />
          <div class="text-right q-mb-md">
            <q-btn flat label="Forgot Password?" color="grey" no-caps />
          </div>
          <q-btn type="submit" label="Login" class="login-button full-width" no-caps />
        </q-form>

        <div class="separator">or login with</div>

        <div class="social-login">
          <q-btn flat round class="social-btn"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" /></q-btn>
          <q-btn flat round class="social-btn"><img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" /></q-btn>
          <q-btn flat round class="social-btn"><img src="https://cdn-icons-png.flaticon.com/512/179/179309.png" /></q-btn>
        </div>

        <div class="login-footer">
          Don't have an account?
          <q-btn flat label="Sign Up" color="primary" no-caps />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const login = () => {
  console.log('Login:', email.value, password.value)
}
</script>

<style scoped>
:root {
  --primary-color: #1a6f69;
  --light-bg: #f0f7f7;
  --input-bg: #f7f7f7;
  --white: #fff;
  --link-color: #999;
  --border-color: #ddd;
}

.bg-light-bg { background-color: var(--light-bg); }

.app-screen {
  width: 375px;
  background: var(--white);
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.login-header {
  background: linear-gradient(160deg, #1a6f69, #268a82);
  color: var(--white);
  padding: 40px 30px 100px;
  position: relative;
}

.status-bar {
  position: absolute;
  top: 10px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
}

.signal { display: flex; gap: 2px; align-items: flex-end; }
.signal-bar { width: 3px; background: #fff; border-radius: 1px; }
.signal-bar:nth-child(1) { height: 4px; opacity: .5; }
.signal-bar:nth-child(2) { height: 6px; opacity: .7; }
.signal-bar:nth-child(3) { height: 8px; opacity: .9; }
.signal-bar:nth-child(4) { height: 10px; }

.battery {
  position: relative;
  width: 22px;
  height: 10px;
  border: 1.5px solid #fff;
  border-radius: 2px;
}
.battery::after {
  content: '';
  position: absolute;
  right: -3px;
  top: 3px;
  width: 2px;
  height: 4px;
  background: #fff;
}
.battery-level {
  position: absolute;
  left: 2px;
  top: 2px;
  bottom: 2px;
  width: 70%;
  background: #fff;
  border-radius: 1px;
}

.greeting-hello { font-size: 32px; font-weight: 800; margin: 20px 0 0; }
.greeting-welcome { font-size: 16px; margin-top: 4px; }

.login-form-container { padding: 20px 30px; margin-top: -30px; }
.login-title { font-size: 28px; font-weight: bold; margin-bottom: 25px; }

.login-button { background: linear-gradient(90deg, #1a6f69, #2fa899); }
.login-button:hover { background: linear-gradient(90deg, #2fa899, #1a6f69); }

.separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  font-size: 12px;
  color: var(--link-color);
}
.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--border-color);
}
.separator::before { margin-right: .5em; }
.separator::after { margin-left: .5em; }

.social-login { display: flex; justify-content: center; gap: 15px; margin: 10px 0 30px; }
.social-btn img { width: 34px; height: 34px; border-radius: 9px; }

.login-footer { font-size: 14px; color: var(--link-color); text-align: center; padding-bottom: 30px; }
</style>
