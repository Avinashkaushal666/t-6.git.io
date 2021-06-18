const $btn = document.querySelectorAll("button")

$btn.forEach(node => {
        node.addEventListener("mousedown", function(e){
                
                const value = node.innerText.trim();
                $result = document.querySelector(".result");
                let resultText = $result.innerText.trim();

                if(value.toLowerCase() == 'ce'){
                        $result.innerText = resultText.slice(0, -1);
                        return true
                }

                


                if(resultText == '0' || resultText == 'undefined' || resultText == 'infinite'){
                        $result.innerText = ''
                }

                
                if(value == '='){
                        let solution = eval(resultText)
                        $result.innerText = solution
                        return true
                }


                if(value.toLowerCase() == 'c'){
                        $result.innerText = ''
                        return true
                }

                

                $result.append(value)
        })
        
});

const $name = document.querySelector(".signature span");
let letters = $name.innerText.split('');
let html = ''
letters.forEach((letter) => {
        let classes = '';
        if(letter !== ' '){
                classes = 'letter js-letter'
        }
        html = html + `<span class='${classes}'>${letter}</span>`
})
$name.innerHTML = html;

const jsLetter = document.querySelectorAll('.js-letter')
jsLetter.forEach(node => {
    node.addEventListener("mouseover", function(e) {
        this.classList.add("active");
    })
    node.addEventListener("mouseout", function(e) {
        this.classList.remove("active");
    })
})



class Modal{
        constructor(){
                this.jsCalc = document.querySelector(".js-calc")
        }
        displayInfo(){
                this.jsCalc.style.display = "inherit";

        }
        close(){
                this.jsCalc.style.display = "none";
        }
}


const modal = new Modal();
jsClose = document.querySelector(".close")
jsModal = document.querySelector(".js-modal")
jsClose.addEventListener("click", function(e){
        modal.close()
})

jsModal.addEventListener("click", function(e){
        modal.displayInfo()
})


