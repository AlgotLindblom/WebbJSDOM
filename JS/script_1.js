function change_bg()
{
    document.body.style.background = "cyan";
}

function show_time()
{
    const time_text = document.getElementById('time_text');
    /* Försök att dölja texten vid ett andra tryck */
    if (time_text.style.display == 'initial')
    {
        console.log("time_text attempting display: none");
        time_text.style.display = 'none';
        console.log("time_text success display: none");
    }
    /* Variabler för dagens datum */
    var currentdate = new Date();
    var datetime =currentdate.getDate() + "/" + (currentdate.getMonth()+1) + "/" + currentdate.getFullYear() + " kl. "+ currentdate.getHours() + ":" + currentdate.getMinutes() + ':' + currentdate.getSeconds();
    /* Visa rätt text och visa text. */
    time_text.innerHTML = "Det är idag: " + datetime;
    time_text.style.display = "initial";
}

function show_compliment()
{
    /* Sätt text sedan visa den. */
    const komplimang_text = document.getElementById("komplimang_text");
    komplimang_text.innerHTML = "Kom igen jag tror på dig! Du klarar detta inget problem.";
    komplimang_text.style.display = 'initial';
}

function change_img(){
    /* deklarera img variabel */
    const image = document.getElementById('img_1');
    /* If statement för att byta tillbaka */
    if (image.src.slice(-16) == "dice_six_img.png")
    {
        console.log("Attempts changing id='img_1' src to dice_one_img.png");
        image.src = "resources/dice_one_img.png";
        console.log("Success, id='img_1' src changed to dice_one_img.png");
        return
    }
    console.log("Attempts changing id='img_1' src to dice_six_img.png");
    image.src = "resources/dice_six_img.png";
    console.log("Success, id='img_1' src changed to dice_six_img.png");
    return
}

function hide_img(){
    document.getElementById('img_1').style.display = 'none';
}

function show_img(){
    document.getElementById('img_1').style.display = 'initial';
}

function make_header(){
    const header = document.getElementById('Header-Div');
    if (header.className == "flex column"){
        header.className = header.className + " header";
        console.log(header.className);
        return
    }
    header.className = header.className.slice(0, -7);
    console.log(header.className);
}

function remove_header(){
    const header = document.getElementById('Header-Div');
    header.style.display = "none";
    
}

function show_header(){
    const header = document.getElementById('Header-Div');
    header.style.display = "flex";
    header.style.flexDirection = "column";
}