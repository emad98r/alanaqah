import "./section-style.scss";
import NewArrivedData from "../Data/NewArrivedData";
import Button from "../Components/Buttons/Button";
import Title from "../Components/Titles/Title";

function NewArrived() {
  return (
    <div className="home-sections">
      <div className="container">
        <Title title="ما وصل حديثاً" />
        <div className="products">
          {NewArrivedData.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.pic} alt={item.name} />
              <div className="info">
                <div className="info-wrapper">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
                <b>الالوان</b>
                <ul className="colors">
                  {item.colors.map((color) => (
                    <li key={color} style={{ backgroundColor: color }}></li>
                  ))}
                </ul>

                <ul className="sizes">
                  {item.sizes.map((size) => (
                    <li key={size}>{size}</li>
                  ))}
                </ul>

                <Button text="اطلب الان" to="/Cart" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArrived;
