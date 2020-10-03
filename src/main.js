function openFilter() {
    document.getElementById("more-button").addEventListener("click", function () {
        document.querySelector('.filter__secondary').classList.toggle('open');
        var button = document.querySelector('.more-button');
        button.classList.toggle('open');
    });
}

function editData() {
    let edit = document.querySelectorAll('.menu-box .edit');
    let list = document.getElementsByClassName('.data');
    let parent;
    let allData;
    let checkOut;
    for (var i = 0; i < edit.length; i++) {
        edit[i].addEventListener("click", function (e) {
            parent = e.target.parentElement.parentElement.parentElement;
            allData = parent.querySelectorAll('.data p');
            checkOut = parent.querySelectorAll('.label-options');
            checkOut[0].click();
            for (var j = 0; j < allData.length; j++) {
                allData[j].setAttribute("contentEditable", "true")
            }
            allData[0].focus();
        });
    }
}

export {openFilter, editData}
