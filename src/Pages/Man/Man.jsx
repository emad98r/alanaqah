import ManClothesData from "../../Data/ManClothesData";
import Title from "../../Components/Titles/Title";
import Button from "../../Components/Buttons/Button";
function Man() {
  return (
    <div className="home-sections">
      <div className="container">
        <Title title="ملابس رجالي" />
        <div className="products">
          {ManClothesData.map((item) => (
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

                <Button text="اطلب الان" to="/Cart" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Man;
