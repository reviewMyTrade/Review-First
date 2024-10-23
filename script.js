// START: The below code till the END1 will create the treeview for the frame1 items
var toggler = document.getElementsByClassName("caret");
var i;
// console.log(toggler)
for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        // console.log("we are reading", this.parentElement.querySelector(".nested"))
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
        higlight_selected(this)
        // this.classList.toggle("gray_class");
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
        higlight_selected(this)
        let p = this.textContent
        let p_und = p.replace('.', '_').replace(/\[.*/, "").trim()
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
    let className1All = selectedOptions[0].className.split(' ')[0];
    let className1Waived = selectedOptions[0].className;
    let count_all1 = document.getElementsByClassName(className1All).length - 1;
    let count_waived1 = document.getElementsByClassName(className1Waived).length;
    let count_unwaived1 = count_all1 - count_waived1;
    console.log("selected_option classname is: ", className1All);
    console.log("entered input is: ", inputElement.value);
    console.log("number is :", count_all1, count_waived1, count_unwaived1,);
    document.getElementById("all").innerHTML = "ALL [" + count_all1 + "]";
    document.getElementById("waived").innerHTML = "Waived [" + count_waived1 + "]";
    document.getElementById("unwaived").innerHTML = "Un-Waived [" + count_unwaived1 + "]";



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
    let lengthViolationCat = 0;
    let violationType = violationCat[i].parentElement.getElementsByClassName("nested")[0].innerText.trim().replace('\n', '').replace(/\s+/g, ' ').split(/\s+/)
    for (j = 0; j < violationType.length; j++) {
        // console.log("violation type is: ", violationType[j], violationCat[i].innerText)
        let lengthViolationType = document.getElementsByClassName(violationType[j]).length - 1;
        if (lengthViolationType == -1) {
            lengthViolationType = 0;
        }
        lengthViolationCat = lengthViolationCat + lengthViolationType;
        // console.log("length of element with: ", violationType[j], " is ", lengthViolationType)
        document.querySelectorAll('.frame1_item').forEach(ele => {
            if (ele.innerText == violationType[j]) {
                // console.log("we got the innerText: ", lengthViolationType, ele.innerText, ele.innerHTML, ele)
                ele.innerHTML = violationType[j] + " [" + lengthViolationType + "]"
                // console.log("2 we got the innerText: ", ele.innerText, ele.innerHTML)
            }
        });
    }
    // console.log("cat length is: ", lengthViolationCat)
    violationCat[i].innerHTML += " [" + lengthViolationCat + "]"

}
function higlight_selected(first) {
    document.querySelectorAll(".gray_class").forEach(ele => {
        ele.classList.toggle('gray_class')
    })
    first.classList.toggle("gray_class");
}


// Violations count for the frame3
// let frame1_clicked = document.querySelectorAll('.caret, .nested')
let frame1_cat_clicked = document.querySelectorAll('.caret')
let frame1_vio_clicked = document.querySelectorAll('.frame1_item')
for (i = 0; i < frame1_cat_clicked.length; i++) {
    frame1_cat_clicked[i].addEventListener("click", function() {
        length1 = parseInt(this.innerHTML.replace(/.*\[/g, '').replace(/\]$/g, '').trim())
        console.log("frame1_clicked is: ", this.innerText, length1, (typeof length1))
        document.getElementById('all').innerHTML = "All [" + length1 + "]"
        document.getElementById('waived').innerHTML = "Waived" // [" + length1 + "]"
        document.getElementById('unwaived').innerHTML = "Un-Waived" // [" + length1 + "]"
        console.log("ID:", this.parentElement.id ,"ok", this.parentElement);
        document.getElementsByClassName('[class*="`${this.parentElement.id}`")')
        
    });
}
for (i = 0; i < frame1_vio_clicked.length; i++) {
    frame1_vio_clicked[i].addEventListener("click", function() {
        length2 = parseInt(this.innerHTML.replace(/.*\[/g, '').replace(/\]$/g, '').trim())
        // console.log("frame1_vio_clicked is: ", this.innerText, length2, (typeof length2))
        let all_count = length2
        document.getElementById('all').innerHTML = "All [" + length2 + "]"
        let classname_p2 = this.innerHTML.replace(/\[.*/g, '').replace(/\]$/g, '').trim()
        // console.log("finally p2 is :", classname_p2)
        let waived_class = classname_p2 + " green_class";
        let waived_count = document.getElementsByClassName(waived_class).length;
        // console.log("This will be good 5:", document.getElementsByClassName(waived_class).length, waived_class);
        let unwaived_count = all_count - waived_count;
        // console.log("all_count is: ", all_count)
        // console.log("waived_count is: ", waived_count)
        // console.log("unwaived_count is: ", unwaived_count)
        document.getElementById('waived').innerHTML = "Waived [" + waived_count + "]"
        document.getElementById('unwaived').innerHTML = "Unwaived [" + unwaived_count + "]"
    });
}

// document.getElementById('all')
// END5: