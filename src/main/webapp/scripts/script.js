const form = document.getElementById('form2');
const canvas2 = document.getElementById('canvas');

canvas2.addEventListener('mousedown', function (event){

    if (validPixelXY(event.offsetX, event.offsetY)) {

        sendToServer(convertPixelToCoordX(event.offsetX, centerX),
                      convertPixelToCoordY(event.offsetY, centerY),
                      1,
                      'controller')
            .catch((err)=>{console.warn(err)})
    }

})

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

    sendToServer(coordX.value, coordY.value, event.submitter.value, 'controller')
        .catch((err)=>{console.warn(err)})

})

function convertPixelToCoordY(coord, centerPixelCoord){
    return (centerPixelCoord - coord) / radiusInPixel
}

function convertPixelToCoordX(coord, centerPixelCoord){
    return (coord - centerPixelCoord) / radiusInPixel
}


async function sendToServer(X, Y, R, URL) {
    window.location.replace(URL + "?X=" + X + "&Y=" + Y + "&R=" + R)


    // try {
    //     let response = await fetch(URL + "?X=" + X + "&Y=" + Y + "&R=" + R);
    //     // document.innerHTML = await response.text();
    //     // if (response.status !== 200) {
    //     //     let text = await response.text()
    //     //     setPopup(getErr(text))
    //     // } else {
    //     //     document.open();
    //     //     document.write(await response.text());
    //     //     document.close();
    //     // }
    //     // document.open();
    //     // document.write(await response.text());
    //     // document.close();
    // } catch (err) {
    //     console.log('Fetch error:' + err);
    // }

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


function removeIfExists(elemId){
    const el = document.getElementById(elemId)
    if (el) el.remove()
}

function appendBeforeError(text, elemHTML) {
    const errHTML = document.createElement('h4')
    errHTML.textContent = text;
    errHTML.id = 'errMessage'

    elemHTML.before(errHTML)
}

