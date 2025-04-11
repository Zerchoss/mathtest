let questions = document.querySelector('.question')
let answers = document.querySelectorAll('.answer')
let count = document.querySelector('.counter')
let time1 = document.querySelector(".time1")
function randint(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

count.innerHTML = "Бали:0"


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {  // Цикл проходиться по всіх елементах з кінця до початку
    let j = Math.floor(Math.random() * (i + 1));  // Вибираємо індекс рандомного елемента
    [array[i], array[j]] = [array[j], array[i]] // Міняємо місцями з поточним елементом.
  } 
}

my_array = [1, 2, 3, 4, 5] // Початковий масив
shuffle(my_array)  // Перемішуємо масив

let sym1 = ["+","-","*","/",]

function randsym(){
    return sym1[randint(0,3)]

}

class Question{
   constructor(){
      this.a1 = randint(1 , 40)
      this.a2 = randint(1 , 40)
      this.sym = randsym()
      this.question1 = `${this.a1} ${this.sym} ${this.a2}` 
      if(this.sym == "+"){
        this.correct = this.a1 + this.a2
      }
      if(this.sym == "*"){
        this.correct = this.a1 * this.a2
      }
      if(this.sym == "-"){
        this.correct = this.a1 - this.a2
      }
      if(this.sym == "/"){
        this.correct = Math.round(this.a1 / this.a2)

      }
      this.answer = [
        this.correct,
        randint(this.correct - 15, this.correct + 1),
        randint(this.correct - 15, this.correct + 2),
        randint(this.correct - 6, this.correct + 15),
        randint(this.correct - 1, this.correct + 5),
      ]
    shuffle(this.answer)

   }
   display(){
        questions.innerHTML = this.question1
        for(let i = 0; i < answers.length; i++){
            answers[i].innerHTML = this.answer[i]
            {
             
  
              
            }
        }
   }

   
}



let que = new Question();
que.display()
let counter = 0

for (let i = 0; i < answers.length; i += 1) {
    answers[i].addEventListener("click", function () {
        let que = new (Question);
        que.display();

        if (answers[i].innerHTML == que.correct) {
            answers[i].style.backgroundColor = "#09ff00";
            counter ++
            count.innerHTML = "Бали:" + counter;
            anime({
                targets: answers[i],
                duration: 3000,
                easing: "linear",
                backgroundColor: "#000000",
            });
        } else {
            answers[i].style.backgroundColor = "#ff0000";
            anime({
                targets: answers[i],
                duration: 3000,
                easing: "linear",
                backgroundColor: "#000000",
            });
        }
    });
}






let clear = document.querySelector(".clear");
let end = document.querySelector(".end");
let ends = document.querySelector(".end1");
let end2 = document.querySelector(".end2");

let timerid;
let timer = 60
function time() {
  timerid = setTimeout(function () {
    time1.innerHTML = "Час: " + timer;
    timer -= 1;
    if (timer >= 0) {
      time(); 
    } else {
      clearTimeout(timerid);
      clear.style.display = "none";
      end.style.display = "flex";
      end2.style.display = "flex";
      end2.innerHTML = "Ваші бали:" + counter;
      ends.style.display = "flex";
    }
  }, 1000);
}


ends.addEventListener('click', function () {
  let que = new Question();
  que.display();
  counter = 0;
  count.innerHTML = "Бали:" + counter;
  clear.style.display = "block";
  end.style.display = "none";
  end2.style.display = "none";
  ends.style.display = "none";
  timer = 60;
  clearTimeout(timerid);
  time(); 
});

time();