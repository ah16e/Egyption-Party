
$('#slideDown .toggle').click(function() {
    $('.inner').not($(this).next()).slideUp(600);
    $(this).next().slideToggle(600);
})


let countDownDate = new Date("June 30, 2021 00:00:00").getTime();
let y = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate = now;
    let days = Math.floor(distance / ( -1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1500 * 60 * 60 * 24)) / (1500 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = `${days} D`;
    document.getElementById('hours').innerHTML = `${hours} H`;
    document.getElementById('minutes').innerHTML = `${minutes} M`;
    document.getElementById('seconds').innerHTML = `${seconds} S`;

} , 1000);


let $count = document.getElementById('count'),
$textarea= document.getElementById('text'),
$maxLength = $textarea.getAttribute('maxlength');

$textarea.oninput = function(){
    $count.innerHTML = $maxLength - this.value.length;

}


$('.icon').on('click' , function(){
    $('#menu').animate({width:'250px'} , 50)
    $('#home').animate({marginleft: '250px'} , 50)
})

$('#clsBtn').on('click' , function(){
    $('#menu').animate({width:'0px'} , 50)
    $('#home').animate({marginleft: '0px'} , 50)

})
