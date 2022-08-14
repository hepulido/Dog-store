class ApplicationController < Sinatra::Base
    set default_content_type: "application/json"
   
    get '/dogs' do
        dogs = Dog.all 
        dogs.to_json
      end
  
      # READ
      get '/dogs/:id' do
        dog = Dog.find(params[:id])
        dog.to_json
      end
  
      #CREATE
      post '/dogs'do 
          Dog.create(params).to_json
      end
  
      #UPDATE
      patch '/dogs/:id' do 
         dog = Dog.find(params[:id])
         dog.update(likes: params[:likes])
         dog.to_json
        end
  
      #DELETE
      delete '/dogs/:id' do
        dog = Dog.find(params[:id])
        dog.destroy
        dog.to_json
      end
end



