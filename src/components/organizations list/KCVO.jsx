import SocialLink from "../SocialLink";
import BankAccount from "../BankAccount";
import Call from "../Call";
import kcvo_logo from "../../images/kcvo_logo.jpg"

export default function Kcvo(){
    return  <div className="organizations__container" id="kcvo">
    <div className="organizations__logo" style={{backgroundImage:`url(${kcvo_logo})`}}></div>
    <div className="organizations__content">
      <h1 className="organizations__title" data-type="#ВО">Координаційний центр волонтерів</h1>
      <p className="organizations__description">
        Ми об'єдналися з першого дня війни,збираємо та надсилаємо допомогу ЗСУ та людям,постраждалим від російської агресії <br />
        🏠 пр. Соборний, 66 <br />
        🕰 9:00 - 18:00
      </p>
      <div className="organizations__links">
      <SocialLink link={"https://www.facebook.com/people/%D0%9A%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9-%D1%86%D0%B5%D0%BD%D1%82%D1%80-%D0%B2%D0%BE%D0%BB%D0%BE%D0%BD%D1%82%D0%B5%D1%80%D1%96%D0%B2-%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D1%8F/100078540620293/"} icon={"https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico"}/>
      <SocialLink link={"https://t.me/alexandriacoordinationcenter"} icon={"https://brandlogos.net/wp-content/uploads/2021/11/telegram-logo.png"}/>
      <SocialLink link={"https://www.instagram.com/coordination_center_olexandria/ "} icon={"https://avatanplus.com/files/resources/original/5bd97752a4b2e166c97a1af3.png"}/>
     </div>
      <div className="organizations__call--wrap">
      <div className="organizations__call--container">
      <h3 className="organizations__call--title">
        Гаряча лінія <br /> кооодинаційного центру:
      </h3>
      <Call numb={"+380 991 495 746"}/>
      <Call numb={"+380 960 464 260"}/>
      <Call numb={"+380 687 294 593"}/>
      </div>
      <div className="organizations__call--container">
      <h3 className="organizations__call--title">
        Номери телефонів <br /> інформація для біженців та переселенців:
      </h3>
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
}