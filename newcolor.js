

// UI variables
    let squares = document.querySelectorAll('.square');
    let picked = document.getElementById('pickedColor');
    let h2 = document.querySelector('h2')
    let container = document.getElementById('container');
    let message = document.querySelector('#message');
    let restart = document.querySelector('#restart');
    let easyMode = document.querySelector('#easy-mode');
    let hardMode = document.querySelector('#hard-Mode');



//get random color
function getRandomColor(square){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for(var num = 0; num < square; num++){
    color += letters[Math.floor(Math.random()* 16)];
    }
    return color;
}




for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = getRandomColor(6);
    //get eventlistener on clickedcolor
    picked.textContent = squares[Math.floor(Math.random() * squares.length)].style.backgroundColor;

    squares[i].addEventListener('click', function(){
       // get clicked color
      let clickedColor = this.style.backgroundColor;
      if(clickedColor === picked.textContent){
         changeColor(clickedColor);
         h2.style.backgroundColor = picked.textContent;
         message.innerText = 'You got It';
         setTimeout(reload(true), 300);
      }else{
          this.style.backgroundColor = '#232332';
          message.innerText = 'Try Again';
          h2.style.backgroundColor = '#232332';
      }
    })
}

//  });


// get change color
function changeColor(target){
    for(let i = 0; i < squares.length; i++)
    squares[i].style.backgroundColor = target;
}
