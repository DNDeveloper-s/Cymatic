let subject = document.querySelector('#subject');
let classId = document.querySelector('#class');
let board = document.querySelector('#board');

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

    fetch("./js/studyMaterial.json")
        .then(response => response.json())
        .then(json => {
            json[syllabusOf].forEach((cur, ind) => {
                let lists = `<li class="p"><p>${ind + 1}. ${Object.keys(cur)}</p><i class="large material-icons">add_box</i><ul class="syllabus-dropdown syllabus-dropdown-${ind+1}"></ul></li>`
                syllabusList.insertAdjacentHTML('beforeend', lists);

                let currentDropDown = document.querySelector(`.syllabus-dropdown-${ind+1}`);

                // console.log();
                cur[Object.keys(cur)].forEach((cur1, ind1) => {
                    let dropDownLists = `<li><a>${cur1}</a></li>`;
                    currentDropDown.insertAdjacentHTML('beforeend', dropDownLists);
                })
            })
        });

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