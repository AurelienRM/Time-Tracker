<template>
  <el-button @click="sendCopyTaskname" size="default" circle>
    <el-icon>
      <DocumentCopy />
    </el-icon>
  </el-button>
  <el-button @click="sendRestart" size="default" type="primary" circle>
    <el-icon>
      <VideoPlay />
    </el-icon>
  </el-button>
  <el-button @click="sendDelete" size="default" type="danger" circle>
    <el-icon>
      <Delete />
    </el-icon>
  </el-button>
</template>

<script>
import { DocumentCopy, VideoPlay, Delete } from "@element-plus/icons-vue";
export default {
  components: {
    DocumentCopy,
    VideoPlay,
    Delete,
  },
  props: {
    taskID: {
      type: String,
      required: true,
    },
  },
  emits: ["restart", "delete", "copyTaskname"],
  methods: {
    sendRestart() {
      this.$emit("restart", this.taskID);
    },
    sendDelete() {
      this.$emit("delete", this.taskID);
    },
    sendCopyTaskname() {
      this.$emit("copyTaskname");
    },
  },
};
</script>

<style lang="scss" scoped></style>
