<template>
<div id="Kviz"></div>
</template>

<script>
var quiz = {
  // (A) PROPERTIES 
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
  data: [
  {
    q : "Koliko titula svjetskog šampiona ima vozač Lewis Hamilton?",
    o : [
      "8",
      "7",
      "6",
      "4"
    ],
    a : 1
  },
  {
    q : "Pulska Arena je započeta sa gradnjom kojeg stoljeća?",
    o : [
      "6.",
      "4.",
      "5.",
      "1."
    ],
    a : 3
  },
  {
    q : "Koja je najveća životinja na planeti?",
    o : [
      "Kitovski morski pas",
      "Afrički slon",
      "Antarktični plavi kit",
      "Morski krokodil"
    ],
    a : 2
  },
  {
    q : "Koji je sedmi planet našeg sunčevog sustava?",
    o : [
      "Uran",
      "Zemlja",
      "Pluto",
      "Mars"
    ],
    a : 0
  },
  
  ],

  // (A2) HTML ELEMENTS
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper

  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score

  // (B) INIT QUIZ HTML
  init: function(){
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("Kviz");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) GO!
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: function(){
    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", quiz.select);
      quiz.hAns.appendChild(label);
    }
  },
  
  // (D) OPTION SELECTED
  select: function(){
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let tocno = this.dataset.idx == quiz.data[quiz.now].a;
    if (tocno) { 
      quiz.score++; 
      this.classList.add("tocno");
    } else {
      this.classList.add("netocno");
    }
  
    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(function(){
      if (quiz.now < quiz.data.length) { quiz.draw(); } 
      else {
        quiz.hQn.innerHTML = `Odgovorili ste točno na ${quiz.score} od ${quiz.data.length} pitanja.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  }
};
window.addEventListener("load", quiz.init);
</script>

<style>
 /* (A) WRAPPER */
#Kviz {
  max-width: 600px;
  margin: 0 auto;
}

/* (B) QUESTION */
#quizQn {
  padding: 20px;
  background: #4c93ba;
  color: #fff;
  font-size: 24px;
  border-radius: 10px;
}

/* (C) ANSWERS */
#quizAns {
  margin: 10px 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
}
#quizAns input[type=radio] { display: none; }
#quizAns label {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
}
#quizAns label.tocno {
  background: #d8ffc4;
}
#quizAns label.netocno {
  background: #ffe8e8;
}

/* (D) BODY... DOES NOT QUITE MATTER */

</style>