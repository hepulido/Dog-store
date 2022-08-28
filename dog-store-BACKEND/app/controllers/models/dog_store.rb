class DogStore < ActiveRecord::Base
    has_many :dogs
end