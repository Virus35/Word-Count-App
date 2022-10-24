let words = document.querySelector(".words");
let reset = document.querySelector(".right");
let left = document.querySelector(".left");
let textarea = document.querySelector("textarea");

let save = "";
left.addEventListener("click", (e) => {
  const array = textarea.value;
  const noOfWords = array.split(" ");

  console.log(array, noOfWords);
  let count = 0;
  for (let i = 0; i < noOfWords.length; i++) {
    if (noOfWords[i] == "") {
      count++;
    }
  }
  words.innerHTML = noOfWords.length - count;
});

reset.addEventListener("click", (e) => {
  textarea.value = "";
  words.innerHTML = 0;
});
