const data = {
    "text": "È un finocchio \n E \n Puzza di sborra."
}

document.getElementById("text").innerText += data.text;

function back(){
    history.back();
}