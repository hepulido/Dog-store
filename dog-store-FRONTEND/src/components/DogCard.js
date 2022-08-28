// import [useState, useEffect] from 'react';

export default function DogCard({dog, updateDog ,deleteDog, store }){
    console.log("store: ", store);
    let {id, name, image, likes} = dog;
   
    let handleDelete = (e) => {
       fetch(`http://localhost:9292/dogs/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(() => deleteDog(id))
    }

    let handleLike = () => {

        const updateObj = {
            likes: dog.likes +1,
        };
        
       fetch(`http://localhost:9292/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(
                updateObj
           )
    })
        .then(res => res.json())
        .then((updatedDog) => {
           updateDog (updatedDog)
          
        })
    }

    return (
        <div className="card">
          <h2>{name}</h2>
          <img src={image} alt={name} className="dog-img" />
          <p className="likes">{likes} Likes </p>
          <p className="store_name">Shelter Name: {store.name}</p> 
           <p className="store_location">Shelter Locations: {store.location}</p>  
          <button className="like-btn" onClick={handleLike}>Like </button>
          <button className="adop-btn" onClick={handleDelete}>Adopt Me</button>
        </div>
      )
}

