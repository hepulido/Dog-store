puts "🌱 Seeding messages..."
Dog.destroy_all

dogs = [
    {
      name: "Max",
      image: "https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png",
      likes: 0
    },
    {
      name: "kona",
      image: "https://www.freepnglogos.com/uploads/dog-png/accredited-dog-cat-daycare-boarding-dog-training-38.png",
      likes: 0
    },
    {
      name: "Yoyo",
      image: "https://www.freepnglogos.com/uploads/dog-png/dog-png-ekf-home-39.png",
      likes: 0
    },
    {
      name: "Manuel",
      image: "https://www.freepnglogos.com/uploads/dog-png/png-puppy-dog-transparent-puppy-dog-images-pluspng-31.png",
      likes: 0
    },
    {
      name: "Rex",
      image: "https://www.freepnglogos.com/uploads/dog-png/dog-png-creature-comforts-sitting-boarding-daycare-20.png",
      likes: 0
    },
    
  ]

  dogs.each do |dog_hash|
    Dog.create(dog_hash)
end

puts "woof, woof"