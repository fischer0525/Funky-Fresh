Rails.application.routes.draw do
  resources :roots

  namespace :api do
    namespace :v1 do
      resources :roots
    end
  end

  root 'roots#index'
end
