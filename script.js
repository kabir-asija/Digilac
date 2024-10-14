function hideAns1() {
    let ans = document.querySelector('.ans1');
    let bar = document.querySelector('#openfaq1');
    let cross = document.querySelector('#closefaq1');
    bar.style.display = 'block';
    cross.style.display = 'none';
    ans.style.display = 'none';
}

function hideAns2() {
    let ans = document.querySelector('.ans2');
    let bar = document.querySelector('#openfaq2');
    let cross = document.querySelector('#closefaq2');
    bar.style.display = 'block';
    cross.style.display = 'none';
    ans.style.display = 'none';
}

function hideAns3() {
    let ans = document.querySelector('.ans3');
    let bar = document.querySelector('#openfaq3');
    let cross = document.querySelector('#closefaq3');
    bar.style.display = 'block';
    cross.style.display = 'none';
    ans.style.display = 'none';
}

function hideAns4() {
    let ans = document.querySelector('.ans4');
    let bar = document.querySelector('#openfaq4');
    let cross = document.querySelector('#closefaq4');
    bar.style.display = 'block';
    cross.style.display = 'none';
    ans.style.display = 'none';
}

function hideAns5() {
    let ans = document.querySelector('.ans5');
    let bar = document.querySelector('#openfaq5');
    let cross = document.querySelector('#closefaq5');
    bar.style.display = 'block';
    cross.style.display = 'none';
    ans.style.display = 'none';
}

function showAns1() {
    let ans = document.querySelector('.ans1');
    let bar = document.querySelector('#openfaq1');
    let cross = document.querySelector('#closefaq1');
    bar.style.display = 'none';
    cross.style.display = 'block';
    ans.style.display = 'block';
}

function showAns2() {
    let ans = document.querySelector('.ans2');
    let bar = document.querySelector('#openfaq2');
    let cross = document.querySelector('#closefaq2');
    bar.style.display = 'none';
    cross.style.display = 'block';
    ans.style.display = 'block';
}

function showAns3() {
    let ans = document.querySelector('.ans3');
    let bar = document.querySelector('#openfaq3');
    let cross = document.querySelector('#closefaq3');
    bar.style.display = 'none';
    cross.style.display = 'block';
    ans.style.display = 'block';
}

function showAns4() {
    let ans = document.querySelector('.ans4');
    let bar = document.querySelector('#openfaq4');
    let cross = document.querySelector('#closefaq4');
    bar.style.display = 'none';
    cross.style.display = 'block';
    ans.style.display = 'block';
}

function showAns5() {
    let ans = document.querySelector('.ans5');
    let bar = document.querySelector('#openfaq5');
    let cross = document.querySelector('#closefaq5');
    bar.style.display = 'none';
    cross.style.display = 'block';
    ans.style.display = 'block';
}


function subscribe() {
    const email = document.querySelector('#email');
    if (email.value == "") {
        return false;
    }
    else {
        return true;
    }
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}