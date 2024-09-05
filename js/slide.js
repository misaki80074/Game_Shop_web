window.onload = function () {
    let slideIndex = 1;
    showSlide(slideIndex);

    // 控制左邊箭頭
    let prev = document.getElementById("prev");
    prev.addEventListener("click", divideSlides, false);
    // 控制右邊箭頭
    let next = document.getElementById("next");
    next.addEventListener("click", plusSlides, false);

    // 控制圓點
    const selectdot = document.querySelectorAll(".dot");
    for(let i = 0; i < selectdot.length; i++) {
        selectdot[i].addEventListener("click", function(e) {
            showSlide((slideIndex = i +1 ));
        });
    }

    // 往後看
    function plusSlides() {
        showSlide((slideIndex+=1));
    }
    // 往前看
    function divideSlides() {
        showSlide((slideIndex-=1));
    }

    // 控制移動時的顯示
    function showSlide(num) {
        let slides = document.getElementsByClassName("slide_item");
        let dots = document.getElementsByClassName("dot");
        if (num > slides.length) {
            slideIndex = 1;
        }

        if (num < 1) {
            slideIndex = slides.length;
        }

        for(let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    }

    // 自動輪播
    setInterval(function() {
        plusSlides();
    }, 3000);
};