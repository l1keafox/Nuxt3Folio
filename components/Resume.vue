<template>
    <div  class="flex flex-col w-screen absolute top-[260rem] md:top-[250rem] py-8 gap-x-2 gap-y-1 text-center items-center justify-center font-mono text-slate-300">
        <div className="flex flex-col items-center">
            <a className="items-center justify-center p-3" href='./Raymond_Lewis_Resume.pdf' target="_blank">
              <MyButton text="Download Pdf" color="bg-red-500" hover="bg-red-700"/>
              <img src="~/assets/blah.png" class="scale-y-75 scale-x-95 md:scale-100" />

            </a>
          </div>

    </div>

</template>

<script>
</script>

<style scoped>
img{
    height: 85vh;
}
</style>