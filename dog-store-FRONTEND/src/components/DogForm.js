
import {useState} from 'react'


function DogForm({addDog}){
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    
  });
   
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

    let handleSubmit = (e) => {
       e.preventDefault()
        
       const newDog = {
        ...formData,
        likes: 0,
        dog_store_id: 6,
      };
       
      fetch("http://localhost:9292/dogs", {
          method: "POST",
          headers: {
            "Content-type": "Application/json"
          },
          body: JSON.stringify(newDog),
        })
          .then(res => res.json())
          .then(newDog => {
            setFormData({
              name: "",
              image: "",
              dog_store_id:""
              
            });
            addDog(newDog);
         });
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
                onChange={handleChange}
                value={formData.name}
              />
            <br/>
            <input 
                type="text" 
                name="image" 
                placeholder="Dog's image URL..." 
                className="input-text"
                value={formData.image}
                onChange={handleChange}
            />
            <br/>
            {/* <input 
                type="text" 
                name="dog_store_id" 
                placeholder="Store ID" 
                className="input-text"
                value={formData.dog_store_id}
                onChange={handleChange}
            /> */}
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