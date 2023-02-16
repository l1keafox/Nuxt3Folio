<template>
  
  <div id="aboutMe" class="flex flex-col w-screen absolute py-8 gap-x-2 gap-y-1 text-center items-center justify-center font-josefin">
    <Transition v-show="showAnime" >
      <div>
        <h1 className="text-4xl font-bold text-center dark:text-slate-900 "> About Me </h1>
        <div className="flex w-4/5 mx-auto flex-col lg:flex-row">
          <div class="lg:w-full flex justify-center items-center lg:-left-[13px] lg:top-[4rem]">
            <img className="w-80 h-80  relative rounded-full " src='@/assets/avatar.jpg' />
          </div>
          <div className="text-base p-2 font-serif dark:text-slate-700">
            <p>
              My name is Ray and I am from Boulder, Colorado. I am a
              South Korean adoptee who was adopted with my older brother and
              sister when I was five years old.
            </p>
            <br />
            <p>
              When I was seven, I would watch my mom work on her spreadsheets on
              her macintosh classic, learning all the button keys and how to
              navigate. When I was in third grade, I taught a fourth grade
              teacher and her class room how to use there new macintosh plus.
              She was very impressed that a seven year old who could barely
              speak english was teaching her how to use the computer.
            </p>
            <br />
            <p>
              My first programming book was when I was fourteen and on a
              roadtrip. Without a computer, I read through a C textbook. I always
              thought I would become a programmer, but life had different plans
              for me other than college. I would continue to program for fun,
              learning actionScript and later learning JavaScript through a game
              called Screeps.
            </p>
            <br />
            <p>
              In 2014 I decided that I wanted to be involved in cyber security.
              I got an job at Webroot as a tech support, moved on to advanced
              malware removal and finally got into threat research. I became a
              senior in my team due to my creative approach that changed how the
              team worked.
            </p>
            <br />
            <p>
              After the pandemic, I decided that I needed to fulfill my team of being a developer, and decided I needed a formal education. 
              After looking around, I decided on a three month full stack bootcamp from University of Denver. I had some javascript skills from before, but this boot camp taught me how
              to apply my knowledge in creating an web application. 
            </p>
            <br/>
            <p>
              After the bootcamp I continue to learn and grow, trying to learn as much technology as possible, because learning how to learn is what is the most important skill I can develop.
            </p>
            <br />
          </div>
        </div>     
      </div>   
  </Transition>
</div>
</template>

<script setup>
const showAnime = ref(false)
onMounted(()=>{
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(!showAnime.value) showAnime.value = entry.isIntersecting;
      });
    });
    const hide = document.getElementById('aboutMe');
    observer.observe(hide);
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}

.v-enter-from,
.v-leave-to {
  filter:blur(3px);
  opacity: 0;
  bottom: 0;
  transform: translateY(100%);
}

p{
    text-align: justify;
}
</style> 