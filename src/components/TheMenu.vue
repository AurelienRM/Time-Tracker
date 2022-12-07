<template>
  <el-menu
    :router="true"
    :default-active="
      ($route.matched[0] && $route.matched[0].path == '/') ||
      $route.path == '/home'
        ? '/'
        : $route.path
    "
  >
    <h3>Vue Tracker</h3>
    <el-menu-item index="/">
      <span>
        <el-icon>
          <Timer />
        </el-icon>
        Tracker
      </span>
    </el-menu-item>
    <el-menu-item index="/settings">
      <span>
        <el-icon>
          <Setting />
        </el-icon>
        Paramètres
      </span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { Timer, Setting } from "@element-plus/icons-vue";
export default {
  components: {
    Timer,
    Setting,
  },
};
</script>

<style scoped>
.el-menu {
  border-right: none !important;
  text-align: left;
}
h3 {
  text-align: center;
}
</style>
