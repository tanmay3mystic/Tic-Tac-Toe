var turn = document.getElementById('turn');
var boxes  = document.querySelectorAll("#main div");
var toggler = 0;
var clicks=0;
const selectWinner = (b1,b2,b3) => {
    b1.classList.add("win");
    b2.classList.add('win');
    b3.classList.add('win');
    
    b1.innerText=='o'?setTimeout(()=>alert("Congratulations! Player2 wins") , 0):setTimeout(()=>alert("Congratulations! Player1 wins") , 0);

    return 'end';
            

}

const getBox = () => {
    ++clicks;
    var box1 = document.querySelector('#box1');
    var box2 = document.querySelector('#box2');
    var box3 = document.querySelector('#box3');
    var box4 = document.querySelector('#box4');
    var box5 = document.querySelector('#box5');
    var box6 = document.querySelector('#box6');
    var box7 = document.querySelector('#box7');
    var box8 = document.querySelector('#box8');
    var box9 = document.querySelector('#box9');

    if(box1.innerHTML !== '' && box1.innerHTML===box2.innerHTML && box1.innerHTML===box3.innerHTML){
        selectWinner(box1,box2,box3);
        setTimeout(replay() , 0);
    }
    if(box4.innerHTML !== '' && box4.innerHTML===box5.innerHTML && box4.innerHTML===box6.innerHTML){
        selectWinner(box4,box5,box6);
        setTimeout(replay() , 0);
    }
    if(box7.innerHTML !== '' && box7.innerHTML===box8.innerHTML && box7.innerHTML===box9.innerHTML){
        selectWinner(box7,box8,box9);
        setTimeout(replay() , 0);
    }
    if(box1.innerHTML !== '' && box1.innerHTML===box4.innerHTML && box1.innerHTML===box7.innerHTML){
        selectWinner(box1,box4,box7);
        setTimeout(replay() , 0);
    }
    if(box2.innerHTML !== '' && box2.innerHTML===box5.innerHTML && box2.innerHTML===box8.innerHTML){
        selectWinner(box2,box5,box8);
        setTimeout(replay() , 0);
    }
    if(box3.innerHTML !== '' && box3.innerHTML===box6.innerHTML && box3.innerHTML===box9.innerHTML){
        selectWinner(box3,box6,box9);
        setTimeout(replay() , 0);
    }
    if(box3.innerHTML !== '' && box3.innerHTML===box5.innerHTML && box3.innerHTML===box7.innerHTML){
        selectWinner(box3,box5,box7);
        setTimeout(replay() , 0);
    }
    if(box1.innerHTML !== '' && box1.innerHTML===box5.innerHTML && box1.innerHTML===box9.innerHTML){
        selectWinner(box1,box5,box9);
        setTimeout(replay() , 0);
    }
    if(clicks==9){
        
        setTimeout(()=>{
            alert("Draw!");
            return replay();
        } , 0);
    }
}

async function play(){for(let i=0;i<boxes.length;i++){
    boxes[i].onclick = function (){
        if(this.innerHTML===""){
            if(toggler%2==0){
                (this.innerHTML = 'x');
                turn.innerHTML = 'o turn now!';
                setTimeout(getBox() , 0);
                
                toggler++;
            }else{
                (this.innerHTML = 'o');
                turn.innerHTML = 'x turn now!';
                setTimeout(getBox() , 0);
                
                toggler++;
            }
        }
    }
}}

play();

const replay = () =>{
    toggler = 1;
    for(let i=0;i<boxes.length;i++){
        boxes[i].classList.remove('win');
        boxes[i].innerHTML = "";
        turn.innerHTML = "Play";
    }
}

console.log(boxes);