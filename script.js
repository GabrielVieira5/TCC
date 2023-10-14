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
            itens.classList.remove('principal-item'));

            item[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth"
            });

            item[currentItem].classList.add("principal-item");

            console.log('control', isLeft, currentItem);
    })
})


/*
const controle = document.querySelectorAll('.seta');
let itemcalculo = 0;
const botao = document.querySelectorAll('.sec');
const maximo = botao.length;

controle.forEach((controles) => {
    controles.addEventListener("click", () => {
        const isdown = controles.classList.contains("arrow-down");

        if (isdown){
            itemcalculo -= 1;
        }
        else {
            itemcalculo += 1;
        }

        if(itemcalculo > maximo){
            itemcalculo = 0;
        }
        if(itemcalculo < 0) {
        itemcalculo = maximo - 1;
        }

        botao.forEach(sect => 
            sect.classList.remove('.sec-tela'));

            botao[itemcalculo].scrollIntoView({
                inline: "start",
                behavior: "smooth"
            });
            botao[itemcalculo].classList.add(".sec-tela");

            console.log('controle', isdown, itemcalculo);
    })
} )
*/

