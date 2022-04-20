Rails.application.routes.draw do
  
  # resources :attendances
  resources :appointments
  resources :slots
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  resources :disciplines, only: [:index, :show,:create,:update,:destroy]
  resources :attendances, only: [:index, :show,:create,:update,:destroy]
  resources :students, only: [:index, :show,:create,:update,:destroy]
  resources :appoitments, only: [:index, :show,:create,:update,:destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
