import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const flatpickr = require("flatpickr");
const input = document.querySelector("#datetime-picker");

const button = document.querySelector('button[data-start]');
button.setAttribute('disabled', true);

let day = document.querySelector('span[data-days]');
let hour = document.querySelector('span[data-hours]');
let minut = document.querySelector('span[data-minutes]');
let second = document.querySelector('span[data-seconds]')


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] > options.defaultDate) {
            button.removeAttribute('disabled');
            button.addEventListener("click", countdown);
function countdown() {
    setInterval(() => {
        console.log("стартуєм");
        const currentTime = Date.now();
        const countTime = selectedDates[0] - currentTime;
        const {days, hours, minutes, seconds} = convertMs(countTime);
        updateCounter();
        console.log(`${days}: ${hours}: ${minutes}: ${seconds}`);
    }, 1000)
}
        } else {
            alert("Please choose a date in the future");
        }
    },
};
console.log(options.defaultDate);
flatpickr(input, options);

function addLeadingZero(v) {
    return String(v).padStart(2, '0'); 
}
function convertMs(ms) { 
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    
    return { days, hours, minutes, seconds };
}

function updateCounter({days, hours, minutes, seconds}) {
// days = day.textContent;
// hour.textContent = `${hours}`
// minut.textContent = `${minutes}`
    // second.textContent = `${seconds}`
}