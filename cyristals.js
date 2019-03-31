var win=lose=0
var total = 0
function commonNum() {
    var r = Math.floor(Math.random() * 120) + 19
    return r
}

var arr = [];
function randomNum() {
    for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * 20) + 1
        while (arr.indexOf(num) != -1) {
            num = Math.floor(Math.random() * 20) + 1
        }
        arr.push(num)
        let id = "#" + i
        $(id).attr("data-num", arr[i])

    }

}

var a = commonNum()
$("#random-num").html(a)
randomNum()
console.log(arr)
function reset(){
    total=0;
    a=commonNum()
    $("#random-num").html(a)

}

$(".cyrstals-image").on("click", function () {
    total += parseInt($(this).attr("data-num"))
    $(".total-score-num").html(total)


if(total==a){
    win++
    $("#wins").html(win)
    $("#result").html("You won!")
    reset()
}
else if(total>a){
    lose++
    $("#lose").html(lose)
    $("#result").html("you lose!")
    reset()
}
})
$("#random-num").css({"color": "#8D007F", "font-size": "40px"});