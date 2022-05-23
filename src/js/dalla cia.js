const data = {
    "text": "È un bislungo."
}

document.getElementById("text").innerText += data.text;

function back(){
    history.back();
}