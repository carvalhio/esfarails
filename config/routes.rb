Rails.application.routes.draw do
  resources :events
  root 'home#index'
  get 'home/about'

end
