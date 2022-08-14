

export default function DogCard({dog, updateDog ,deleteDog }){
    console.log(updateDog)
    let {id, name, image, likes} = dog
    
    let handleDelete = (e) => {
       
        fetch(`http://localhost:9292/dogs/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(() => deleteDog(id))
    }

    let handleLike = () => {
        
       fetch(`http://localhost:9292/dogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                likes: likes +1
            })
    })
        .then(res => res.json())
        .then((updatedDog) => {
           updateDog (updatedDog)
           console.log(updateDog)
        })
    }

    return (
        <div className="card">
          <h2>{name}</h2>
          <img src={image} alt={name} className="dog-img" />
          <p className="likes">{likes} Likes </p>
          <button className="like-btn" onClick={handleLike}>Like </button>
          <button className="adop-btn" onClick={handleDelete}>Adopt Me</button>
        </div>
      )
}

