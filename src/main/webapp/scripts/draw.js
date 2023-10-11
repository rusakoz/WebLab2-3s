const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
draw()
function draw(){

    ctx.clearRect(0, 0, 350, 350);
    ctx.fillStyle = 'black'
    //оси
    ctx.beginPath()
    ctx.fillRect(150, 25, 3, 250)
    ctx.fillRect(25, 150, 250, 3)

    // Y X
    ctx.font = "15px serif";
    ctx.fillText("Y", 155, 25);
    ctx.fillText("X", 275, 145);

    //верхняя стрелка
    ctx.moveTo(151.5, 27)
    ctx.lineTo(142, 35)
    ctx.moveTo(151.5, 22)
    ctx.lineTo(141, 34)
    ctx.lineTo(151.5, 27)
    ctx.fill()

    ctx.moveTo(151.5, 27)
    ctx.lineTo(162, 35)
    ctx.moveTo(151.5, 22)
    ctx.lineTo(163, 34)
    ctx.lineTo(151.5, 27)
    ctx.fill()

    //боковая стрелка
    ctx.moveTo(272, 151.5)
    ctx.lineTo(264, 140)
    ctx.moveTo(276, 151.5)
    ctx.lineTo(263, 139)
    ctx.lineTo(272, 151.5)
    ctx.fill()

    ctx.moveTo(272, 151.5)
    ctx.lineTo(264, 165)
    ctx.moveTo(276, 151.5)
    ctx.lineTo(263, 164)
    ctx.lineTo(272, 151.5)
    ctx.fill()

    //четверть круга
    ctx.beginPath()
    ctx.moveTo(152, 150)
    ctx.arc(150, 150, 50, 4.76, 0, false)
    ctx.fillStyle = 'blue'
    ctx.fill()

    //квадрат
    ctx.beginPath()
    ctx.fillRect(100, 100, 50, 50)

    //треугольник
    ctx.moveTo(200, 152.5)
    ctx.lineTo(152.5, 200)
    ctx.lineTo(152.5, 152.5)
    ctx.fill()

    //черточки
    ctx.fillStyle = 'black'
    ctx.fillRect(147, 100, 8, 2)
    ctx.fillRect(147, 125, 8, 2)
    ctx.fillRect(147, 175, 8, 2)
    ctx.fillRect(147, 198, 8, 2)

    ctx.fillRect(100, 147, 2, 8)
    ctx.fillRect(125, 147, 2, 8)
    ctx.fillRect(175, 147, 2, 8)
    ctx.fillRect(198, 147, 2, 8)


}


function printPoint(R, X, Y){
    draw()
    let x = 149.4 + (50 / R) * X
    let y = 149.4 + (-50 / R) * Y
    ctx.fillStyle = 'red'
    ctx.fillRect(x, y, 4, 4)

}