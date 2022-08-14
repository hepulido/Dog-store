import {React, useState, useEffect} from 'react'
import DogNav from '../components/DogNav'
import DogForm from '../components/DogForm'
import DogContainer from '../components/DogContainer'
import "./Dog.css"

export default function Dog() {
  const [display, setDisplay] = useState(false)
  const [dogs, setDogs] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:9292/dogs")
      .then(res => res.json())
      .then(dogsArr => {
        setDogs(dogsArr)
       })
   }, [])

    let addDog = (newDog) => {
    let newDogsArr = [...dogs, newDog]
    setDogs(newDogsArr)
    }

    let updateDog = (updatedDog) => {
      let updatedDogsArr = dogs.map(dog => {
         if(dog.id === updatedDog.id){
           return updatedDog
        } else {
          return dog
      }
    })
     setDogs(updatedDogsArr)
  }
   console.log(updateDog)
  let deleteDog = (dogId) => {
    let deletedDogsArr = dogs.filter(dog => dog.id !== dogId)
    setDogs(deletedDogsArr)
  }
 
  return (
    <>
    <DogNav/>
    { display ? <DogForm addDog={addDog} /> : null }
    <div className="buttonContainer">
      <button onClick={() => setDisplay(!display)}> Add a Dog </button>
    </div>
    <DogContainer dogs={dogs} updateDoy={updateDog} deleteDog={deleteDog}/>
  </>
  )
}
