const about =[
    " My name is Lakshay Khattar, and I'm a dedicated Full Stack Developer. I'm passionate about crafting end-to-end solutions that merge innovation with practicality.",
    " I hold a Bachelor's degree in Computer Science, which has provided me with a solid academic foundation and a deep understanding of programming principles.",
    " I hold a Bachelor's degree in Computer Science, which has provided me with a solid academic foundation and a deep understanding of programming principles.",
    " I thrive on tackling complex challenges and finding elegant solutions. My problem-solving mindset, combined with my technical skills, enables me to create applications that deliver seamless user experiences."
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('words');
const btn = document.getElementById('btn');
 let startTime ,endTime;

const playGame = () => {
let random = Math.floor(Math.random()*about.length)
msg.innerText = about[random];
let date = new Date();
startTime = date.getTime();
btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);

    let totalStr = typeWords.value;
    let wordCounts = wordcounter(totalStr);

    let speed = Math.round((wordCounts / totalTime) *60);
    let fmsg ="You have typed at "+speed+" words per minute";
    msg.innerText = fmsg;
    
}

const wordcounter = (str)=>{
    let res = str.split(" ").length;
    return res;
}


 btn.addEventListener('click' , function(){
    if (this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }
    else if(this.innerText =="Done"){
        typeWords.disabled = true ;
        btn.innerText ="Start";
        endPlay();
    }
 })