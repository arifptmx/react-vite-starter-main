import '../style/card.css';

const Card = ({image, name, price, afterClick}) => {
  return (
    <div className="card-container">
      <div className="image">

      </div>
      <div className="text">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div 
        className="button"
        onClick={() => {
          afterClick()
        }}
      >
        Add To Cart
      </div>
    </div>
  )
}

export default Card;