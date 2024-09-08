const inputs = document.getElementById("inp");
const text = document.querySelector(".text");

function ADD(){
    if(inputs.value ==''){
        alert("you must write somethings")
    }
    else{
        let newElement=document.createElement("ul");
        newElement.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newElement);
        inputs.value="";
        newElement.querySelector("i").addEventListener("click",remove);
        function remove(){
            newElement.remove();
        }    
    }

}


