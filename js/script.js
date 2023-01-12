const gridContainer = document.getElementById('grid-container');

const myBtn = document.getElementById('my-btn');

myBtn.addEventListener('click',
   function () { 
    gridContainer.style.display = 'flex';
   }
);
console.log(this);

for (let i = 0; i < 100; i++) {

    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.innerHTML = ('1');
    newCell.addEventListener('click',
    
        function () {
            
            console.log(this);
            console.log(this.classList);

            if(this.classList.contains('clicked')){
                this.classList.remove('clicked');
            }
            else{
                this.classList.add('clicked');
            }

        }
    
    );

    gridContainer.append(newCell);

}