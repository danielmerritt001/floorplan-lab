import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (  
    <div id="kitchen">
      <Oven />
      <Sink />
      <p id="p-kitchen">
      Kitchen
      </p>
    </div>
  );
}
 
export default Kitchen;