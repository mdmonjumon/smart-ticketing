function scrollBuyButtonToPhParibahan() {
    const buttonClick = document.getElementById('ph-paribahan');
    buttonClick.scrollIntoView();
}

// button highlight and count

const allBtn = document.getElementsByClassName('btn');
let count = 0;



for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        let totalPrice = count * 550;
        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('grand-total').innerText = totalPrice;

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


        document.getElementById('selected-seats').innerText = count;
        btn.classList.add('bg-[#1DD100]');
        selectedSeats.appendChild(div);


        // console.log(e.target.parentNode.childNodes[3].innerText);

        if (count > 4) {
            alert('You have selected maximum');
            btn.classList.remove('bg-[#1DD100]');
            count = count - 1;
            selectedSeats.removeChild(div);
            document.getElementById('selected-seats').innerText = count;
            document.getElementById('total-price').innerText = totalPrice - 550;
            document.getElementById('grand-total').innerText = totalPrice - 550;
        }






    })
}




function popup() {

    const successSection = document.getElementById('success');
    const headerHidden = document.getElementById('header-hidden');
    const mainHidden = document.getElementById('main-hidden');
    headerHidden.classList.add('hidden');
    mainHidden.classList.add('hidden');
    successSection.classList.remove('hidden')

}

function hidepepup() {

    const successSection = document.getElementById('success');
    const headerHidden = document.getElementById('header-hidden');
    const mainHidden = document.getElementById('main-hidden');
    headerHidden.classList.remove('hidden');
    mainHidden.classList.remove('hidden');
    successSection.classList.add('hidden')

}



const applyButton = document.getElementById('apply-button');




function totalDiscount() {
    const couponCode = document.getElementById('coupon-code').value;
    if (couponCode === 'Couple 20' && count === 4) {

        const grandPrice = document.getElementById('total-price').innerText;
        const discountForNew = grandPrice * 20 / 100;
        const discountedPrice = grandPrice - discountForNew;
        document.getElementById('grand-total').innerText = discountedPrice;

    } 
    
    else if (couponCode === 'NEW15' && count === 4) {
        const grandPrice = document.getElementById('total-price').innerText;
        const discountForNew = grandPrice * 15 / 100;
        const discountedPrice = grandPrice - discountForNew;
        document.getElementById('grand-total').innerText = discountedPrice;

    }




}
