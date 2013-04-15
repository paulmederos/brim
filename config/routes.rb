Brim::Application.routes.draw do

  root :to => 'pages#home'
  
  match "/portfolio" => "pages#portfolio", :as => :portfolio
  match "/library" => "pages#library", :as => :library

  match "/portfolio/cfpb-internal-tools" => "pages#cfpb-internal-tools", :as => :cfpb_internal_tools
end
