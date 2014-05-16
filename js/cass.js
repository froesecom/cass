$(document).ready(function(){
  function start() {
    $("h1").text("Hi Cass. How are you?");
    setTimeout(hi, 4000)
  }
  function hi(){
    $("h1").text("Say hi to the girls. Give them a hug.");
    setTimeout(miss, 4000)
  }
  function miss(){
    $("h1").text("I've missed you guys a lot.");
    setTimeout(support, 4000)
  }

  function support(){
    $("h1").text("I just wanted to thank you for being so supportive.");
    setTimeout(hard, 4000)
  }
  function hard(){
    $("h1").text("I know this has been hard.");
    setTimeout(hard2, 4000)
  }
  function  hard2(){
    $("h1").text("You've done such a great job.");
    setTimeout(hero, 4000)
  }
  function  hero(){
    $("h1").text("As my dad always says about you, 'Cass is my hero'!");
    setTimeout(so, 4000)
  }
  function  so(){
    $("h1").text("You really are the best.");
    setTimeout(byron, 4000)
  }
  function  byron(){
    $("h1").text("We'll be together soon.");
    setTimeout(cant, 4000)
  }
  function  cant(){
    $("h1").text("Can't wait. Imagine us on the beach with the girls!");
    setTimeout(great, 4000)
  }
  function  great(){
    $("h1").text("It's going to be great.");
    setTimeout(thanks, 4000)
  }
  function  thanks(){
    $("h1").text("Anyway, thanks for being the best.");
    setTimeout(love, 4000)
  }
  function  love(){
    $("h1").text("I love you so much.");
    setTimeout(fadeout, 6000)
  }
   function  fadeout(){
    $("h1").fadeOut();
    
  }

  start();
  
})