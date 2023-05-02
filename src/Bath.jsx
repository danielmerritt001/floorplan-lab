const Bath = (props) => {
  return (  
    //Is it a problem that the ide of this is capitalized? As in, "#Full" and "#Half"
    <div id={props.size.toLowerCase()}>{props.size} Bath</div>
  );
}

export default Bath;