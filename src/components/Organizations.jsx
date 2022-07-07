import {BsFillTelephoneFill} from "react-icons/bs"
import BankAccount from "./BankAccount";
import Call from "./Call";
import SocialLink from "./SocialLink";

export default function Organizations() {
  return (
    <section className="organizations" id="org">
      <div className="organizations__container" id="ev">
        <div
          className="organizations__logo"
          style={{
            backgroundImage:
              "url(https://d1fdloi71mui9q.cloudfront.net/7Bhx2Ln0TPKnAuysdoOk_00bxNhtuKp1y6G2X)",
          }}
        ></div>
        <div className="organizations__content">
          <h1 className="organizations__title">Єдина Воля</h1>
          <p className="organizations__description">
            Благодійна організація «Благодійний фонд «Єдина Воля»
          </p>
          <Call numb={"+380 666 258 609"}/>
          <div className="organizations__links">
            <SocialLink link={"https://send.monobank.ua/6dozXvnLNo"} icon={"https://miro.medium.com/max/3150/1*PxKUZIus4lJELdfYKYJuyA.png"}/>
            <SocialLink link={"https://www.facebook.com/Volunteers-VOLYA-110138914973522"} icon={"https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico"}/>
            <SocialLink link={"https://www.instagram.com/_volunteers_ua/"} icon={"https://avatanplus.com/files/resources/original/5bd97752a4b2e166c97a1af3.png"}/>
            <SocialLink link={"https://t.me/VOlYOLEKSANDRIY"} icon={"https://brandlogos.net/wp-content/uploads/2021/11/telegram-logo.png"}/>
            <SocialLink link={"https://www.tiktok.com/@v_o_l_y_a_?_d=secCgYIASAHKAESPgo8nV3c9rDNkaDACXF1pveej7X3oBqpK9CwISRth5wXSzuLRwZfluFQqWHiTVLQAvX1sN%2FLqG43rdpLd7Y7GgA%3D&_r=1&checksum=b13c18d5a4189c48ffdb38a674b5229a927987ec3785f78439abbeb7199a733d&language=ru&sec_uid=MS4wLjABAA"} icon={"https://cliply.co/wp-content/uploads/2021/02/372102780_TIKTOK_ICON_1080.png"}/>
          </div> 
        </div>
      </div>
      <div className="organizations__container" id="kcvo">
        <div className="organizations__logo" style={{backgroundImage:"url(https://scontent.fdnk3-1.fna.fbcdn.net/v/t39.30808-6/275078814_112110101420586_6048038022590412726_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QhlSpuYOEmwAX8UOYUQ&_nc_ht=scontent.fdnk3-1.fna&oh=00_AT9ZuqFwORZbEfK1LMAzW4AFQ6buxU5FQHKkmtrC-0Ljcw&oe=62C8FC98)"}}></div>
        <div className="organizations__content">
          <h1 className="organizations__title">Координаційний центр волонтерів</h1>
          <p className="organizations__description">
            Ми об'єдналися з першого дня війни,збираємо та надсилаємо допомогу ЗСУ та людям,постраждалим від російської агресії
          </p>
          <div className="organizations__links">
          <SocialLink link={"https://www.facebook.com/people/%D0%9A%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9-%D1%86%D0%B5%D0%BD%D1%82%D1%80-%D0%B2%D0%BE%D0%BB%D0%BE%D0%BD%D1%82%D0%B5%D1%80%D1%96%D0%B2-%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D1%8F/100078540620293/"} icon={"https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico"}/>
          <SocialLink link={"https://t.me/alexandriacoordinationcenter"} icon={"https://brandlogos.net/wp-content/uploads/2021/11/telegram-logo.png"}/>
         </div>
          <div className="organizations__call--wrap">
          <div className="organizations__call--container">
          <h3 className="organizations__call--title">
            Гаряча лінія <br /> кооодинаційного центру:
          </h3>
          <Call numb={"+380 959 411 684"}/>
          <Call numb={"+380 991 495 746"}/>
          <Call numb={"+380 960 464 260"}/>
          <Call numb={"+380 991 495 751"}/>
          <Call numb={"+380 687 294 593"}/>
          </div>
          <div className="organizations__call--container">
          <h3 className="organizations__call--title">
            Номери телефонів <br /> інформація для біженців та переселенців:
          </h3>
          <Call numb={"+380 962 935 422"}/>
          <Call numb={"+380 668 904 365"}/>
          <Call numb={"+380 932 677 994"}/>
          </div>
          </div>
          <div className="organizations__pay">
            <h3 className="organizations__pay--title">Грошова допомога:</h3>
            <BankAccount account={"4149-6293-4306-4192"} title={"Рахунок для"} bold={"української валюти:"}/>
            <BankAccount account={["4149-4993-9968-3935|(долар США)","4149-4993-9968-4008|(ЄВРО)"]} title={"Рахунок для"} bold={"іноземної валюти:"}/>
            <BankAccount account={"IBAN AT792032032402507615"} bold={"міжнародні перекази:"}/>
          </div>
        </div>
      </div>
    </section>
  );
}
