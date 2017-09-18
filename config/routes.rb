Rails.application.routes.draw do
  namespace :api do
   resources :songs, except: [:name, :edit]
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end