export const useObserver = (ele,show)=>{
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      show.value = entry.isIntersecting;
    });
  });
  observer.observe(ele);
}