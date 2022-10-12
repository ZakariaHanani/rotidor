window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
    document.getElementById("header").style.padding = "5px 10px";
    document.getElementById("header").style.background=  "rgba(253, 253, 253, 0.89)";
    document.getElementById("logo").style.maxWidth=  "90px";
    document.getElementById("logo").style.marginLeft=  "10px";
    document.getElementById("header-right").style.marginTop=  "20px";
    document.getElementById("prg").style.color=  "rgba(255, 255, 255, 0)";

  } else {
    document.getElementById("header").style.padding = "5px 10px";
    document.getElementById("header").style.background=  "rgba(253, 253, 253, 0.98)";
    document.getElementById("logo").style.maxWidth=  "90px";
    document.getElementById("logo").style.marginLeft=  "10px";
    document.getElementById("header-right").style.marginTop=  "20px";
    document.getElementById("prg").style.color=  "rgba(255, 255, 255, 0.98)";
    
  }
}
  //----------------------------------------------------------------------------
 