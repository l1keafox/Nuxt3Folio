<template>
  <div id="messageMe" class="flex flex-col text-3xl w-full absolute  z-10 py-8 gap-x-2 gap-y-1 items-center justify-center font-josefin p-2">
    <h1> Message Me!</h1>
    <form @submit.prevent="submit" class="flex flex-col w-full md:w-[40rem]  text-xl">
      <InputField label="name" v-model="name" :error="errors.name"> </InputField>
      <InputField label="email" :error="errors.email" :modelValue="email" @change="handleChange"> </InputField>
      <TextField label="message" v-model="message" :error="errors.message" class="h-[10rem]" />
      <MyButton type="submit" text="Submit" hover="bg-red-700" color="bg-red-500"/>
    </form>
  </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'
import { object, string } from 'yup'

const validationSchema = object({
    email: string().email("Field should contain a valid e-mail").max(255).required("E-mail is required"),
    // email: value => {
    //     if (!value) return 'This field is required'

    //     const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //     if (!regex.test(String(value).toLowerCase())) {
    //       return 'Please enter a valid email address'
    //     }

    //     return true
    //   },
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
      console.log('submit', values)
      console.log(errors.name);
      console.log(errors.email);
      console.log(errors.message);
})

</script>

<style lang="scss" scoped>

</style>