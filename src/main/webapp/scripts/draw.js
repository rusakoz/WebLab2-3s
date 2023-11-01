const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const radiusInPixel = 50;
const centerX = 151.5
const centerY = 151.5
const widthAxisY = 3
const heightAxisX = 3
draw()
function draw(){

    ctx.clearRect(0, 0, 325, 325);
    ctx.fillStyle = 'black'

    //четверть круга
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radiusInPixel, 1.55, 3.11, false)
    ctx.fillStyle = 'blue'
    ctx.fill()

    //квадрат
    ctx.beginPath()
    ctx.fillRect(centerX, centerY - radiusInPixel, radiusInPixel, radiusInPixel)

    //треугольник
    ctx.moveTo(centerX, centerY - radiusInPixel)
    ctx.lineTo(centerX - radiusInPixel/2, centerY)
    ctx.lineTo(centerX, centerY)
    ctx.fill()

    ctx.fillStyle = 'black'
    //оси
    ctx.beginPath()
    ctx.fillRect(centerX - widthAxisY/2, 25, widthAxisY, 250)
    ctx.fillRect(25, centerY - heightAxisX/2, 250, heightAxisX)

    // Y X
    ctx.font = "15px serif";
    ctx.fillText("Y", 155, 25);
    ctx.fillText("X", 275, 145);

    //верхняя стрелка
    ctx.moveTo(centerX, 27)
    ctx.lineTo(142, 35)
    ctx.moveTo(centerX, 22)
    ctx.lineTo(141, 34)
    ctx.lineTo(centerX, 27)
    ctx.fill()

    ctx.moveTo(centerX, 27)
    ctx.lineTo(162, 35)
    ctx.moveTo(centerX, 22)
    ctx.lineTo(163, 34)
    ctx.lineTo(centerX, 27)
    ctx.fill()

    //боковая стрелка
    ctx.moveTo(272, centerY)
    ctx.lineTo(264, 140)
    ctx.moveTo(276, centerY)
    ctx.lineTo(263, 139)
    ctx.lineTo(272, centerY)
    ctx.fill()

    ctx.moveTo(272, centerY)
    ctx.lineTo(264, 165)
    ctx.moveTo(276, centerY)
    ctx.lineTo(263, 164)
    ctx.lineTo(272, centerY)
    ctx.fill()

    //черточки
    ctx.fillStyle = 'black'
    ctx.fillRect(centerX - 4.5, centerY - radiusInPixel, 8, 2)
    ctx.fillRect(centerX - 4.5, centerY - radiusInPixel/2, 8, 2)
    ctx.fillRect(centerX - 4.5, centerY + radiusInPixel/2, 8, 2)
    ctx.fillRect(centerX - 4.5, centerY + radiusInPixel, 8, 2)

    ctx.fillRect(centerX - radiusInPixel, centerY - 4.5, 2, 8)
    ctx.fillRect(centerX - radiusInPixel/2, centerY - 4.5, 2, 8)
    ctx.fillRect(centerX + radiusInPixel/2, centerY - 4.5, 2, 8)
    ctx.fillRect(centerX + radiusInPixel, centerY - 4.5, 2, 8)


}


function printPoint(R, X, Y){
    draw()
    let x = 149.4 + (50 / R) * X
    let y = 149.4 + (-50 / R) * Y
    ctx.fillStyle = 'red'
    ctx.fillRect(x, y, 4, 4)

}