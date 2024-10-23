// START: The below code till the END1 will create the treeview for the frame1 items
var toggler = document.getElementsByClassName("caret");
var i;
// console.log(toggler)
for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        // console.log("we are reading", this.parentElement.querySelector(".nested"))
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}
// END1: 
// START: The below code till END2 will display the items in the frame2 based on the item selection on the frame1
let frame1_click = document.getElementsByClassName("frame1_item")
// console.log(frame1_click)
for (i = 0; i < frame1_click.length; i++) {
    frame1_click[i].addEventListener("click", function() {
        // let p = frame1_click[i]
        let p = this.textContent
        let p_und = p.replace('.', '_')
        // p here is item1.1 or item5.4
        // console.log("You have clicked on", p, p_und)
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
// function frame2_item_select() {
//     console.log("You have selected an item in frame2")

// }
// function frame2_select() {
//     const selectElement = document.getElementsByClassName("violations");
// }
// JavaScript to add classes to options based on optgroup class
var selectedValue;
var select_element;
var selectedOptions;
const selectElement = document.getElementsByClassName("violations")[0];
// const optgroups = selectElement.querySelectorAll('optgroup');
// console.log(optgroups)
// optgroups.forEach(optgroup => {
//   const className = optgroup.className;
//   const options = optgroup.querySelectorAll('option');
//   console.log("className ", className, options)
//   options.forEach(option => {
// //     option.classList.add(className);
//       console.log("prashant Please",option.classList)
//   });
// });
selectElement.addEventListener("change", (event) => {
    select_element = event.target
    // select_option = select_element.options[event.target.selectedIndex]
    selectedOptions = Array.from(event.target.selectedOptions);
    selectedOptions.forEach(option => {
        const classList = option.classList;
        console.log("Selected option classList:", classList);
    });
    // selectedValue = event.target.value;
    // console.log("Selected option:", selectedValue, event.target, event.target.label);

    // Add your code here to do something with the selectedValue
    // For example:
    // if (selectedValue === "option1") {
    //     // Do something for option 1
    // }
});

const inputElement = document.getElementById("inputBox");
console.log("entered input is: ", inputElement.value);
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


}
// END3: