<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const navigationItems = ref([
  {
    title: "Kalender",
    url: "/app/calendar",
    icon: "fa-calendar-alt",
    isLogout: false,
  },
  { title: "Profil", url: "/app/profile", icon: "fa-user", isLogout: false },
  {
    title: "Login",
    url: "/auth/login",
    icon: "fa-sign-in-alt",
    isLogin: true,
  },
]);
</script>
<template>
  <div class="navbar bg-base-100 shadow-lg px-4 rounded-xl mb-12">
    <div class="navbar-start">
      <NuxtLink
        to="/"
        class="btn btn-ghost normal-case text-xl font-bold text-primary"
      >
        Startseite
      </NuxtLink>
    </div>
    <div class="navbar-center flex gap-2">
      <NuxtLink
        v-for="item in navigationItems.filter((item) => !item.isLogout && !item.isLogin)"
        :key="item.title"
        :to="item.url"
        :class="[
          'btn btn-ghost gap-2 hover:bg-primary/10',
          route.path === item.url ? 'btn-active bg-primary/20' : '',
        ]"
      >
        <i :class="['fas', item.icon]"></i>
        <span>{{ item.title }}</span>
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <NuxtLink
        v-for="item in navigationItems.filter((item) => item.isLogin)"
        :key="item.title"
        :to="item.url"
        class="btn btn-outline btn-primary gap-2 flex items-center justify-center"
      >
        <span>{{ item.title }}</span>
      </NuxtLink>
      <NuxtLink
        v-for="item in navigationItems.filter((item) => item.isLogout)"
        :key="item.title"
        :to="item.url"
        class="btn btn-ghost gap-2 text-error hover:bg-error/10"
      >
        <i :class="['fas', item.icon]"></i>
        <span>{{ item.title }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
