import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen({ title }) {

    return (
 
      <div>
 
        <h1> { title } </h1>
        <Oven title="Oven" />
        <Sink title="Sink" />
 
      </div>
 
    );
 
  }
// Must export the component's function
 
export default Kitchen;