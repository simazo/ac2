Rails.application.routes.draw do
  devise_for :users

  root 'rooms#index'
  
  resources :rooms, only: %i[show] 


end
