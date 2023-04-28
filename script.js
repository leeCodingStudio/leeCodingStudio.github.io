// 메뉴 바
const menu = document.querySelector('.navbar__menu')
const menu2 = document.querySelector('.navbar_action')
function Menu_active(){
    menu.classList.toggle('action')
    menu2.classList.toggle('action')
}


// 메뉴 바 클릭
function goToScroll(name) {     // goToScroll()이라는 함수 생성.
    const location = document.querySelector('#'+name).offsetTop; // location 변수가 class(온점+name)을 기준으로 위치하도록 선언.
    window.scrollTo({
        // window.scrollTo()메서드를 이용하여 location으로 이동.
        top: location - 65, // menu에 부여된 z-index에 겹치는 부분을 고려하여 -65의 위치조정을 진행.
        behavior: 'smooth'
    }); // smooth하게 이동할 수 있도록 조정.
}


// 내 작업실 버튼
const allCount = document.getElementsByClassName('project');
const front = document.getElementsByClassName('front');
const back = document.getElementsByClassName('back');
const ai = document.getElementsByClassName('ai');

document.getElementsByClassName('all__count')[0].innerText = allCount.length;
document.getElementsByClassName('front__count')[0].innerText = front.length;
document.getElementsByClassName('back__count')[0].innerText = back.length;
document.getElementsByClassName('ai__count')[0].innerText = ai.length;

// 내 작업실
function ProjectButtonClick(project, me) {
    const allCount = document.querySelectorAll('.project');
    const projectCount = document.querySelectorAll(project);
    const selected = document.querySelector('.selected');
    
    allCount.forEach((data) => {
        data.classList.add('none');
    });

    projectCount.forEach((data) => {
        data.classList.remove('none');
    });

    selected.classList.remove('selected');
    me.classList.add('selected');
}


// nav 버튼, 화살표 버튼 및 section
const btn = document.querySelector('.arrow-up');
const sections = document.querySelectorAll('.section');
const navList = document.querySelectorAll('.navbar__menu__item');
const home = document.querySelector('#home');


// 스크롤 이벤트(화살표 및 nav버튼)
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    if (scroll > home.offsetTop + home.offsetHeight) {
        btn.classList.add('visible')
    } else {
        btn.classList.remove('visible')
    }

    sections.forEach((data, i) => {
        if(scroll > data.offsetTop - 300) {
            document.querySelector('.active').classList.remove('active');
            navList[i].classList.add('active');
        }
    });

    if(scroll == document.body.offsetHeight - window.innerHeight){
        document.querySelector('.active').classList.remove('active');
        navList[navList.length - 1].classList.add('active');
    }

});



