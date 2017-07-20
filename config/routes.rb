Rails.application.routes.draw do
  resources :roots

  namespace :api do
    namespace :v1 do
      resources :buys
    end
  end

  namespace :api do
    namespace :v1 do
      resources :contributors
    end
  end

  namespace :api do
    namespace :v1 do
      resources :events
    end
  end

  namespace :api do
    namespace :v1 do
      resources :news
    end
  end

  namespace :api do
    namespace :v1 do
      resources :products
    end
  end

  namespace :api do
    namespace :v1 do
      resources :contacts
    end
  end

  root 'roots#index'
end
