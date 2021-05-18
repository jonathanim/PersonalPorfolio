anime.timeline({ loop: true })
    .add({
        targets: '.ml8 .circle-white',
        scale: [0, 3],
        opacity: [1, 0],
        easing: "easeInOutExpo",
        rotateZ: 360,
        duration: 1100
    }).add({
        targets: '.ml8 .circle-container',
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: '-=1000'
    }).add({
        targets: '.ml8 .circle-dark',
        scale: [0, 1],
        duration: 1100,
        easing: "easeOutExpo",
        offset: '-=600'
    }).add({
        targets: '.ml8 .letters-left',
        scale: [0, 1],
        duration: 1200,
        offset: '-=550'
    }).add({
        targets: '.ml8 .bang',
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: '-=1000'
    }).add({
        targets: '.ml8',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1400
    });

anime({
    targets: '.ml8 .circle-dark-dashed',
    rotateZ: 360,
    duration: 8000,
    easing: "linear",
    loop: true
});


$(function () {
    $(".btnCustomExpand1").click(function () {
        $("p#btnPara1").toggle();
    });
    $(".btnCustomExpand2").click(function () {
        $("p#btnPara2").toggle();
    });
    $(".btnCustomExpand3").click(function () {
        $("p#btnPara3").toggle();
    });
    $(".btnCustomExpand4").click(function () {
        $("p#btnPara4").toggle();
    });
    $(".btnCustomExpand5").click(function () {
        $("p#btnPara5").toggle();
    });
    $(".btnCustomExpand6").click(function () {
        $("p#btnPara6").toggle();
    });

});



// trying to create a better code for the top function
// const myFunctionClick = () => {
//     let buttons = document.querySelectorAll(".card-footer > button");
//     let btnParas = document.querySelectorAll(".card-body > p");
//     let buttonsArr = []
//     let btnParasArr = []

//     for (let i = 0; i < buttons.length; i++) {
//         buttonsArr.push(buttons[i])
//         btnParasArr.push(btnParas[i])
//     }



// }



