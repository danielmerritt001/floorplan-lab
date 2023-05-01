const Bedroom = (props) => {
  return ( 
    <div className={"bed-" + props.bedNum} >Bedroom {props.bedNum}</div>
  );
}

export default Bedroom;