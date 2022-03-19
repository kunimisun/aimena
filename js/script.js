let num = [10, 10, 10, 10, 10];
let timerid = [NaN, NaN, NaN, NaN, NaN];



function start(n) {
    if (isNaN(timerid[n])) {
        if(num[n]==0){
            num[n]=10;
            document.getElementById("suuti" + n).textContent = showtime(num[n]);
        }
        timerid[n] = setInterval(() => {
            console.log(n)
            num[n]--;
            if (num[n] == 0) {
                clearInterval(timerid[n]);
                timerid[n] = NaN;
            }
            document.getElementById("suuti" + n).textContent = showtime(num[n]);
        }, 1000)
    }
}
function stop(n) {
    clearInterval(timerid[n]);
    timerid[n] = NaN;
}

function reset(n) {
    clearInterval(timerid[n]);
    timerid[n] = NaN;
    num[n] = 10;
    document.getElementById("suuti" + n).textContent = showtime(num[n]);
}
function showtime(i) {
    var min = Math.floor(i / 60);
    var sec = i % 60;
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    return min + ":" + sec
}













                    $('.slider').slick({
                        // autoplay:true,
                        // autoplaySpeed:5000,
                        dots:true,
                        slidesToShow:4,
                        slidesToScroll:1,
                        responsive:[
                                        {
                                            breakpoint: 1024,
                                            settings:{
                                                slidesToShow:3,
                                            }
                                        },
                                        {
                                            breakpoint: 768,
                                            settings:{
                                                slidesToShow:2,
                                            }
                                        },
                                        {
                                            breakpoint: 480,
                                            settings:{
                                                slidesToShow:1,
                                            }
                                        },
                                    ]
                                });