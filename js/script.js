const yodaMessage = document.querySelector(".yoda-says");
const btn = document.getElementById("button");
const newQuest = document.getElementById("question").value;


const askQuestion = function(){
    yodaMessage.innerHTML = "";
    const inputVal = document.getElementById("question").value;
    console.log(inputVal);
    getYodaSpeak(inputVal);
};


const getYodaSpeak = async function(inputVal){
    const request = await fetch(`https://api.funtranslations.com/translate/yoda.json?text=${inputVal}`);
    const data = await request.json();
    console.log(data);
    displayAnswer(data);
}

const displayAnswer = function(data){
    yodaMessage.innerHTML = data.contents.translated;
    newQuest.innerHTML = "";
}


btn.addEventListener('click', askQuestion);


getYodaSpeak();