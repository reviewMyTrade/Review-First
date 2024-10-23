var toggler = document.getElementsByClassName("caret");
var i;
console.log(toggler)
for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        console.log("we are reading", this.parentElement.querySelector(".nested"))
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}

let frame1_click = document.getElementsByClassName("frame1_item")
console.log(frame1_click)
for (i = 0; i < frame1_click.length; i++) {
    frame1_click[i].addEventListener("click", function() {
        // let p = frame1_click[i]
        let p = this.textContent
        let p_und = p.replace('.','_')
        // p here is item1.1 or item5.4
        console.log("You have clicked on", p, p_und)
        // p1 reports everything present in the violations class
        let p1 = document.getElementsByClassName("violations")
        console.log("p1[0].innerHTML is ", p1[0].innerHTML)
        let p1_inner_HTML = p1[0].innerHTML
        let j;
        p1[0].classList.remove("hide_class")
        // p1[0].innerHTML = "<option value='arjun'>Prashant BRO ye tune kya kiya? </option>\n"
        // for (j = 0; j < 10; j++) {
        //     let prashant_viol = p + "_" + j + "_Serious_Error_this needs_fix at any const, ok!"
        //     p1[0].innerHTML = p1[0].innerHTML + `<option value='arjun'> ${prashant_viol}</option>\n`
        // }
        // let p2 = document.getElementsByClassName("item1_1")[0].innerHTML
        let p2 = document.getElementsByClassName("item")
        for (k=0;k<p2.length;k++) {
            p2[k].classList.add("hide_class")
        }
        document.getElementsByClassName(`${p_und}`)[0].classList.remove("hide_class")
        
        // let p2 = document.querySelectorAll(`.${p_und}`)
        // console.log("p2 is ", p2)
        // p1[0].innerHTML = p2
        // document.getElementsByClassName("item1_1")[0].classList.add("hide_class")
    })

}