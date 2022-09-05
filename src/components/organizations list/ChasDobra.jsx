import chas_dobra_logo from "../../images/chas_dobra_logo.jpg"
import Call from "../Call";
import SocialLink from "../SocialLink";


export default function ChasDobra(){
    return  <section className="organizations__container" id="chd">
    <div className="organizations__logo" style={{backgroundImage:`url(${chas_dobra_logo})`}}></div>
      <div className="organizations__content">
        <h1 className="organizations__title" data-type="#ВО">Час Добра</h1>
        <p className="organizations__description">
        Діяльність ВЦ "Час Добра" є унікальною і всеохоплюючою. За кожною групою волонтерів нашого центру закріплений окремий напрямок. <br />
        🏠 пр. Соборний, 54 <br />
        🕰 Понеділок - Субота/10:00 - 15:00
        </p>
        <div className="organizations__call--container">
        <h3 className="organizations__call--title">
          Гаряча лінія:
        </h3>
        <Call numb={"+380 631 861 123"}/>
      </div>
        <div className="organizations__links">
          <SocialLink link={"https://www.facebook.com/chas.dobra01/?ref=page_internal"} icon={"https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_256.ico"}/>
          <SocialLink link={"https://www.instagram.com/chas.dobra01/"} icon={"https://avatanplus.com/files/resources/original/5bd97752a4b2e166c97a1af3.png"}/>
        </div>
      </div>
    </section>
}