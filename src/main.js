function openFilter() {
    document.getElementById('more-button').addEventListener('click', function () {
        document.querySelector('.filter__secondary').classList.toggle('open');
        var button = document.querySelector('.more-button');
        button.classList.toggle('open');
    });
}

function editData() {
    let edit = document.querySelectorAll('.menu-box .edit');
    let parent;
    let allData;
    let checkOut;
    for (let i = 0; i < edit.length; i++) {
        edit[i].addEventListener("click", function (e) {
            document.getElementsByClassName('btn save')[0].disabled = false;
            parent = e.target.parentElement.parentElement.parentElement;
            allData = parent.querySelectorAll('.data p.info');
            checkOut = parent.querySelectorAll('.label-options');
            checkOut[0].click();
            for (let j = 0; j < allData.length; j++) {
                allData[j].setAttribute("contentEditable", "true")
            }
            allData[0].focus();
        });
    }
}

function saveData() {
    let allData = document.querySelectorAll('.data p.info');
    document.getElementsByClassName('btn save')[0].addEventListener("click", function () {
        document.getElementsByClassName('btn save')[0].disabled = true;
        for (let j = 0; j < allData.length; j++) {
            allData[j].setAttribute("contentEditable", "false");
        }
    });
}

function getStatus() {
    let status = document.querySelectorAll('.list-row .ispaid');
    for (let i = 0; i < status.length; i++) {
        if (status[i].textContent === 'Paid') {
            status[i].parentElement.parentElement.getElementsByClassName('status')[0].classList.add('paid');
        } else {
            status[i].parentElement.parentElement.getElementsByClassName('status')[0].classList.add('late');
        }
    }
}

function createmyElements(){
    let list = [];
    for (let i = 0; i<=25; i++) {
        if (i<5) {
        list.push(
        '<li class="list-row box-shadow-small">\n' +
        '                <div class="status">\n' +
        '                </div>\n' +
        '                <div class="data">\n' +
        '                    <p class="info ispaid" contenteditable="false">Late</p>\n' +
        '                </div>\n' +
        '                <div class="data">\n' +
        '                    <p class="info" contenteditable="false">123456</p>\n' +
        '                </div>\n' +
        '                <div class="data">\n' +
        '                    <p class="info" contenteditable="false">IB Croatia</p>\n' +
        '                </div>\n' +
        '                <div class="data">\n' +
        '                    <p class="info" contenteditable="false">HT</p>\n' +
        '                </div>\n' +
        '                <div class="data">\n' +
        '                    <p class="info" contenteditable="false">SMS</p>\n' +
        '                </div>\n' +
        '                <div class="data">\n' +
        '                    <p class="info" contenteditable="false">100</p>\n' +
        '                </div>\n' +
        '                <div class="data">\n' +
        '                    <p class="info" contenteditable="false">HRK</p>\n' +
        '                </div>\n' +
        '                <div class="data">\n' +
        '                    <p class="info" contenteditable="false">Invoice</p>\n' +
        '                </div>\n' +
        '                <div class="data">\n' +
        '                    <p class="info" contenteditable="false">ZABA</p>\n' +
        '                </div>\n' +
        '                <div class="data">\n' +
        '                    <p class="info" contenteditable="false">10.09.2020.</p>\n' +
        '                </div>\n' +
        '                <div class="data">\n' +
        '                    <p class="info" contenteditable="false">15-30</p>\n' +
        '                </div>\n' +
        '                <div class="data menu">\n' +
        '                    <label class="label-options" for="options' +
        i +
        '">' +
        '                        <div class="icon-container"></div>\n' +
        '                    </label>\n' +
        '                    <input type="checkbox" class="options" id="options' +
        i +
        '">' +
        '                    <div class="menu-box box-shadow">\n' +
        '                        <p class="edit">Edit</p>\n' +
        '                        <a class="details">Details</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </li>'
        );}
        else {
            list.push(
            '<li class="list-row box-shadow-small">\n' +
            '                <div class="status">\n' +
            '                </div>\n' +
            '                <div class="data">\n' +
            '                    <p class="info ispaid" contenteditable="false">Paid</p>\n' +
            '                </div>\n' +
            '                <div class="data">\n' +
            '                    <p class="info" contenteditable="false">123456</p>\n' +
            '                </div>\n' +
            '                <div class="data">\n' +
            '                    <p class="info" contenteditable="false">IB Croatia</p>\n' +
            '                </div>\n' +
            '                <div class="data">\n' +
            '                    <p class="info" contenteditable="false">HT</p>\n' +
            '                </div>\n' +
            '                <div class="data">\n' +
            '                    <p class="info" contenteditable="false">SMS</p>\n' +
            '                </div>\n' +
            '                <div class="data">\n' +
            '                    <p class="info" contenteditable="false">100</p>\n' +
            '                </div>\n' +
            '                <div class="data">\n' +
            '                    <p class="info" contenteditable="false">HRK</p>\n' +
            '                </div>\n' +
            '                <div class="data">\n' +
            '                    <p class="info" contenteditable="false">Invoice</p>\n' +
            '                </div>\n' +
            '                <div class="data">\n' +
            '                    <p class="info" contenteditable="false">ZABA</p>\n' +
            '                </div>\n' +
            '                <div class="data">\n' +
            '                    <p class="info" contenteditable="false">10.09.2020.</p>\n' +
            '                </div>\n' +
            '                <div class="data">\n' +
            '                    <p class="info" contenteditable="false">15-30</p>\n' +
            '                </div>\n' +
            '                <div class="data menu">\n' +
            '                    <label class="label-options" for="options">\n' +
            '                        <div class="icon-container"></div>\n' +
            '                    </label>\n' +
            '                    <input type="checkbox" class="options" id="options">\n' +
            '                    <div class="menu-box box-shadow">\n' +
            '                        <p class="edit">Edit</p>\n' +
            '                        <a class="details">Details</a>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </li>'
            );
        }
    }
    return list.join("");
}
function fillData() {
    document.getElementsByClassName('list-data')[0].innerHTML = createmyElements();
}
export {openFilter, editData, getStatus, saveData, fillData}
