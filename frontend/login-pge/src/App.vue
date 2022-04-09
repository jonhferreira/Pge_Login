<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div></div>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    validate() {
      api
        .get("users/verifyToken")
        .then((response) => {
          console.log(response);
          if (!response.data.checktoken) {
            this.$router.push("/login");
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>
