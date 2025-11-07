import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
import { useState } from "react";


/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [selectedShow, setSelectedShow] = useState()
add function
// spread used 

remove function 
// both modify the state implementing the spread thing we learned
  
}
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={ tvShows } setSelectedShow={ setSelectedShow }/>
      </header>
      <main>
        <ShowDetails show={selectedShow}/>
      </main>
    </>
  );
}
