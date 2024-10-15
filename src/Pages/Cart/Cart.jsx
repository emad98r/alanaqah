import Title from "../../Components/Titles/Title";
import { useState } from "react";

import "./cart.scss";
import AccessoriesData from "../../Data/AccessoriesData";
import ManClothesData from "../../Data/ManClothesData";
import WonenClothesData from "../../Data/WomenClothesData";
import KidsClothesData from "../../Data/KidsClothesData";
import ShoesData from "../../Data/ShoesData";
import shopping from "../../assets/icons/Shopping.png";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
function Cart() {
  // State for form fields
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  // State for product selection
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  // State to store the list of added products
  const [products, setProducts] = useState([]);

  // Handle adding the selected product to the list
  const handleAddProduct = () => {
    const newProduct = { product, amount, color, size };
    setProducts([...products, newProduct]);
    // Clear fields after adding
    setProduct("");
    setAmount(1);
    setColor("");
    setSize("");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      phoneNo,
      message,
      products, // All the selected products
    };
    console.log("Form Data:", formData);
    // Perform form submission (e.g., send to backend)
  };

  return (
    <>
      <div className="cart">
        <div className="container">
          <Title title="اختار منتج" />
          <div className="cart-wrapper">
            <img src={shopping} alt="" />
            <div className="form-wrapper">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="الاسم"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="الرقم"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required
                />
                <div className="items-wrapper">
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                  >
                    <option value="">اختر منتجاً</option>

                    {/* Men's Clothes */}
                    <optgroup label="رجالي">
                      {ManClothesData.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </optgroup>

                    {/* Women's Clothes */}
                    <optgroup label="نسائي">
                      {WonenClothesData.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </optgroup>

                    {/* Kids' Clothes */}
                    <optgroup label="اطفال">
                      {KidsClothesData.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </optgroup>

                    {/* Shoes */}
                    <optgroup label="احذية">
                      {ShoesData.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </optgroup>

                    {/* Accessories */}
                    <optgroup label="اكسسوارت">
                      {AccessoriesData.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="choose-inputs">
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="الكمية"
                    min={1}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    name="color"
                    id="color"
                    placeholder="الالوان"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    name="size"
                    id="size"
                    placeholder="المقاس"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    required
                  />
                </div>

                <button
                  className="add-product"
                  type="button"
                  onClick={handleAddProduct}
                >
                  <FaShoppingCart />
                  اضافة المنتج للسلة
                </button>

                <textarea
                  name="message"
                  id="message"
                  placeholder="رسالة"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {/* Display the added products */}
                <div className="added-to-cart">
                  <h3>المنتجات المضافة</h3>
                  <ul>
                    {products.map((p, index) => (
                      <li key={index}>
                        {p.product} - {p.amount} - {p.color} - {p.size}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="buttons">
                  <button type="submit">
                    <IoIosSend />
                    ارسل
                  </button>
                  <button type="reset" onClick={() => setProducts([])}>
                    <FaTrashAlt />
                    حذف
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
