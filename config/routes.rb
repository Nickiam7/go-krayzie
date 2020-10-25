Rails.application.routes.draw do
  resources :songs
  resources :albums

  root to: 'dashboards#dashboard'  
end
