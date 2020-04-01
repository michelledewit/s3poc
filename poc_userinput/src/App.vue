<template>
  <v-app>
    <userInput />
  </v-app>
</template>

<script>
import userInput from './components/userInput';

export default {
  name: 'app',
  components: {
    userInput,
  },

  data: () => ({
    //
  }),
};
</script>
