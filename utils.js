$(function (){
    $(window).scroll(function (){
        let scrollY = $(document).scrollTop();
        console.log(scrollY);

        if (scrollY>200){
            $('#nav').slideDown(300)
        }else {
            $('#nav').slideUp(300)
        }
    })

    $('.nav-sun').click(function (){
        $('.nav-sun').toggleClass('icon-yueliang');
    })

    const anniu = document.getElementById('heibai');
    const main = document.getElementById('main');
    let temp = 1;
    anniu.addEventListener('click',function(){
        if(temp===1){
            temp=0;
            main.style. backgroundColor= 'rgb(7, 7, 29)';
            main.style.color = 'white';
        }else{
            temp=1;
            main.style.backgroundColor= 'white';
            main.style.color = 'black';
        }
    })

})






