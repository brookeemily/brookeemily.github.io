$(document).ready(function(){
  showMenuIcon();
  $("#menuButton").click(function(){
    showCloseIcon();
    $("#MainMenu").css("left","0px");
    
    function showMenu(){
      $("#MainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,100% 100%,0% 100%)");
      //  $("#MenuIcon").animate({right:'-100'},300);
    }
    setTimeout(showMenu,100);
    setTimeout(changeBg, 350);
  });
   
   $("#closeButton").click(function(){
      showMenuIcon();
           $("#MainMenu").css("-webkit-clip-path","polygon(0 0,0% 0,100% 100%,0% 100%)");
           function hideMenu(){
                   $("#MainMenu").css("left","-300px");
              //  $("#MenuIcon").animate({right:'50'},300);
           }
       setTimeout(hideMenu,300);
       
       function originalLayout(){
           $("#MainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,0% 100%,0% 100%)");
       }
       setTimeout(originalLayout,600);
       setTimeout(resetBg, 600);
      });
});

function showMenuIcon() {
  $("#menuButton").show();
  $("#closeButton").hide();
}

function showCloseIcon() {
  $("#closeButton").show();
  $("#menuButton").hide();
}

function changeBg() {
  $("#content").css('background-color', 'rgb(11, 3, 21)');
  $("body").css('background-color', 'rgb(11, 3, 21)');
}


function resetBg() {
  $("#content").css('background-color', 'rgb(27, 4, 34)');
  $("body").css('background-color', 'rgb(27, 4, 34)');

}