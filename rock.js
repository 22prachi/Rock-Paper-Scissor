const youPoints=document.querySelector('.you-points')
const paper=document.querySelector(".paper");
const rock=document.querySelector(".rock");
const scissor=document.querySelector(".scissor");
const result=document.querySelector('.resultPara')
const compPoints=document.querySelector('.comp-points')
paper.addEventListener('click',function(){
    check1()
})
rock.addEventListener('click',function(){
    check2()
})
scissor.addEventListener('click',function(){
    check3()
})

let score=0
let compScore=0

function check1(){
   
  const computer=compMove()
  console.log(computer)
  if (computer === 'paper'){
     youPoints.innerText=`0`
     compPoints.innerText=`0`
     
     result.innerHTML='It was Draw'
     result.style.backgroundColor='orange'
     result.style.width='400px'
     result.style.fontSize='18px'

  }else if(computer === 'scissor'){
    compScore++
    youPoints.innerHTML=`${score}`
    compPoints.innerHTML=`${compScore}`
     result.innerHTML=`You lost. Computer : Scissor , User : Paper`
     result.style.backgroundColor='red'
     result.style.width='400px'
     result.style.fontSize='18px'
  }else{
    score++
    youPoints.innerHTML=`${score}`
    compPoints.innerHTML=`${compScore}`
     result.innerHTML=`You won. Computer : Rock , User : Paper`
     result.style.backgroundColor='green'
     result.style.width='400px'
     result.style.fontSize='18px'
  }
}
function check2(){
    let score=0
  const computer=compMove()
  console.log(computer)
  if (computer === 'rock'){
     youPoints.innerText=`0`
     compPoints.innerText=`0`
   
     result.innerHTML='It was Draw'
     result.style.backgroundColor='orange'
     result.style.width='400px'
     result.style.fontSize='18px'

  }else if(computer === 'paper'){
    compScore++
    youPoints.innerHTML=`${score}`
    compPoints.innerHTML=`${compScore}`
     result.innerHTML=`You lost . Computer : Paper , User : Rock`
     result.style.backgroundColor='red'
     result.style.width='400px'
     result.style.fontSize='18px'
  }else{
    score++
    youPoints.innerHTML=`${score}`
    compPoints.innerHTML=`${compScore}`
     result.innerHTML=`You won. Computer : Scissor , User : Rock`
     result.style.backgroundColor='green'
     result.style.width='400px'
     result.style.fontSize='18px'
  }
}

function check3(){
    let score=0
  const computer=compMove()
  console.log(computer)
  if (computer === 'scissor'){
     youPoints.innerText=`0`
     compPoints.innerText=`0`

     result.innerHTML='It was Draw'
     result.style.backgroundColor='orange'
     result.style.width='400px'
     result.style.fontSize='18px'

  }else if(computer === 'rock'){
    compScore++
    youPoints.innerHTML=`${score}`
    compPoints.innerHTML=`${compScore}`
     result.innerHTML=`You lost. Computer : Rock , User : Scissor`
     result.style.backgroundColor='red'
     result.style.width='400px'
     result.style.fontSize='18px'
  }else{
    score++
    youPoints.innerHTML=`${score}`
    compPoints.innerHTML=`${compScore}`
     result.innerHTML=`You won. Computer : Paper , User : Scissor`
     result.style.backgroundColor='green'
     result.style.width='400px'
     result.style.fontSize='18px'
  }
}
function compMove(){
    const randomNo=Math.floor(Math.random()*3 +1)
    if(randomNo===1){
        return 'paper'
    }
    else if(randomNo===2){
        return 'rock'
    }else{
        return 'scissor'
    }
}
