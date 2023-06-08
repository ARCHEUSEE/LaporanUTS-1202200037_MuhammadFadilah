window.onscroll = function() {scrollFunction()}; 
    function scrollFunction() {
       if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
         document.getElementById("scroll-btn").style.display = "block";
       } else {
         document.getElementById("scroll-btn").style.display = "none";
       }
     }
          
     // ketika tombol tersebut di klik, maka lakukan scroll keatas laman
     function topFunction() {
       document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
     }

     let index = 0;
     displayImages();
     function displayImages() {
       let i;
       const images = document.getElementsByClassName("image");
       for (i = 0; i < images.length; i++) {
         images[i].style.display = "none";
       }
       index++;
       if (index > images.length) {
         index = 1;
       }
       images[index-1].style.display = "block";
       setTimeout(displayImages, 2000); 
     }