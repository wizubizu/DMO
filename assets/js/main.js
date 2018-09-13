
// accordion
        var acc = document.getElementsByClassName("__accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
            this.classList.toggle("actives");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                } 
            });
        }
    
// custom js

// mission
var defaultHeight = 60;
var mission = $(".mission");
var textHeight = mission[0].scrollHeight;
var missionbtn = $(".missionbtn");
mission.css({"max-height": defaultHeight, "overflow": "hidden"});

missionbtn.on("click", function(){
  var newHeight = 0;
  if (mission.hasClass("active")) {
    newHeight = defaultHeight;
    mission.removeClass("active");
  } else {
    newHeight = textHeight;
    mission.addClass("active");
  }
  mission.animate({
    "max-height": newHeight
  }, 1000);
  // console.log(newHeight);
})

// custom js end


/*  gallery */
        $(document).ready(function(){

            $(".filter-button").click(function(){
                var value = $(this).attr('data-filter');
                
                if(value == "all")
                {
                    $('.filter').show('1000');
                }
                else
                {
                    $(".filter").not('.'+value).hide('3000');
                    $('.filter').filter('.'+value).show('3000');
                    
                }

                        if ($(".filter-button").removeClass("active")) {
                    $(this).removeClass("active");
                    }
                        $(this).addClass("active");
                    });
        });
        /*  end gallery */

        $(document).ready(function(){
            $(".fancybox").fancybox({
                openEffect: "none",
                closeEffect: "none"
            });
        });

        