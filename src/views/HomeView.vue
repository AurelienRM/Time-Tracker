<template>
  <TaskList
    :tasks="tasks || []"
    :areTasksLoading="areTasksLoading"
    v-on="{
      restart: sendRestart,
      delete: sendDelete,
    }"
  />
</template>

<script>
import TaskList from "../components/TaskList.vue";

export default {
  components: {
    TaskList,
  },
  emits: ["restart", "delete"],
  props: {
    tasks: {
      type: Array,
      default() {
        return [];
      },
    },
    areTasksLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    sendRestart(data) {
      this.$emit("restart", data);
    },
    sendDelete(data) {
      this.$emit("delete", data);
    },
  },
};
</script>
