<template>
  <q-page class="flex flex-center bg-light-bg">
    <div class="app-screen">
      <!-- Header -->
      <div class="top-header">
        <div class="status-bar">
          <span>9:41</span>
          <div class="icons">
            <div class="signal">
              <span></span><span></span><span></span><span></span>
            </div>
            <div class="wifi"><span></span></div>
            <div class="battery"></div>
          </div>
        </div>
        <div class="logo-shape"></div>
      </div>

      <!-- Form -->
      <div class="form-container">
        <q-btn flat label="← Back to login" color="primary" no-caps to="/login" class="q-mb-sm" />
        <h2>Sign Up</h2>

        <q-form @submit="onSubmit">
          <div class="input-group">
            <q-input v-model="email" type="email" filled placeholder="Email" />
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" class="input-icon" />
          </div>

          <div class="input-group">
            <q-input v-model="password" type="password" filled placeholder="Password" />
            <img src="https://cdn-icons-png.flaticon.com/512/2889/2889676.png" class="input-icon" />
          </div>

          <div class="input-group">
            <q-input v-model="confirm" type="password" filled placeholder="Confirm Password" />
            <img src="https://cdn-icons-png.flaticon.com/512/2889/2889676.png" class="input-icon" />
          </div>

          <div class="input-group">
            <q-input v-model="phone" type="tel" filled placeholder="Phone" />
            <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" class="input-icon" />
          </div>

          <q-btn type="submit" label="Sign Up" class="btn" no-caps />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const confirm = ref('')
const phone = ref('')

const onSubmit = () => {
  console.log('Sign Up:', email.value, password.value, confirm.value, phone.value)
}
</script>

<style scoped>
:root {
  --bg: #cce8e7;
  --primary: #1a8c8a;
  --white: #fff;
}
.bg-light-bg { background: var(--bg); }

.app-screen {
  width: 350px; height: 700px;
  background: var(--white);
  border-radius: 35px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  position: relative;
}

.top-header {
  width: 100%; height: 130px;
  background: var(--primary);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative; overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.2);
}

.status-bar {
  position: absolute; top: 10px; left: 0; width: 100%; padding: 0 15px;
  display: flex; justify-content: space-between; align-items: center;
  color: #fff; font-size: 13px; font-weight: 500;
}

.signal { display: flex; align-items: flex-end; gap: 2px; }
.signal span { width: 2px; background: #fff; border-radius: 1px; }
.signal span:nth-child(1) { height: 3px; }
.signal span:nth-child(2) { height: 5px; }
.signal span:nth-child(3) { height: 7px; }
.signal span:nth-child(4) { height: 9px; }

.wifi { position: relative; width: 18px; height: 12px; }
.wifi::before, .wifi::after, .wifi span {
  content: ''; position: absolute; border: 2px solid #fff; border-radius: 50%;
  left: 50%; transform: translateX(-50%);
  border-top-color: transparent; border-left-color: transparent; border-right-color: transparent;
}
.wifi::before { width: 14px; height: 14px; top: 0; }
.wifi::after { width: 10px; height: 10px; top: 3px; }
.wifi span { width: 4px; height: 4px; top: 8px; background: #fff; border: none; }

.battery { position: relative; width: 20px; height: 10px; border: 2px solid #fff; border-radius: 2px; }
.battery::before {
  content: ''; position: absolute; top: 3px; right: -4px;
  width: 2px; height: 4px; background: #fff;
}
.battery::after {
  content: ''; position: absolute; top: 2px; left: 2px;
  width: 12px; height: 4px; background: #fff;
}

.logo-shape {
  position: absolute; top: -15px; left: -10px;
  width: 120px; height: 120px;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), rgba(255,255,255,0.1));
  border-radius: 60% 60% 0 60%; transform: rotate(-25deg);
}

.form-container {
  background: var(--white);
  margin-top: -40px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 40px 25px;
}

h2 { color: var(--primary); font-size: 22px; font-weight: 700; margin-bottom: 15px; }

.input-group { margin-bottom: 15px; position: relative; }
.input-group .q-input { background: #f3f9f8; border-radius: 12px; }
.input-group .q-input:focus-within { background: #e9fdfb; box-shadow: 0 0 0 2px #1a8c8a50; }

.input-icon {
  position: absolute; top: 12px; left: 12px; width: 18px; height: 18px;
  opacity: 0.6; filter: grayscale(100%);
}
.input-group:focus-within .input-icon {
  transform: scale(1.2);
  filter: grayscale(0%) drop-shadow(0 0 5px #1a8c8a);
  opacity: 1;
}

.btn {
  width: 100%; padding: 12px;
  background: var(--primary);
  color: white; border-radius: 25px;
  font-size: 15px; font-weight: bold;
  margin-top: 10px;
}
</style>
