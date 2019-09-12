let subject = document.querySelector('#subject');
let classId = document.querySelector('#class');
let board = document.querySelector('#board');

// Database
let data = {
    "cbse10mathematics": [{
        "Algebra": [
            "Yash",
            "Section 2",
            "Section 3",
            "Section 4",
            "Section 5"
            ]
        },
        {
            "Arithmetic Progression": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Coordinate Geometry": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Geometry": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Number Systems": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Pair of Linear Equations In Two Variables": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Polynomials": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Probability": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Quadratic Equations": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Real Numbers": [
                "Section 1",
                "Section 2"
            ]
        },
        {
            "Statistics": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Surface Areas and Volumes": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Triangles": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        }
    ],
    "cbse10chemistry": [{
        "Acids, Bases and Salts": [
            "Section 1",
            "Section 2",
            "Section 3",
            "Section 4",
            "Section 5"
        ]
    },
        {
            "Carbon and its Compounds": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Chemical Reactions and Equations": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Metals and Non Metals": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Periodic Classification of Elements": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        }
    ],
    "cbse10physics": [{
        "Electricity": [
            "Section 1",
            "Section 2",
            "Section 3",
            "Section 4",
            "Section 5"
        ]
    },
        {
            "Light - Reflection and Refraction": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Magnetic Effect of Electric Current": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Sources of Energy": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "The Human Eye and the Colourful World": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        }
    ],
    "cbse10biology": [{
        "Control and Coordination": [
            "Section 1",
            "Section 2",
            "Section 3",
            "Section 4",
            "Section 5"
        ]
    },
        {
            "Heredity and Evolution": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "How Do Organisms Reproduce": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Life Processes": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Management of Natural Resources": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Our Environment": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        }
    ],
    "cbse9mathematics": [{
        "Algebra": [
            "Section 1",
            "Section 2",
            "Section 3",
            "Section 4",
            "Section 5"
        ]
    },
        {
            "Coordinate Geometry": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Factorization of Polynomials": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Geometry": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Introduction to Euclid's Geometry": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Linear Equations": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Linear Equations in Two Variables": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Lines and Angles": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Mensuration": [
                "Section 1",
                "Section 2"
            ]
        },
        {
            "Number Systems": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Polynomials": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Statistics": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Triangles": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        }
    ],
    "cbse9biology": [{
        "Diversity in Living Organisms": [
            "Section 1",
            "Section 2",
            "Section 3",
            "Section 4",
            "Section 5"
        ]
    },
        {
            "Improvement in Food Resources": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Natural Resources": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "The Fundamental Unit in Life": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Tissues": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Why Do We Fall Ill?": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        }
    ],
    "cbse9chemistry": [{
        "Atoms and Molecules": [
            "Section 1",
            "Section 2",
            "Section 3",
            "Section 4",
            "Section 5"
        ]
    },
        {
            "Elements, Compounds and Mixtures": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Is Matter Around Us Pure": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Matter and its Composition": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Matter in Our Surroundings": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Structure of Atom": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        }
    ],
    "cbse9physics": [{
        "Floatation": [
            "Section 1",
            "Section 2",
            "Section 3",
            "Section 4",
            "Section 5"
        ]
    },
        {
            "Gravitation": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Laws of Motion": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Motion": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Sound": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        },
        {
            "Work, Energy and Power": [
                "Section 1",
                "Section 2",
                "Section 3",
                "Section 4",
                "Section 5"
            ]
        }
    ]
}

// Entirely Main Function
let start = function() {
    console.log(classId.value);
    console.log(board.value);
    console.log(subject.value);

    let headings = document.querySelector('.subject');
    headings.innerHTML = subject.value.toUpperCase();

    let creative = document.querySelector('.creative');
    let creativeHTML = `<img src="./img/classes_page/${subject.value.toLowerCase()}.png" alt="">`;
    creative.removeChild(creative.lastElementChild);
    creative.insertAdjacentHTML('beforeend', creativeHTML);

    let syllabusList = document.querySelector('.syllabusList');

    let syllabusString = `${board.value}${classId.value}${subject.value}`;

    let syllabusOf = Object.prototype.valueOf.call(syllabusString.toLowerCase());

    let bottomContentHeading = document.querySelector('.bottomContent > h2');
    bottomContentHeading.innerHTML = '';
    bottomContentHeading.innerHTML = `Syllabus Class ${classId.value}th ${board.value} ${subject.value}`;

    syllabusList.innerHTML = '';
    data[syllabusOf].forEach((cur, ind) => {
        let lists = `<li class="p"><p>${ind + 1}. ${Object.keys(cur)}</p><i class="large material-icons">add_box</i><ul class="syllabus-dropdown syllabus-dropdown-${ind+1}"></ul></li>`
        syllabusList.insertAdjacentHTML('beforeend', lists);

        let currentDropDown = document.querySelector(`.syllabus-dropdown-${ind+1}`);

        // console.log();
        cur[Object.keys(cur)].forEach((cur1, ind1) => {
            let dropDownLists = `<li><a>${cur1}</a></li>`;
            currentDropDown.insertAdjacentHTML('beforeend', dropDownLists);
        })
    })
    let syllabusList1 = document.querySelectorAll('.syllabusList > li > i');
    let opened = false;

    syllabusList1.forEach(cur => {
        cur.addEventListener('click', function() {
            let count = cur.parentElement.lastElementChild.childElementCount;
            console.log(count);

            if(opened) {
                cur.textContent = '';
                cur.textContent = 'add_box';
                cur.parentElement.style.height = `45px`;
                opened = false;
            } else {
                cur.textContent = '';
                cur.textContent = 'remove';
                cur.parentElement.style.height = `${count * 40 + (45)}px`;
                opened = true;
            }
        })
    })
}

subject.addEventListener('change', start);
classId.addEventListener('change', start);
board.addEventListener('change', start);

start();