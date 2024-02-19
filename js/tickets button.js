function scrollBuyButtonToPhParibahan() {
    const buttonClick = document.getElementById('ph-paribahan');
    buttonClick.scrollIntoView();
}

// button highlight and count

const allBtn = document.getElementsByClassName('btn');
let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function(e) {
        count = count + 1;
        document.getElementById('selected-seats').innerText = count;
        btn.classList.add('bg-[#1DD100]');
        selectedSeats.appendChild(div);
    })
}




// appendChild

function highlightButton(){
    let button = document.getElementById('A1');
    button.classList.add('bg-[#1DD100]');
    // selectedSeats.appendChild(div);
}


// append seats
const selectedSeats = document.getElementById('add-selected-seats');
const div = document.createElement('div');
const p1 = document.createElement('p');
p1.innerText = 'A1';
const p2 = document.createElement('p');
p2.innerText = 'Economoy';
const p3 = document.createElement('p');
p3.innerText = 550;
// selectedSeats.appendChild(div);
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);
div.classList.add("flex")
div.classList.add("justify-between")



// const allActiveBtn = document.getElementsByClassName('f')

// for (const activeBtn of allActiveBtn) {
//     activeBtn.addEventListener('click', function(e) {
//     console.log(activeBtn);
//     activeBtn.classList.add('bg-[#1DD100]');
//     })
    
// }