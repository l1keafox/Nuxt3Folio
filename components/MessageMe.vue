<template>
  <div id="messageMe" class="flex flex-col text-3xl w-full absolute  z-10 py-8 gap-x-2 gap-y-1 items-center justify-center font-josefin p-2">
    <Transition v-show="showAnime" >
    <div>

    <h1> Message Me!</h1>
    <form ref="form" id="form" @submit.prevent="submit" class="flex flex-col w-full md:w-[40rem]  text-xl">
      <InputField label="name" id="from_name" name="from_name" v-model="name" :error="errors.name"> </InputField>
      <InputField label="email" id="reply_to" name="reply_to" :error="errors.email" :modelValue="email" @change="handleChange"> </InputField>
      <TextField label="message" id="message" name="message" v-model="message" :error="errors.message" class="h-[10rem]" />
      <MyButton type="submit" text="Submit" hover="bg-red-700" color="bg-red-500"/>
    </form>
  </div>
</Transition>
  </div>
</template>

<script setup>

import emailjs from "@emailjs/browser";
import { useField, useForm } from 'vee-validate'
import { object, string } from 'yup'

const validationSchema = object({
    email: string().email("Field should contain a valid e-mail").max(255).required("E-mail is required"),
    name: string(),
    message: string()
})

const {handleSubmit, errors, setFieldValue} = useForm({
    validationSchema,
    initialValues:{
      email:null,
      name:null,
      message:null
    }
})

const { value: email } = useField('email')
const { value: name } = useField('name')
const { value: message } = useField('message')

const handleChange = (event) =>{
  setFieldValue('email',event.target.value)
}
const submit = handleSubmit(values => {
      let result = emailjs.sendForm(
      "service_3l5kfbj",
      "template_7630s4a",
      document.getElementById('form'),
      "b3A_HBPJ0CCCA_D0d"
    )
    alert("Thank you for sending me a message, I will get back too you asap");
    email.value = ''
    name.value = ''
    message.value = ''
})


const showAnime = ref(false)
onMounted(()=>{
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(!showAnime.value) showAnime.value = entry.isIntersecting;
      });
    });
    const hide = document.getElementById('messageMe');
    observer.observe(hide);
})

</script>

<style  scoped>
.v-enter-active,
.v-leave-active {
  transition: all 1s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  bottom: 0;
  transform: translateY(100%);
}
</style>