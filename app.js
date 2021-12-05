function showPass2(e) {
    var passInp = document.getElementById("passInp")

    if (e.className == "fas fa-eye myicon") {
        passInp.type = "text"
        e.className = "fas fa-eye-slash"

    } else {
        passInp.type = "password"
        e.className = "fas fa-eye myicon"
    }

    // console.log(e);

}
function showPass1(e) {
    var passInp1 = document.getElementById("passInp1")

    if (e.className == "fas fa-eye myicon") {
        passInp1.type = "text"
        e.className = "fas fa-eye-slash"

    } else {
        passInp1.type = "password"
        e.className = "fas fa-eye myicon"
    }

    
}


//darkmode
function darkMode(e){
    
    var body = document.getElementById("body")
    var input = document.getElementsByTagName("input")
    console.log(input);
    if(e.innerHTML =="Dark Mode"){
        body.style.backgroundColor="#181816"
        body.style.color= "white"
        e.innerHTML="Light Mode"
        for(var i =0; i<input.length; i++){
            input[i].style.backgroundColor="#181816"
            input[i].style.borderBottomColor="white"

        }
    }else{
        body.style.background= "white"
        body.style.color= "black"
        e.innerHTML="Dark Mode"
        for(var i =0; i<input.length; i++){
            input[i].style.backgroundColor="white"
            input[i].style.borderBottomColor="black"

        }
    }


}