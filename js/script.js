const gridContainer = document.getElementById('grid-container');

const myBtn = document.getElementById('my-btn');

myBtn.addEventListener('click',

   function () {

    gridContainer.style.display = 'flex';

    console.log('click!');

    gridContainer.innerHTML = '';

    for (let i = 1; i <= 100; i++) {

        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.innerHTML = (i);
        newCell.addEventListener('click',
        
            function () {

                console.log(this.innerText);
                this.classList.add('clicked');

                }

        );

    gridContainer.append(newCell);


}
   }
);
