<template>
  <div class="flex flex-col w-screen absolute top-[0rem] md:top-[2rem] lg:top-[62rem]  xl:top-[40rem] z-10 py-8 gap-x-2 gap-y-1 items-center justify-center font-josefin">    <h1> Message Me!</h1>
    <form @submit.prevent="submit" class="flex flex-col w-[30rem]">
      <InputField label="name" v-model="userMessage.name"> </InputField>
      <InputField label="email" v-model="userMessage.email"> </InputField>
      <TextField label="message" v-model="userMessage.message" class="h-[10rem]" />
      <MyButton type="submit" text="Submit" hover="bg-red-700" color="bg-red-500"/>
    </form>
  </div>
</template>

<script setup>
const userMessage = reactive({
  name:'',
  email:null,
  message:''
})

function submit(){
  console.log(userMessage);
}
</script>

<style lang="scss" scoped>

</style>