const titles = gsap.utils.toArray(".animation-container");
const tl = gsap.timeline();
titles.forEach((title) => {
    
})
const splitTitle = title.split("");
title.innerHTML = "";
splitTitle.forEach((letter, index) => {
  setTimeout(() => {
    title.innerHTML += letter;
  }, index * 100);
}) 