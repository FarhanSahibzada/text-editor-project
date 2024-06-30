
function num(e) {
     const area = document.getElementById("area");
    let values = e.value;
    
area.style.fontSize = values +"px";
}



function font(e){
    const area = document.getElementById("area");
    if (e.target.id === "bold"){
        
        
        area.classList.toggle("bold")
        //  if (area.style.fontWeight == "bold"){
            

            //  area.style.fontWeight = "normal";
            
            //  }else {
                //      area.style.fontWeight = "bold";
                //  }
                
            }else if(e.target.id === "italic"){
                
                area.classList.toggle("italic")
                
            }
            else if(e.target.id === "underline"){

        area.classList.toggle("underline")
        
            }
            
            else if(e.target.id === "uperunderline"){
                
                area.classList.toggle("linethrough")
                
            }
            else if( e.target.id === "left" ){
                
                area.style.textAlign = "left";
                
            }
            else if( e.target.id === "center" ){
                
                area.style.textAlign = "center";
                
            }
            else if( e.target.id === "right" ){
                
                area.style.textAlign = "right";
                
            }
            else if (e.target.id == "capital"){
                area.classList.toggle("cap")
            }
        }
        
        
        let action = document.getElementById("action");
        
        action.addEventListener("click",font)
            


// function bold(e) {
    
//      const area = document.getElementById("area");

// if (area.style.fontWeight == "bold"){


// area.style.fontWeight = "normal";

// }else {
//     area.style.fontWeight = "bold";
// }

// }


