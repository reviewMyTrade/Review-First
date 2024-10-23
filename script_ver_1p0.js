var toggler = document.getElementsByClassName("caret");
var i;
console.log(toggler)
for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        console.log("we are reading", this.parentElement.querySelector(".nested"))
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}

let frame1_click = document.getElementsByClassName("frame1_item")
console.log(frame1_click)
for (i=0; i<frame1_click.length;i++) {
    frame1_click[i].addEventListener("click", function(){
        // let p = frame1_click[i]
        let p = this.textContent
        // p here is item1.1 or item5.4
        console.log("You have clicked on", p)
        let p1 = document.getElementsByClassName("violations")
        console.log(p1[0].innerHTML)
        let p1_inner_HTML = p1[0].innerHTML
        let j;
        p1[0].innerHTML="<option value='arjun'>Prashant BRO ye tune kya kiya? </option>\n"
        for (j=0;j<10;j++){
            let prashant_viol = p + "_" + j +"_Serious_Error_this needs_fix at any const, ok!"
        p1[0].innerHTML = p1[0].innerHTML + `<option value='arjun'> ${prashant_viol}</option>\n`
        }
    })

}