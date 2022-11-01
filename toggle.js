        
        
        
        
        
function toggleDrop(){
    let openBurger = document.getElementById('burgerOpen');
    let closeBurger = document.getElementById('burgerClose');

    
    let dropContent = document.getElementById('dropContent');

    if(openBurger.style.display == "block"){
        dropContent.style.display = "block";
        closeBurger.style.display ="block";
        openBurger.style.display = "none"; 
    }
    else{
        dropContent.style.display = "none";
        openBurger.style.display = "block";
        closeBurger.style.display ="none";
    }
}

