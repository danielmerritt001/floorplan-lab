const Pricing = (props) => {
  return (  
    <>
      <h3>Pricing Breakdown:</h3>
      <table>
        <tr>
          <td id="first-months-rent">First Months Rent</td>
          <td id="rent" className="right">{props.rent}</td>
        </tr>
        <tr>
          <td>Deposit</td>
          <td className="right">{props.rent}</td>
        </tr>
        <tr>
          <td>Utilities Deposit</td>
          <td className="right">{props.rent/2}</td>
        </tr>
        <tr>
          <td>Pet deposit</td>
          <td className="right">+{props.rent/10}</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td id="total-price" className="right"><strong>
            {props.rent+props.rent+(props.rent/2)+(props.rent/10)}</strong></td>
        </tr>
      </table>
    </>
  );
}
 
export default Pricing;