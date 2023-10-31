const form = document.getElementById('form2');
const canvas2 = document.getElementById('canvas');
let countScroll = 0;

canvas2.addEventListener('mousedown', function (event){
    console.log(event.offsetX + ' ' + event.offsetY)
    const coordR = document.getElementById('coordX')

    if (!validX(coordR.value)){
        removeIfExists('errMessage')
        const formHTML = document.getElementById('form2');
        appendBeforeError('Неверно введена координата R', formHTML);
        return;
    }
    console.log(validXY(event.offsetX, event.offsetY))
    if (validXY(event.offsetX, event.offsetY)) {
        fetchToServer(convertToPixelCoord(event.offsetX, centerX),
                      convertToPixelCoord(event.offsetY, centerY),
                      convertToPixelRadius(coordR.value, radiusInPixel),
                      'AreaFormData')
    }
})

function convertToPixelCoord(coord, centerPixelCoord){
    return Math.abs(coord - centerPixelCoord)
}

function convertToPixelRadius(radius, pixelRadius){
    return radius * pixelRadius
}

function fetchToServer(X, Y, R, URL){
    const formData = new URLSearchParams()
    formData.append('X', X)
    formData.append('Y', Y)
    formData.append('R', R)
    fetch(URL, {
        method: 'POST',
        body: formData
    })
        .then((res) => {
            if (res.status !== 200){
                console.log(res.status)
                res.text().then((res)=> {
                    console.log(res)
                    // ТУТ НАДО ВЫВОДИТЬ ОШИБКУ КЛИЕНТУ
                })
            }
        })
        .catch((err) => console.warn(err))
}

function validXY(X, Y){
    return (!isNaN(X) && !isNaN(Y))
}

function checkHit(X, Y, R){
    const localRadius = radiusInPixel * R

    return ((Math.abs(X - centerX) <= localRadius && Math.abs(Y - centerY) <= localRadius && X <= centerX && Y <= centerY) ||
        ((X - centerX)**2 + (Y - centerY)**2 <= localRadius**2 && X >= centerX && Y <= centerY) ||
        (Math.abs(Y - centerY) + Math.abs(X - centerY) <= localRadius && X >= centerX && Y >= centerY))
}


// Валидация для радиуса
function validR(coordR){
    return coordR <= 3 && coordR >= -3 && coordR !== ''
}

function validX(coordX){
    return coordX <= 3 && coordX >= -3 && coordX !== ''
}

function validY(coordY){
    return coordY === -2 || coordY === -1.5 || coordY === -1 || coordY === -0.5 || coordY === 0 || coordY === 0.5
        || coordY === 1 || coordY === 1.5 || coordY === 2
}

function getRadioValueByName(elemRadio) {
    for(let i = 0; i < elemRadio.length; i++){
        if(elemRadio[i].checked)
            return elemRadio[i].value
    }
}

// form.addEventListener('submit', function (event){
//
//     event.preventDefault()
//
//     const coordX = document.getElementById('coordX')
//     const radiusR = document.getElementById('radiusR')
//     const radio = document.getElementsByName('coordY');
//
//     const coordY = getRadioValueByName(radio);
//
//     //Если вдруг кто-то уберет checked
//     if (coordY === 'undefined'){
//         removeIfExists('errMessage')
//         const formHTML = document.getElementById('form2');
//         appendBeforeError('Выберите координату Y', formHTML);
//         return;
//     }
//
//     if (!validX(coordX.value)){
//         removeIfExists('errMessage')
//         const formHTML = document.getElementById('form2');
//         appendBeforeError('Не верно введена координата X', formHTML);
//         return;
//     }
//
//
//     const formData = new FormData();
//     formData.append('coordX', parseFloat(coordX.value))
//     formData.append('coordY', coordY)
//     formData.append('radiusR', radiusR.value)
//     fetch('lab1/script.php', {
//         method: 'POST',
//         body: formData
//     }).then((res) => {
//
//         if (res.status !== 200){
//             alert(errorsList.get(res.statusText))
//             return Promise.reject(res.status)
//         }
//
//         res.json().then((res) => {
//
//             removeIfExists('errMessage')
//
//             scrollTable(res['R'], res['X'], res['Y'], res['state'], res['date'], res['time'], document.querySelectorAll('#table-out > tr'), 0, 5, countScroll)
//             countScroll++
//
//             printPoint(res['R'], res['X'], res['Y'])
//
//         })
//     }).catch((err) => console.warn(err))
//
// })


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