// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// Adicione essas linhas no topo do seu arquivo application.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importe o Slick Carousel após as linhas acima
import 'slick-carousel';
