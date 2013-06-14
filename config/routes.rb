Brim::Application.routes.draw do

  root :to => 'pages#home'
  
  match "/portfolio" => "pages#portfolio", :as => :portfolio
  match "/library" => "pages#library", :as => :library

  match "/portfolio/cfpb-internal-tools" => "pages#cfpb-internal-tools", :as => :cfpb_internal_tools
  match "/portfolio/cfpb-strategic-plan" => "pages#cfpb-strategic-plan", :as => :cfpb_strategic_plan
  match "/portfolio/cfpb-consumer-complaints" => "pages#cfpb-consumer-complaints", :as => :cfpb_consumer_complaints
  match "/portfolio/cfpb-paying-for-college" => "pages#cfpb-paying-for-college", :as => :cfpb_paying_for_college

  match "/portfolio/fosterly" => "pages#fosterly", :as => :fosterly

  match "/google" => "pages#google", :as => :google
  match "/portfolio/trendpo" => "pages#trendpo", :as => :trendpo
end
