function toggleHide() {
    
    let para = document.getElementById('hide');
    let menu= document.getElementById('sidebarCollapse');
    if (para.style.display != 'none') {
        para.style.display = 'none';
        menu.innerHTML= `<img src="img1/menu.svg" onclick="toggleHide()" alt="menu">`;
    }
    else {
        para.style.display = 'grid';
        menu.innerHTML= `<img src="img1/close.svg" onclick="toggleHide()" alt="menu">`;
        
    }
}

function divHide1() {
    
    let ct1 = document.getElementById('ct1');
    let ct2 = document.getElementById('ct2');
    let ct3 = document.getElementById('ct3');
    
    if (ct1.style.display != 'none') {
        ct1.style.display = 'none';
        ct2.style.display = 'none';
        ct3.style.display = 'none';
        

    }
    else {
        ct1.style.display = 'block';
        
        ct1.classList.add('div1');
        ct2.style.display = 'none';
        ct3.style.display = 'none';
        
    }
}

function divHide2() {
    
    let ct1 = document.getElementById('ct1');
    let ct2 = document.getElementById('ct2');
    let ct3 = document.getElementById('ct3');
    if (ct2.style.display != 'none') {
        ct2.style.display = 'none';
        ct1.style.display = 'none';
        ct3.style.display = 'none';
        

    }
    else {
        ct2.style.display = 'block';
        ct2.classList.add('div1');
        ct1.style.display = 'none';
        ct3.style.display = 'none';
        
    }
}

function divHide3() {
    // let c1 = document.getElementById('c1');
    let ct1 = document.getElementById('ct1');
    let ct2 = document.getElementById('ct2');
    let ct3 = document.getElementById('ct3');
    if (ct3.style.display != 'none') {
        ct3.style.display = 'none';
        ct1.style.display = 'none';
        ct2.style.display = 'none';
        // ct1.style.Duration = '1s';

    }
    else {
        ct3.style.display = 'block';
        ct3.classList.add('div1');
        ct1.style.display = 'none';
        ct2.style.display = 'none';
        // ct1.style.transitionDuration = '1s';
    }
}

function contentshow() {
    // let btn = document.getElementsByClassName('btn');
    let skill = document.getElementById('skill1');
    let f1 = document.getElementById('f1');
    let f2 = document.getElementById('f2');
    let f3 = document.getElementById('f3');
    let f4 = document.getElementById('f4');
    let hidebutton = document.getElementById('hidebutton');
    if (skill.style.display = 'none') {
        skill.style.display = 'block';
        hidebutton.style.border = 'none';
        skill.classList.add('div1');
        f1.style.display = 'none';
        f2.style.display = 'none';
        f3.style.display = 'none';
        f4.style.display = 'none';
        hidebutton.style.visibility = 'hidden';
    }
    // else {
    //     skill.style.display = 'block';
    // }
}

function contentHide() {
    // let btn = document.getElementsByClassName('btn');
    let skill = document.getElementById('skill1');
    
    if (skill.style.display = 'block') {
        skill.style.display = 'none';
        hidebutton.style.visibility = 'visible';
    }
    
}

function foothide1() {
    
    let f1 = document.getElementById('f1');
    if (f1.style.display != 'none') {
        f1.style.display = 'none';
    }
    else {
        f1.style.display = 'block';
        f1.classList.add('div1');
    }
}

function foothide2() {
    
    let f2 = document.getElementById('f2');
    if (f2.style.display != 'none') {
        f2.style.display = 'none';
    }
    else {
        f2.style.display = 'block';
        f2.classList.add('div1');
    }
}

function foothide3() {
    
    let f3 = document.getElementById('f3');
    if (f3.style.display != 'none') {
        f3.style.display = 'none';
    }
    else {
        f3.style.display = 'block';
        f3.classList.add('div1');
    }
}

function foothide4() {
    
    let f4 = document.getElementById('f4');
    if (f4.style.display != 'none') {
        f4.style.display = 'none';
    }
    else {
        f4.style.display = 'block';
        f4.classList.add('div1');
    }
}

function top() {
    alert('successfully submitted');
}
