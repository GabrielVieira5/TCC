const controls = document.querySelectorAll('.control');
let currentItem = 0;
const item = document.querySelectorAll('.conteudo-integrantes');
const maxitem = item.length;

controls.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left");

        //ajuste dos botões através de números
        if (isLeft){
            currentItem -= 1;
        }
        else {
            currentItem += 1;
        }
        //ajuste do número máximo dos botões: 
        if (currentItem => maxitem){
            currentItem = 0;
        }
        if (currentItem < 0){
            currentItem = maxitem -1;
        }

        item.forEach(itens =>
            itens.classList.remove('item-indicado'));

            item[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth"
            });

            item[currentItem].classList.add("item-indicado");
    })
})
