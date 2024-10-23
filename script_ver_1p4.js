// START: The below code till the END1 will create the treeview for the frame1 items
var toggler = document.getElementsByClassName("caret");
var i;
// console.log(toggler)
for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        // console.log("we are reading", this.parentElement.querySelector(".nested"))
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
        //To disable the add waiver button once violation type is clicked ex. item1, item2
        disable_add_waiver();
        disable_input_box(true, "Please select the proper violation type items");
    });
}
// END1: 

// START: The below code till END2 will display the items in the frame2 based on the item selection on the frame1
let frame1_click = document.getElementsByClassName("frame1_item")
// console.log(frame1_click)
for (i = 0; i < frame1_click.length; i++) {
    frame1_click[i].addEventListener("click", function() {
        //To disable the add waiver button once violation item in frame1 is clicked Ex. item1.1
        disable_add_waiver();
        disable_input_box(true, "Please select the violation from the error window");
        // let p = frame1_click[i]
        let p = this.textContent
        let p_und = p.replace('.', '_').replace(/\[.*/,"").trim()
        // p here is item1.1 or item5.4
        console.log("You have clicked on", p, p_und, "ok")
        // p1 reports everything present in the violations class
        let p1 = document.getElementsByClassName("violations")
        // console.log("p1[0].innerHTML is ", p1[0].innerHTML)
        let p1_inner_HTML = p1[0].innerHTML
        let j;
        p1[0].classList.remove("hide_class")
        let p2 = document.getElementsByClassName("item")
        for (k = 0; k < p2.length; k++) {
            p2[k].classList.add("hide_class")
        }
        document.getElementsByClassName(`${p_und}`)[0].classList.remove("hide_class")
    })

}
// END2


// START: The below code till END3 will display the functionality of the add waiver button
// JavaScript to add classes to options based on optgroup class
var selectedValue;
var select_element;
var selectedOptions;
// This code will display the selcted items from the frame2
const selectElement = document.getElementsByClassName("violations")[0];
selectElement.addEventListener("change", (event) => {
    select_element = event.target
    selectedOptions = Array.from(event.target.selectedOptions);
    selectedOptions.forEach(option => {
        const classList = option.classList;
        console.log("Selected option classList:", classList);
    });
    //To disable the add waiver button once violation in frame2 is clicked
    disable_add_waiver()
    disable_input_box(false, "Please provide the proper Justification and click on Add/Delete waiver button")
});

const inputElement = document.getElementById("inputBox");
console.log("entered input is outside: ", inputElement.value);
// const selectedButton = document.getElementsByClassName("btn_main")
function change_color(button) {
    const classList12 = button.classList;
    console.log("Clicked button classes:", classList12);
    console.log("button", button)
    button.style.backgroundColor = "red";
    setTimeout(() => {
        button.style.backgroundColor = "#010e1c";
    }, 100);
}



function add_waiver_clicked() {
    // document.getElementsByClassName("btn_frame4")
    // Reset after 100 milliseconds (0.1 seconds)
    // }

    console.log("add waiver is clicked !!", selectedValue, select_element)
    console.log("selected_option is: ", selectedOptions)
    selectedOptions.forEach(option => {
        // const classList = option.classList;
        option.classList.add("green_class")
    });
    // select_option.classList.add("green_class")
    // const inputElement = document.getElementById("inputBox");
    console.log("entered input is: ", inputElement.value);

    //To disable the add waiver button once add waiver is clicked
    disable_add_waiver()
    //To disable the input box once add waiver is clicked
    disable_input_box(true, "Please select the violation from the error window")
}
// END3:
// START: code till the END4 will be on adding valid comment and enabling the add_waiver GamepadButton
let inputsProvided = document.getElementById('inputBox')
inputsProvided.addEventListener('input', function() {
    // console.log("inside function: ", inputsProvided.value)
    document.getElementById("addWaiver").classList.remove("hide_button")
    document.getElementById("addWaiver").classList.add("show_button")
    if (inputsProvided.value.trim() == '') {
        //To disable the add waiver button if proper justification is empty
        disable_add_waiver()
    }
});

function disable_add_waiver() {
    document.getElementById("addWaiver").classList.add("hide_button")
    document.getElementById("addWaiver").classList.remove("show_button")
}
function disable_input_box(value1, comment) {
    inputElement.value = ''
    document.getElementById("inputBox").disabled = value1;
    document.getElementById("inputBox").placeholder = comment;
}
// END4:

// START: code till END5 Add violation number to the frame1 and frame3 buttons
const violationCat = document.getElementsByClassName("caret")
for (i = 0; i < violationCat.length; i++) {
    let violationType = violationCat[i].parentElement.getElementsByClassName("nested")[0].innerText.trim().replace('\n', '').replace(/\s+/g, ' ').split(/\s+/)
    for (j = 0; j < violationType.length; j++) {
        // console.log("violation type is: ", violationType[j], violationCat[i].innerText)
        let lengthViolationType = document.getElementsByClassName(violationType[j]).length - 1;
        // console.log("length of element with: ", violationType[j], " is ", lengthViolationType)
        document.querySelectorAll('.frame1_item').forEach(ele => {
            if (ele.innerText == violationType[j]) {
                // console.log("we got the innerText: ", lengthViolationType, ele.innerText, ele.innerHTML, ele)
                ele.innerHTML = violationType[j] + "&nbsp;[" + lengthViolationType + "]"
                // console.log("2 we got the innerText: ", ele.innerText, ele.innerHTML)
            }
        });
    }
}
// END5: