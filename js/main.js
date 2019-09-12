document.querySelector("#activate-flight").addEventListener("click",
function flightHandlerFunction() {
    let flightSection = document.querySelector("#flight");
    flightSection.classList.remove("disabled");
    flightSection.classList.add("enabled");
})

document.querySelector("#activate-mindreading").addEventListener("click",
function mindReadingFunction() {
    let mindReadingSection = document.querySelector("#mindreading");
    mindReadingSection.classList.remove("disabled");
    mindReadingSection.classList.add("enabled");
} )

document.querySelector("#activate-xray").addEventListener("click",
function xrayFunction () {
    let xraySection = document.querySelector("#xray")
    xraySection.classList.remove("disabled")
    xraySection.classList.add("enabled")


}
)

//CANT FIGURE OUT HOW TO DO THE FOLLOWING INSTRUCTIONS:

//Once that is complete, add two more buttons
// Enable All Powers
// Disable All Powers
// Write two more event handlers for activating and 
// deactivating all powers when the corresponding buttons are clicked. 
// You will need to use the document.querySelectorAll() method for these.
let allSections = document.querySelectorAll(".kapow")

document.querySelector("#activate-all").addEventListener("click", function activateAll() {
    
//     allSections.forEach(section) =>{ console.log(section);}
document.querySelectorAll(".kapow").classList.remove("disabled")
        allSections.classList.add("enabled")
}
);

// document.querySelector("#deactivate-all").addEventListener("click", function disableAll(){
//     let allSections = document.querySelectorAll(".power")
//     allSections.forEach(section)=>{
//       section.classList.remove("enabled")
//       section.classList.add("disabled")
    
//   }
//   )