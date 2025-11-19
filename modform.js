
const form = document.getElementById('form');
const title = document.getElementById('title');
const desc = document.getElementById('desc');
const state = document.getElementById('state');
const city = document.getElementById('city');
const date = document.getElementById('date');
const hours = document.getElementById('hours');
const pay = document.getElementById('pay');



/*states */

const stateInfo = {
    "Alabama":{},
    "Alaska":{},
    "Arizona":{},
    "Arkansas":{},
    "California":{},
    "Colorado":{},
    "Connecticut":{},
    "Delaware":{},
    "Florida":{},
    "Georgia":{},
    "Hawaii":{},
    "Idaho":{},
    "Illinois":{},
    "Indiana":{},
    "Iowa":{},
    "Kansas":{},
    "Kentucky":{},
    "Louisiana":{},
    "Maine":{},
    "Maryland":{},
    "Massachusetts":{},
    "Michigan":{},
    "Minnesota":{},
    "Mississippi":{},
    "Missouri":{},
    "Montana":{},
    "Nebraska":{},
    "Nevada":{},
    "New Hampshire":{},
    "New Jersey":{},
    "New Mexico":{},
    "New York":{},
    "North Carolina":{},
    "North Dakota":{},
    "Ohio":{},
    "Oklahoma":{},
    "Oregon":{},
    "Pennsylvania":{},
    "Rhode Island":{},
    "South Carolina":{},
    "South Dakota":{},
    "Tennessee":{},
    "Texas":{},
    "Utah":{},
    "Vermont":{},
    "Virginia":{},
    "Washington":{},
    "West Virginia":{},
    "Wisconsin":{},
    "Wyoming":{}
};

window.onload = function () {
    const stateSelect = document.querySelector('#state');

    for (let state in stateInfo){
        stateSelect.options[stateSelect.options.length] = new Option(
            state
        );
    }
};



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    const titleValue = title.value.trim();
    const descValue = desc.value.trim();
    const stateValue = state.value.trim();
    const cityValue = city.value.trim();
    const dateValue = date.value.trim();
    const hoursValue = hours.value.trim();
    const payValue = pay.value.trim();
    
/*title */
    if(titleValue === '') {
        setError(title, 'Title is required');
    } 
    else if (!isNaN(titleValue)) {
        setError(title, 'Title cannot have numbers');
    }
    else if (titleValue.length <= 59) {
        setError(title, 'Title is too long(60 characeters max)');
    }
    else if (titleValue.length >= 9) {
        setError(title, 'Title is too short(10 characeters min)');
    }
    else {
        setSuccess(title);
    }
/*description*/
    if(descValue === '') {
        setError(desc, 'Description is required');
    }
    else if (descValue.length >= 399) {
        setError(desc, 'Description is too long(400 characters max)');
    }
    else if (descValue.length <= 49) {
        setError(desc, 'Description is too short (50 characters min)');
    }
        else {
        setSuccess(desc);
    }
    /*states*/
    if (stateValue === ''){
        setError(state, 'State selection is required');
    } else {
        setSuccess(state);
    }

    /*city*/
    if(cityValue === ''){
    setError(city, 'City is required');
    }
    else if (!isNaN(cityValue)){
        setError(city, 'City cannot contain numbers');
    } else if (cityValue.length <= 2){
        setError(city, 'City name is too short(3 characters min)');
    } else {
        setSuccess(city);
    }
    /*date */

    if(dateValue === '') {
        setError(date, 'Date is required');
    } else {
        setSuccess(date);
    }
    /*job hours*/
    if(hoursValue === '') {
        setError(hours, 'Job hours is required');
    } 
    else if (isNaN(hoursValue))
        setError(hours, 'Numbers only');
    else {
        setSuccess(hours);
    }
    /*pay */
    if(payValue === '') {
        setError(pay, 'Pay Amount is required');
    } 
    else if (isNaN(payValue)){
        setError(pay, 'Numbers only');
    } else {
        setSuccess(pay);
    }
};


