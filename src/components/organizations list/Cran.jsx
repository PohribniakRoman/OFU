import parlament_logo from "../../images/Cran_logo.png"
import Call from "../Call";
import Post from "../Post";
import SocialLink from "../SocialLink";

export default function Cran() {
  return (
    <section className="organizations__container" id="cran">
    <div className="organizations__logo" style={{ backgroundSize:"contain",backgroundImage:`url(${parlament_logo})`}}></div>
      <div className="organizations__content">
        <h1 className="organizations__title" data-type="#ГО">Журавель</h1>
        <p className="organizations__description">
        Громадська організація науково-методичний освітній тренінговий центр.
        </p>
      <Post email={"info@zhuravel.org.ua"} />
      <div className="organizations__links">
        <SocialLink link={"https://www.instagram.com/zhuravel_go/"} icon={"https://avatanplus.com/files/resources/original/5bd97752a4b2e166c97a1af3.png"}/>
        <SocialLink link={"https://www.facebook.com/zhuravel.go"} icon={"https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico"}/>
      </div>
      <div className="organizations__call--container">
      <h3 className="organizations__call--title" style={{marginTop:"15px"}}>
        Контактна особа:
      </h3>
        <Call numb={"+380 950 049 555"}/>
      </div>
      </div>
    </section>
  );
}
