let inputs = document.getElementById('text');
let ulList = document.querySelector('.list-group');
let list = ulList.querySelectorAll('.list');



function makeFunctions() {
      let   inputValue = document.getElementById('text').value;
            inputValue = inputValue.toUpperCase();
      
     list.forEach(item => {
      if(item.getElementsByTagName('a')[0].innerHTML.toUpperCase().indexOf(inputValue) > -1) {

            item.style.display = ''
            
      } else {
            item.style.display = 'none';
      }
     })
     
}

inputs.addEventListener('keyup', makeFunctions)