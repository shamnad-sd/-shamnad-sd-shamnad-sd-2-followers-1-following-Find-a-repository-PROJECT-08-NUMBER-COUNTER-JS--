let count = 0;

const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

const updateCounter = () => {
    counter.textContent = count;
};

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter(); 
});

