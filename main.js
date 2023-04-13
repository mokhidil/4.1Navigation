

let input = document.querySelector('input');    
let btnList = document.querySelectorAll('ul li');
let button = document.getElementById('changBtn');
let titleH3=document.getElementById('tabTitle');

let index;
let arrH3=['Positive content', 'Negative content', 'Neutral content'];

input.addEventListener('input', (e)=>{
    index = e.target.value;

    button.onclick=()=>{
        if(index>=1 && index<=3){
            change(index);    
        }
        else alert('This page is invalid');
    }    
});

function change(index){
    for(let i = 0; i< btnList.length; i++){
        btnList[i].classList.remove('btn-active');
    }
    btnList[index-1].classList.add('btn-active');
    titleH3.innerText = arrH3[index-1];
}


