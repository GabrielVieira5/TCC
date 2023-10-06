const controls = document.querySelectorAll('.control');
let currentItem = 0;
const item = document.querySelectorAll('.item');
const maxitem = item.length;

controls.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left");

        //ajuste dos botões através de números
        if (isLeft) {
            currentItem -= 1;
        }
        else {
            currentItem += 1;
        }

        if (currentItem >= maxitem){
            currentItem = 0;
        }
        if (currentItem < 0){
            currentItem = maxitem - 1;
        }

        

        item.forEach(itens =>
            itens.classList.remove('exibindo'));

            item[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth"
            });

            item[currentItem].classList.add("exibindo");

            console.log('control', isLeft, currentItem);
    })
})
