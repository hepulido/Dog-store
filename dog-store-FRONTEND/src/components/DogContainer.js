
import DogCard from './DogCard'

 function DogContainer({dogs, updateDog , deleteDog}){

   return(
        <div id="dog-cards">
            {dogs.map((dog)=>(
              <DogCard 
               key={dog.id} 
               dog={dog}
               updateDog={updateDog} 
               deleteDog={deleteDog}
               store={dog.dog_store}
                />
              ))} 
        </div>
      
      );
      
    }

    export default DogContainer