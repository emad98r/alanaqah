import Title from "../../Components/Titles/Title";
import "./contact-us.scss";
import AccessoriesData from "../../Data/AccessoriesData";
import ManClothesData from "../../Data/ManClothesData";
import WonenClothesData from "../../Data/WomenClothesData";
import KidsClothesData from "../../Data/KidsClothesData";
import ShoesData from "../../Data/ShoesData";
import Button from "../../Components/Buttons/Button";

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="container">
        <Title title="تواصل معنا" />
        <div className="contact-us-wrapper">
          <form action="Post">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="الاسم"
              required
            />
            <input
              type="tel"
              name="phoneNo"
              id="phoneNo"
              placeholder="الرقم"
              required
            />
            <div className="items-wrapper">
              <select>
                <option value="">اختر منتجاً</option>
                <optgroup label="رجالي">
                  {ManClothesData.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </optgroup>
                {/* ------------------------------------------------ */}
                <optgroup label="نسائي">
                  {WonenClothesData.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </optgroup>
                {/* -------------------------------------------------------- */}
                <optgroup label="اطفال">
                  {KidsClothesData.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </optgroup>
                {/* --------------------------------------------------- */}
                <optgroup label="احذية">
                  {ShoesData.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </optgroup>
                {/* --------------------------------------------------------------- */}
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
                required
              />
              <input
                type="text"
                name="color"
                id="color"
                placeholder="الالوان"
                required
              />
              <input
                type="text"
                name="size"
                id="size"
                placeholder="المقاس"
                required
              />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="رسالة"
              rows={5}
            ></textarea>
            <div className="buttons">
              <Button type="submit" text="ارسل" />
              <Button type="reset" text="حذف" />
            </div>
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1144.890785281312!2d44.1857551330751!3d15.305154839704963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1728719136626!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
