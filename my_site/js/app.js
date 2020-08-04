let imgNum = 1

function changePic(){
    let picHolder = document.getElementById("pic")
    let s =  "images/" + imgNum + ".jpg"
     picHolder.src = s
     console.log(s)
}

function left(){
    imgNum = imgNum - 1
    if(imgNum == 0){
        imgNum = 5
    }
    changePic()
}

function right(){
    imgNum = imgNum + 1
    if(imgNum == 6){
        imgNum = 1
    }
    changePic()
}

document.getElementById("left").addEventListener("click",left)
document.getElementById("right").addEventListener("click",right)