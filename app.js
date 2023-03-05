let mousemoving = false;

window.onpointermove = event => {
    mousemoving = true;
    const blob = document.getElementById('blob');
    const { clientX, clientY } = event;

    if(clientY < 800)
        blob.animate({
            left: `${window.scrollX + clientX}px`,
            top: `${window.scrollY + clientY}px`
        }, { duration: 2000, fill: 'forwards' });
    else
        blob.animate({
            left: `${window.scrollX + clientX}px`
        }, { duration: 2000, fill: 'forwards' });
    mousemoving = false;
};

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let interval = null;


document.querySelector('h1').onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split('')
            .map((letter, index) => {
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join('');

        if(iteration >= event.target.dataset.value.length){
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
}

const track = document.getElementById('image-track');

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = '0';
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if(track.dataset.mouseDownAt === '0') return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    let nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: 'forwards' });

    for(const image of track.getElementsByClassName('image')) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: 'forwards' });
    }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

const dna = document.getElementById('dna');
const misconceptions = document.getElementById('misconceptions');
const questioner = document.getElementById('questioner');
const data = document.getElementById('data');
const analysis = document.getElementById('analysis');
const conclusion = document.getElementById('conclusion');
const sources = document.getElementById('sources');

function showDNA(){
    if(mousemoving) return;
    document.getElementById('menus').style.display = 'block';
    document.getElementById('menus').style.backgroundImage = 'url(https://images.unsplash.com/photo-1637929476734-bd7f5f78e40a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)';
    document.getElementById('dnamenu').style.display = 'block';
    setTimeout(() => {
        document.getElementById('menus').style.opacity = '1';
    }, 10);
}
function showMisconception(){
    if(mousemoving) return;
    document.getElementById('menus').style.display = 'block';
    document.getElementById('menus').style.backgroundImage = 'url(https://images.unsplash.com/photo-1537486336219-a3dd8e2dc6b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)';
    document.getElementById('misconceptionsmenu').style.display = 'block';
    setTimeout(() => {
        document.getElementById('menus').style.opacity = '1';
    }, 10);
}
function showQuestioner(){
    if(mousemoving) return;
    document.getElementById('menus').style.display = 'block';
    document.getElementById('menus').style.backgroundImage = 'url(https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)';
    document.getElementById('questionermenu').style.display = 'block';
    setTimeout(() => {
        document.getElementById('menus').style.opacity = '1';
    }, 10);
}
function showData(){
    if(mousemoving) return;
    document.getElementById('menus').style.display = 'block';
    document.getElementById('menus').style.backgroundImage = 'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)';
    document.getElementById('datamenu').style.display = 'block';
    setTimeout(() => {
        document.getElementById('menus').style.opacity = '1';
    }, 10);
}
function showAnalysis(){
    if(mousemoving) return;
    document.getElementById('menus').style.display = 'block';
    document.getElementById('menus').style.backgroundImage = 'url(https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)';
    document.getElementById('analysismenu').style.display = 'block';
    setTimeout(() => {
        document.getElementById('menus').style.opacity = '1';
    }, 10);
}
function showConclusion(){
    if(mousemoving) return;
    document.getElementById('menus').style.display = 'block';
    document.getElementById('menus').style.backgroundImage = 'url(https://images.unsplash.com/photo-1644030692728-6acd106c2d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80)';
    document.getElementById('conclusionmenu').style.display = 'block';
    setTimeout(() => {
        document.getElementById('menus').style.opacity = '1';
    }, 10);
}
function showSources(){
    if(mousemoving) return;
    document.getElementById('menus').style.display = 'block';
    document.getElementById('menus').style.backgroundImage = 'url(https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)';
    document.getElementById('sourcesmenu').style.display = 'block';
    setTimeout(() => {
        document.getElementById('menus').style.opacity = '1';
    }, 10);
}

dna.addEventListener('click', function(){
    showDNA();
});

misconceptions.addEventListener('click', function(){
    showMisconception();
});

questioner.addEventListener('click', function (){
    showQuestioner();
});

data.addEventListener('click', function (){
    showData();
});

analysis.addEventListener('click', function (){
    showAnalysis();
});

conclusion.addEventListener('click', function (){
    showConclusion();
});

sources.addEventListener('click', function (){
    showSources();
});

function returnToIndex(){
    // window.location.reload();
    document.getElementById('menus').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('menus').style.display = 'none';
        document.getElementById('sourcesmenu').style.display = 'none';
        document.getElementById('conclusionmenu').style.display = 'none';
        document.getElementById('analysismenu').style.display = 'none';
        document.getElementById('datamenu').style.display = 'none';
        document.getElementById('questionermenu').style.display = 'none';
        document.getElementById('misconceptionsmenu').style.display = 'none';
        document.getElementById('dnamenu').style.display = 'none';
    }, 300);

}

let misconceptionIndex = 0;
setButtonVisibility();
function setButtonVisibility(){
    console.log(misconceptionIndex);
    if(misconceptionIndex === 0){
        document.getElementById('prev').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('prev').style.display = 'none';
        }, 300);
    }else{
        document.getElementById('prev').style.display = 'block';
        document.getElementById('prev').style.opacity = '1';
    }
    if(misconceptionIndex === 9){
        document.getElementById('next').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('next').style.display = 'none';
        }, 300);
    }else{
        document.getElementById('next').style.display = 'block';
        document.getElementById('next').style.opacity = '1';
    }
}
let buttonPressed = '';
function displayCurrentSlide(){
    for(let i = 0; i < document.getElementsByClassName('slide').length; i++){
        //if(i !== misconceptionIndex)
            //document.getElementsByClassName('slide')[i].style.position = 'fixed';
    }

    if(buttonPressed === 'next') {
        document.getElementsByClassName('slide')[misconceptionIndex - 1].style.animationName = 'slideOutRight'
    }
    else if(buttonPressed === 'prev') {
        document.getElementsByClassName('slide')[misconceptionIndex + 1].style.animationName = 'slideOutLeft';
    }


    setTimeout(() => {
        for(let i = 0; i < document.getElementsByClassName('slide').length; i++){
            if(i !== misconceptionIndex) {
                document.getElementsByClassName('slide')[i].style.display = 'none';
                //document.getElementsByClassName('slide')[i].style.position = 'relative';
            }
        }
        if(buttonPressed === 'next') {
            document.getElementsByClassName('slide')[misconceptionIndex].style.animationName = 'slideInLeft';
        }
        else if(buttonPressed === 'prev') {
            document.getElementsByClassName('slide')[misconceptionIndex].style.animationName = 'slideInRight';
        }


        document.getElementsByClassName('slide')[misconceptionIndex].style.display = 'block';
    }, 170);
}

displayCurrentSlide();
function nextMisconception(){
    buttonPressed = 'next';
    misconceptionIndex++;
    setButtonVisibility();
    displayCurrentSlide();
}

function prevMisconception(){
    buttonPressed = 'prev';
    misconceptionIndex--;
    displayCurrentSlide();
    setButtonVisibility();
}