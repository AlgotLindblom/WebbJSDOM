function change_img(){
    /* if (document.getElementsById('img_1').src == "../resources/dice_one_img.png")
    {
        document.getElementsById('img_1').src = "../resources/dice_six_img.png";
        return
    } */
    console.log(document.getElementsById('img_1').src)
    document.getElementsId('img_1').src = "../resources/dice_six_img.png";
}

function hide_img(){
    document.getElementById('bild_calle').style.display = 'none';
}

function show_img(){
    document.getElementById('bild_calle').style.display = 'initial';
}