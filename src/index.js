import card from "./rest-card";
import menuCard from "./menu";
import contactCard from "./contact";
import "./style.css"
function component() { 
    card();
    const tabs = document.querySelectorAll("li")
    tabs.forEach(ele => {
        ele.addEventListener("click" , () =>{
            if(ele.id=="Home"){
                card()
            }else if(ele.id == "Menu"){
                menuCard()
            }else if(ele.id == "Contact"){
                contactCard()
            }
        })
    });
}
component();
