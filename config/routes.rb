Brim::Application.routes.draw do

  root :to => 'pages#home'
  
  match "/portfolio" => "pages#portfolio", :as => :portfolio
end
