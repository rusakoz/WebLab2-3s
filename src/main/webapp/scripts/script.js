const form = document.getElementById('form2');
const canvas2 = document.getElementById('canvas');
let countScroll = 0;

canvas2.addEventListener('mousedown', function (event){
    console.log(event.offsetX + ' ' + event.offsetY)
    const coordR = document.getElementById('coordX')
    if (!validX(coordR.value)){
        removeIfExists('errMessage')
        const formHTML = document.getElementById('form2');
        appendBeforeError('Не верно введена координата R', formHTML);
        return;
    }
    if (validXYR(event.offsetX, event.offsetY, coordR.value))
        console.log('збс')
    else {console.log('ндэ')}
})

// Валидация координат X Y
function validXYR(X, Y, R){
    const localRadius = radiusInPixel * R
    console.log(radiusInPixel)
    return ((Math.abs(X - centerX) <= localRadius && Math.abs(Y - centerY) <= localRadius && X <= centerX && Y <= centerY) ||
        ((X - centerX)**2 + (Y - centerY)**2 <= localRadius**2 && X >= centerX && Y <= centerY) ||
        (Math.abs(Y - centerY) + Math.abs(X - centerY) <= localRadius && X >= centerX && Y >= centerY))
}


// Валидация для радиуса
function validR(coordR){
    if (coordR <= 3 && coordR >= -3 && isNaN(coordR))
        return true;
}

function validX(coordX){
    if (coordX <= 3 && coordX >= -3 && coordX !== '')
        return true;
}

function validY(coordY){
    if (coordY === -2 || coordY === -1.5 || coordY === -1 || coordY === -0.5 || coordY === 0 || coordY === 0.5
        || coordY === 1 || coordY === 1.5 || coordY === 2)
        return true;
}

function getRadioValueByName(elemRadio) {
    for(let i = 0; i < elemRadio.length; i++){
        if(elemRadio[i].checked)
            return elemRadio[i].value
    }
}

form.addEventListener('submit', function (event){

    event.preventDefault()

    const coordX = document.getElementById('coordX')
    const radiusR = document.getElementById('radiusR')
    const radio = document.getElementsByName('coordY');

    const coordY = getRadioValueByName(radio);

    //Если вдруг кто-то уберет checked
    if (coordY === 'undefined'){
        removeIfExists('errMessage')
        const formHTML = document.getElementById('form2');
        appendBeforeError('Выберите координату Y', formHTML);
        return;
    }

    if (!validX(coordX.value)){
        removeIfExists('errMessage')
        const formHTML = document.getElementById('form2');
        appendBeforeError('Не верно введена координата X', formHTML);
        return;
    }


    const formData = new FormData();
    formData.append('coordX', parseFloat(coordX.value))
    formData.append('coordY', coordY)
    formData.append('radiusR', radiusR.value)
    fetch('lab1/script.php', {
        method: 'POST',
        body: formData
    }).then((res) => {

        if (res.status !== 200){
            alert(errorsList.get(res.statusText))
            return Promise.reject(res.status)
        }

        res.json().then((res) => {

            removeIfExists('errMessage')

            scrollTable(res['R'], res['X'], res['Y'], res['state'], res['date'], res['time'], document.querySelectorAll('#table-out > tr'), 0, 5, countScroll)
            countScroll++

            printPoint(res['R'], res['X'], res['Y'])

        })
    }).catch((err) => console.warn(err))

})


function removeIfExists(elemId){
    const el = document.getElementById(elemId)
    if (el) el.remove()
}

function scrollTable(R, X, Y, res, curTime, workTime, collectionElem, startCount, quantityElem, nowCount){
    if (nowCount >= startCount + quantityElem && nowCount !== startCount)
        collectionElem[0].remove()

    appendBody(R, X, Y, res, curTime, workTime)
}

function appendBeforeError(text, elemHTML) {
    const errHTML = document.createElement('h4')
    errHTML.style.color = 'red';
    errHTML.textContent = text;
    errHTML.id = 'errMessage'

    elemHTML.before(errHTML)
}

function appendBody(r, x, y, res, curTime, workTime){
    const tableOut = document.getElementById('table-out');
    const tr = document.createElement('tr')
    const one = document.createElement('td')
    one.textContent = r
    const two = document.createElement('td')
    two.textContent = x
    const three = document.createElement('td')
    three.textContent = y
    const four = document.createElement('td')
    four.textContent = res
    const five = document.createElement('td')
    five.textContent = curTime
    const six = document.createElement('td')
    six.textContent = workTime

    tableOut.append(tr)
    tr.append(one)
    tr.append(two)
    tr.append(three)
    tr.append(four)
    tr.append(five)
    tr.append(six)
}

const errorsList = new Map([
    ['Incorrect coordinates or it isn`t number', 'Не корректно введены координаты или это не число']
])