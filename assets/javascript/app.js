   //change class function
   function changeWidth() {
    $('#portfolio').toggleClass('col s12');
    $('#portfolio').toggleClass('col s10 offset-s2');
    $('#bio').toggleClass('col s12');
    $('#bio').toggleClass('col s10 offset-s2');
  }

$(document).ready(function() {
  $(".iconBtnClose").hide();
    changeWidth();

    $('.tabs').tabs();

  // When you click the menu icon....
  $(".iconBtn").click(function() {
    changeWidth();
    // Main menu opens by setting css property left to 0 px
    $("#mainMenu").css("left", "0px");
    //  Function to show the menu
    function showMenu() {
      $("#mainMenu").css(
        "-webkit-clip-path",
        "polygon(0 0,100% 0,100% 100%,0% 100%)"
      );
    }

    function hideIcon() {
      $(".iconBtn").hide();
      $(".iconBtnClose").show();
    }

 
    //  eases menu in
    setTimeout(showMenu, 100);
    setTimeout(hideIcon, 300);
  });

  //When you click the close button...
  $(".iconBtnClose").click(function() {
    setTimeout(changeWidth, 425);

    //  Main menu gets hidden - set back to 0%
    $("#mainMenu").css(
      "-webkit-clip-path",
      "polygon(0 0,0% 0,100% 100%,0% 100%)"
    );
    // Function to hide menu
    function hideMenu() {
      // Sets main menu css to -300px left, hiding the main menu
      $("#mainMenu").css("left", "-300px");
    }

    function hideIcons() {
      $(".iconBtn").show();
      $(".iconBtnClose").hide();
    }
    // eases menu out
    setTimeout(hideMenu, 175);
    setTimeout(hideIcons, 300);
  });
});
