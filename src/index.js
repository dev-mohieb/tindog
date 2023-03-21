import dogsData from "/src/js/data.js";
import { Dog } from "/src/js/Dog.js";

const heartBtn = document.querySelector("#heart-btn");
const crossBtn = document.querySelector("#cross-btn");
const postEl = document.querySelector("#post");
const main = document.querySelector("main");

let dogIndex = 0;
let dog = new Dog(dogsData[dogIndex]);
const likedDogs = [];

function getNewDog() {
  setTimeout(() => {
    dogIndex === dogsData.length - 1 ? handleNoMoreDogs() : dogIndex++;
    dog = new Dog(dogsData[dogIndex]);
  }, 1000);
}

function handleNoMoreDogs() {
  main.innerHTML = `
        <section class="text-center font-poppins opacity-0 transition-opacity">
            <h1 class="text-3xl font-poppins font-semibold">
                No more dogs :(
            </h1>
            <section class="px-2">
                <h2 class="text-2xl"
                style="margin-bottom:3rem;
                       margin-top:.5rem;">
                    Here are the ones you liked!
                </h2>
                <section class="flex flex-wrap justify-center items-center gap-4 flex-1">
                    ${getLikedDogsHtml()}
                </section>
            </section>
        </section>
        `;
  setTimeout(() => {
    document.querySelector("main > section").classList.toggle("opacity-0");
  }, 100);
}

function getLikedDogsHtml() {
  return likedDogs
    .map((dog) => {
      return `
        <section class="text-xl w-[30%]">
            <img
            class="rounded-md aspect-[10/14] object-cover" 
            src="/src/${dog.avatar}" alt="">
            <h3>${dog.name}</h3>
        </section>
        `;
    })
    .join("");
}

heartBtn.addEventListener("click", () => {
  likedDogs.push(dog);
  dog.handleLikeClick();
});
crossBtn.addEventListener("click", () => {
  dog.handleRejectClick();
});

function render() {
  postEl.innerHTML = dog.getDogHtml();
  setTimeout(() => {
    document.querySelector("figure").classList.toggle("opacity-0");
  }, 100);
}
render();

export { getNewDog, heartBtn, crossBtn, render };
