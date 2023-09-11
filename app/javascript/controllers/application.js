import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }


// Adicione essas linhas no topo do seu arquivo application.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importe o Slick Carousel após as linhas acima
import 'slick-carousel';

// app/assets/javascripts/application.js
$(document).ready(function () {
    $("#scroll-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  });
  
