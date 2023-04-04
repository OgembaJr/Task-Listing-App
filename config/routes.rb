Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tasks
      resources :users, only: [:create, :index]
      post '/login', to: 'sessions#create'
      get '/login', to: 'sessions#new' # Add this line
      get '/profile', to: 'users#profile'
    end
  end

  # Add a catch-all route to serve the React app
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
