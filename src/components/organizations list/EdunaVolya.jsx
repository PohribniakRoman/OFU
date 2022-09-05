import SocialLink from "../SocialLink";
import Call from "../Call";
import Post from "../Post"
import eduna_volya_logo from "../../images/eduna_volya_logo.jpg"
import BankAccount from "../BankAccount";


export default function EdunaVolya(){
    return <div className="organizations__container" id="ev">
    <div className="organizations__logo"style={{ backgroundImage:`url(${eduna_volya_logo})`,}}></div>
    <div className="organizations__content">
      <h1 className="organizations__title" data-type="#ВО">Єдина Воля</h1>
      <p className="organizations__description">
        Благодійна організація «Благодійний фонд «Єдина Воля» <br />
        🏠Пр. Соборний, 66 - розташування
        🕰 9:00 - 18:00  - час роботи
      </p>
      <Post email={"volunteers.yedyna.volya@gmail.com"} />
      <div className="organizations__links">
        <SocialLink link={"https://send.monobank.ua/6dozXvnLNo"} icon={"https://miro.medium.com/max/3150/1*PxKUZIus4lJELdfYKYJuyA.png"}/>
        <SocialLink link={"https://www.privat24.ua/rd/transfer_to_card?hash=rd/transfer_to_card/%7B%22from%22:%22%22,%22to%22:%224149%204378%206702%204885%22,%22ccy%22:%22UAH%22,%22amt%22:%22100%22%7D"} icon={"https://upload.wikimedia.org/wikipedia/commons/e/e0/Privat24_Logo.png"}/>
        <SocialLink link={"https://www.facebook.com/Volunteers-VOLYA-110138914973522"} icon={"https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico"}/>
        <SocialLink link={"https://www.instagram.com/_volunteers_ua/"} icon={"https://avatanplus.com/files/resources/original/5bd97752a4b2e166c97a1af3.png"}/>
        <SocialLink link={"https://t.me/edinavolya"} icon={"https://brandlogos.net/wp-content/uploads/2021/11/telegram-logo.png"}/>
        <SocialLink link={"https://www.tiktok.com/@v_o_l_y_a_?_d=secCgYIASAHKAESPgo8nV3c9rDNkaDACXF1pveej7X3oBqpK9CwISRth5wXSzuLRwZfluFQqWHiTVLQAvX1sN%2FLqG43rdpLd7Y7GgA%3D&_r=1&checksum=b13c18d5a4189c48ffdb38a674b5229a927987ec3785f78439abbeb7199a733d&language=ru&sec_uid=MS4wLjABAA"} icon={"https://cliply.co/wp-content/uploads/2021/02/372102780_TIKTOK_ICON_1080.png"}/>
      </div> 
      <div className="organizations__call--container" style={{marginTop:"20px"}}>
      <h3 className="organizations__call--title">
        Контактна особа:
      </h3>
      <Call numb={"+380 666 258 609"}/>
      </div>
    <div className="organizations__pay">
        <h3 className="organizations__pay--title">Грошова допомога:</h3>
        <BankAccount account={"4149-4378-6702-4885"} title={"Рахунок"} bold={"ПриватБанку:"}/>
    </div>
    </div>
  </div>
}