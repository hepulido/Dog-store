
import DogCard from './DogCard'

 function DogContainer({dogs, updateDog , deleteDog}){
  console.log(updateDog)
   return(
        <div id="dog-cards">
            {dogs.map((dog)=>(
              <DogCard 
              dog={dog}
               key={dog.id} 
               updateDog={updateDog} 
               deleteDog={deleteDog}
               />
              ))} 
        </div>
      
      );
      
    }

    export default DogContainer