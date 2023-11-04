const form = document.getElementById('form2');
const canvas2 = document.getElementById('canvas');

const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text')
const popupCloseBtn = document.getElementById('close-btn-popup')

let countScroll = 0;

const errorsList = new Map([
    ['Incorrect coordinates or it isn`t number', 'Не корректно введены координаты или это не число'],
    ['Bad Request', 'Ошибка в отправленных данных']
])

function getErr(errText){
    return errorsList.get(errText) || errText
}

function setPopup(info){
    overlay.classList.add('show')
    popupText.textContent = info
    popup.style.display = 'block'
    popupCloseBtn.addEventListener('click', () => {
        overlay.classList.remove('show')
        popup.style.display = 'none'
    })
}

canvas2.addEventListener('mousedown', function (event){

    if (validPixelXY(event.offsetX, event.offsetY)) {

        fetchToServer("?X=" + convertToPixelX(event.offsetX, centerX),
                      convertToPixelY(event.offsetY, centerY),
                      1,
                      'controller').catch((err)=>{console.warn(err)})
    }

})

function convertToPixelY(coord, centerPixelCoord){
    return (centerPixelCoord - coord) / radiusInPixel
}

function convertToPixelX(coord, centerPixelCoord){
    return (coord - centerPixelCoord) / radiusInPixel
}


async function fetchToServer(X, Y, R, URL) {
    window.location.replace(URL + X + "&Y=" + Y + "&R=" + R)
    //let response = await fetch(URL + "?E=" + X + "&Y=" + Y + "&R=" + R);
    // try {
    //     let response = await fetch(URL + "?E=" + X + "&Y=" + Y + "&R=" + R); // Gets a promise
    //     // document.innerHTML = await response.text(); // Replaces body with response
    //     // if (response.status !== 200) {
    //     //     console.log(response.status)
    //     //     console.log(response)
    //     //     let text = await response.text()
    //     //     console.log(text)
    //     //     setPopup(getErr(text))
    //     // } else {
    //     //     document.open();
    //     //     document.write(await response.text());
    //     //     document.close();
    //     // }
    //     // console.log("шта")
    //     // document.open();
    //     // document.write(await response.text());
    //     // document.close();
    // } catch (err) {
    //     console.log('Fetch error:' + err); // Error handling
    // }

    // fetch(URL + "?X=" + X + "&Y=" + Y + "&R=" + R, {
    //     method: 'GET'
    // })
    //     .then((res) => {
    //
    //         if (res.status !== 200) {
    //             console.log(res.status)
    //             console.log(res)
    //             res.text().then((res) => {
    //                 console.log(res)
    //                 setPopup(getErr(res))
    //                 return Promise.reject(res)
    //             })
    //         } else {
    //             return res.text()
    //         }
    //
    //     }).then((res) => console.log(res))
    //     .catch((err) => console.warn(err))
}

function validPixelXY(X, Y){
    return (!isNaN(X) && !isNaN(Y))
}


function validY(coordY){
    if (coordY){
        return coordY >= -3 && coordY <= 5}
    return false
}

function validX(coordX){
    if (coordX){
        return coordX >= -5 && coordX <= 5}
    return false
}

function validR(coordR){
    return (coordR === 1 || coordR === 1.5 || coordR === 2 || coordR === 2.5 || coordR === 3)
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
    const coordY = document.getElementById('coordY')

    if (!validX(coordX.value) || !validY(coordY.value) || !validR(parseFloat(event.submitter.value))){
        removeIfExists('errMessage')
        const formHTML = document.getElementById('form2');
        appendBeforeError('Неверно введены координаты', formHTML);
        return;
    }
    //window.location = 'controller?X=' + coordX.value + '&Y=' + coordY.value + '&R=' + event.submitter.value
    fetchToServer("?e=" + coordX.value, coordY.value, event.submitter.value, 'controller')
        .catch((err)=>{console.warn(err)})

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
