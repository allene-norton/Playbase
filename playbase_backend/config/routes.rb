Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #OAuth
  namespace :api do
    namespace :v1 do
      get '/login', to: "auth#spotify_request"
      get '/auth', to: "auth#show"
      get '/user', to: "users#create"
      get '/users', to: "users#index"
      get '/users/:id', to: "users#show"
    end
  end
end
