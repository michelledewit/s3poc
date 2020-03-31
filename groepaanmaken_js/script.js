var createBtn = document.getElementById("createBtn");
createBtn.addEventListener("click", function save(){

    // save the groupname
    var groupname = document.getElementById('groupname').value;
    localStorage.setItem("Groupname", groupname); 
 

    // save groupsize min & max
    var groupsizeMin = document.getElementById('groupsizeMin').value;
    localStorage.setItem("Min", groupsizeMin); 
    
    var groupsizeMax = document.getElementById('groupsizeMax').value;
    localStorage.setItem("Max", groupsizeMax); 
    

    // save the marathon type
    var radios = document.getElementsByName('marathon');
    
    for (var i = 0, length = radios.length; i < length; i++) {

        if (radios[i].checked) {
            localStorage.setItem("Marathon", (radios[i].value));
            break;
  
        }
    }
})


