
import {useState} from 'react'


function DogForm({addDog}){
    let [image, setImage] = useState("")
    let [name, setName] = useState("")
    

    let handleSubmit = (e) => {
       e.preventDefault()
        fetch("http://localhost:9292/dogs", {
          method: "POST",
          headers: {
            "Content-type": "Application/json"
          },
          body: JSON.stringify({
            image, 
            name, 
            likes: 0,
          })
        })
          .then(res => res.json())
          .then(newDog => {
            addDog(newDog)
            setImage("")
            setName("")
         })
      }


    return (
        <div className="container">
          <form onSubmit={handleSubmit} className="dog-form">
            <h3>If you have a dog for adoption, make a Post!</h3>
            <input 
                type="text" 
                name="name" 
                placeholder="Dog's name..." 
                className="input-text"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
              />
            <br/>
            <input 
                type="text" 
                name="image" 
                placeholder="Dog's image URL..." 
                className="input-text"
                value={image}
                onChange={(e) => {setImage(e.target.value)}}
            />
            <br/>
            <input 
                type="submit" 
                name="submit" 
                value="Post a New Dog" 
                className="submit"
            />
          </form>
        </div>
      )
}

export default DogForm