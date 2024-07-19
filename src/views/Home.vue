<template>
  <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
    <el-menu-item v-for="route in accessibleRoutes" :key="route.path" :index="route.path">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/modules/user';

const router = useRouter();
const userStore = useUserStore();

const accessibleRoutes = computed(() => {
    const userMenuKeys = userStore.menuKeys;
    return router.getRoutes().filter(route => userMenuKeys.includes(route.meta?.key as string));
});
</script>
