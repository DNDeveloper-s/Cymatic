let submit = document.querySelector('.submit');
let classes = document.querySelector('#class');
let board = document.querySelector('#board');
let subject = document.querySelector('#subject');
let classHead = document.querySelector('.headingTabs > .class');
let subjectHead = document.querySelector('.headingTabs > .subject');
let pricingForm = document.querySelector('.pricing-form');
let dynamicContent = document.querySelector('.dynamic-content');
let dynamicLine = document.querySelector('.dynamicLine');
let advanced = document.querySelector('.advanced');
let unlimited = document.querySelector('.unlimited');

function main() {
    pricingForm.classList.add('none');
    dynamicContent.classList.remove('none');
    console.log(classes.value, board.value, subject.value);
    classHead.innerHTML = '';
    classHead.innerHTML = `Class ${classes.value}`;
    subjectHead.innerHTML = '';
    subjectHead.innerHTML = `${subject.value}`;
    dynamicLine.innerHTML = '';
    if(subject.value.includes("+")) {
        if(subject.value === 'Maths + Science') {
            dynamicLine.innerHTML = `Maths and Science Syllabus of Class ${classes.value} will be taught thoroughly.`;
        }
        if(subject.value ==='Maths + Science + Social Science') {
            dynamicLine.innerHTML = `Maths, Science and Social Science Syllabus of Class ${classes.value} will be taught thoroughly.`;
        }
    } else {
        dynamicLine.innerHTML = `${subject.value} Syllabus of Class ${classes.value} will be taught thoroughly.`;
    }

    let classesObj = Object.prototype.valueOf.call(classes.value);
    let subjectObj = Object.prototype.valueOf.call(subject.value);

    fetch("./js/pricingData.json")
        .then(response => response.json())
        .then(json => {
            advanced.innerHTML = '';
            advanced .innerHTML = `PRICE: ₹ ${json[classesObj][subjectObj].Advanced.price}`;

            unlimited.innerHTML = '';
            unlimited .innerHTML = `PRICE: ₹ ${json[classesObj][subjectObj].Unlimited.price}`;
        });
}

submit.addEventListener('click', main);

