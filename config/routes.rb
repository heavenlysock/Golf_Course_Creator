Rails.application.routes.draw do


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # get '/courses', to: 'courses#render_courses'

  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'





    resources :users, only: [:index, :show, :create, :update, :destroy] do
    resources :conversations, only: [:index, :create]
  end
    resources :conversations, only: [:show, :destroy] do
    resources :messages, only: [:index, :create]
  end
    resources :messages, only: [:show, :destroy]
end