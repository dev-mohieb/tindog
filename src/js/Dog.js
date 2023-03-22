import {getNewDog, heartBtn, crossBtn, render} from '../index.js'

class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    handleBtnClick(badge) {
        heartBtn.disabled = true;
        crossBtn.disabled = true;
        getNewDog()
        document.querySelector(`${badge}`).classList.toggle('opacity-0')
        setTimeout(() => {
            document.querySelector(`${badge}`).classList.toggle('opacity-0')
            render()
            heartBtn.disabled = false;
            crossBtn.disabled = false;
        }, 800);
    }
    getDogHtml() {
        const {name, avatar, age, bio} = this
        return `
                <figure class="flex flex-col justify-end relative h-[600px] rounded-2xl opacity-0 transition-opacity overflow-hidden"
                style="background-image: url('/${avatar}');
                       background-size: cover;
                       background-position: center;"
                       >
                    <section
                    class="absolute w-[234px] top-14 left-0 mt-4 -rotate-[30deg]">
                        <img
                        id="like-badge"
                        src="/images/badge-like.png" 
                        class="absolute left-0 opacity-0 transition-opacity"
                        alt="">
                        <img
                        id="reject-badge"
                        src="/images/badge-nope.png" 
                        class="absolute left-0 opacity-0 transition-opacity"
                        alt="">
                    </section>
                    <section
                    class="font-poppins p-3 bg-gradient-to-t from-black/75 to-transparent">
                        <h1
                        class="font-semibold text-3xl text-[#f8f8f8]">${name}, ${age}</h1>
                        <figcaption
                        class="font-normal text-2xl text-[#b7b7b7]">${bio}</figcaption>
                    </section>
                </figure>
        `
    }
}

export {Dog}
