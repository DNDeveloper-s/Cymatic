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
        if(subject.value == 'Maths + Science') {
            dynamicLine.innerHTML = `Maths and Science Syllabus of Class ${classes.value} will be taught thoroughly.`;
        }
        if(subject.value == 'Maths + Science + Social Science') {
            dynamicLine.innerHTML = `Maths, Science and Social Science Syllabus of Class ${classes.value} will be taught thoroughly.`;
        }
    } else {
        dynamicLine.innerHTML = `${subject.value} Syllabus of Class ${classes.value} will be taught thoroughly.`;
    }

    let classesObj = Object.prototype.valueOf.call(classes.value);
    let subjectObj = Object.prototype.valueOf.call(subject.value);

    advanced.innerHTML = '';
    advanced .innerHTML = `PRICE: ₹ ${data[classesObj][subjectObj].Advanced.price}`;

    unlimited.innerHTML = '';
    unlimited .innerHTML = `PRICE: ₹ ${data[classesObj][subjectObj].Unlimited.price}`;
}

submit.addEventListener('click', main);

let data = {
    "IX": {
        "English": {
            "Advanced": {
                "price": "5,999.00"
            },
            "Unlimited": {
                "price": "7,999.00"
            }
        },
        "Social Science": {
            "Advanced": {
                "price": "9,999.00"
            },
            "Unlimited": {
                "price": "12,999.00"
            }
        },
        "Science": {
            "Advanced": {
                "price": "9,999.00"
            },
            "Unlimited": {
                "price": "12,999.00"
            }
        },
        "Maths": {
            "Advanced": {
                "price": "9,999.00"
            },
            "Unlimited": {
                "price": "12,999.00"
            }
        },
        "Hindi": {
            "Advanced": {
                "price": "5,999.00"
            },
            "Unlimited": {
                "price": "7,999.00"
            }
        },
        "Maths + Science": {
            "Advanced": {
                "price": "22,999.00"
            },
            "Unlimited": {
                "price": "24,999.00"
            }
        },
        "Maths + Science + Social Science": {
            "Advanced": {
                "price": "40,999.00"
            },
            "Unlimited": {
                "price": "43,999.00"
            }
        },
        "All Subjects": {
            "Advanced": {
                "price": "44,999.00"
            },
            "Unlimited": {
                "price": "49,999.00"
            }
        }
    },
    "X": {
        "English": {
            "Advanced": {
                "price": "5,999.00"
            },
            "Unlimited": {
                "price": "7,999.00"
            }
        },
        "Social Science": {
            "Advanced": {
                "price": "9,999.00"
            },
            "Unlimited": {
                "price": "12,999.00"
            }
        },
        "Science": {
            "Advanced": {
                "price": "9,999.00"
            },
            "Unlimited": {
                "price": "12,999.00"
            }
        },
        "Maths": {
            "Advanced": {
                "price": "9,999.00"
            },
            "Unlimited": {
                "price": "12,999.00"
            }
        },
        "Hindi": {
            "Advanced": {
                "price": "5,999.00"
            },
            "Unlimited": {
                "price": "7,999.00"
            }
        },
        "Maths + Science": {
            "Advanced": {
                "price": "22,999.00"
            },
            "Unlimited": {
                "price": "24,999.00"
            }
        },
        "Maths + Science + Social Science": {
            "Advanced": {
                "price": "40,999.00"
            },
            "Unlimited": {
                "price": "43,999.00"
            }
        },
        "All Subjects": {
            "Advanced": {
                "price": "44,999.00"
            },
            "Unlimited": {
                "price": "49,999.00"
            }
        }
    },
}