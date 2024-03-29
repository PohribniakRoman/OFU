import { useState } from "react";

function ScrollToElement(elementId){
    document.querySelector(elementId).scrollIntoView({ behavior: "smooth", block: "center" });
}

export default function Navigation() {
    const [isOpen,toOpen] = useState(false)
  return (
    <>
      <div className={isOpen?"navigation__modal":"navigation__modal hidden"}>
        <div className={isOpen?"navigation__modal--toggle":"navigation__modal--toggle hidden"} onClick={()=>{toOpen(!isOpen)}}></div>
        <ul className={isOpen?"navigation__modal--menu":"navigation__modal--menu hidden"}>
            <li className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#ev");
            }}>
                Єдина Воля
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#kcvo");
            }}>
                КЦВО
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#ult");
            }}>
                Ультрас
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#go");
            }}>
                ГО Культура
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#chd");
            }}>
                Час Добра
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#nh");
            }}>
                Нова Хвиля
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#yvs");
            }}>
                УВС
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#parl");
            }}>
                Молодіжний парламент
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#cran");
            }}>
                Журавель
            </li>
            <li  className={isOpen?"navigation__modal--menu-item":"navigation__modal--menu-item hidden"} onClick={() => {
                toOpen(!isOpen)
                ScrollToElement("#rada");
            }}>
               Молодіжна рада
            </li>
        </ul>
      </div>
      <section className="navigation">
        <div className="navigation__container">
          <div className="navigation__logo">
          <svg xmlns="http://www.w3.org/2000/svg"  height="40px" width="25px"><path fill="#008c3e" d="m 121 1 c -9.32 10.58 -15 24.42 -15 39.62 0.55 33.37 4.64 66.7 5 100 0.74 31.1 -8.58 60.3 -19.92 88.8 -3.78 7.87 -7.86 15.57 -11.95 23.29 l -12 -2.42 c -10.83 -2.16 -17.87 -12.69 -15.7 -23.52 1.89 -9.47 10.23 -16.1 19.53 -16.1 l 4.38 0.47 l -9.77 -81.6 c -3.19 -36.3 -21.93 -68.2 -49.5 -88.9 -4.74 -3.56 -9.77 -6.82 -15 -9.69 v 289.7 h 66.88 c 5 27.1 19.94 50.8 40.94 67 4.99 3.44 9.18 7.98 12.19 13.28 3 -5.3 7.19 -9.84 12.19 -13.28 21 -16.24 35.94 -39.89 40.94 -67 h 66.88 v -289.7 c -5.23 2.87 -10.26 6.13 -15 9.69 -27.6 20.73 -46.3 52.6 -49.5 88.9 l -9.77 81.6 l 4.38 -0.47 c 9.3 0.04 17.64 6.62 19.53 16.1 2.16 10.83 -4.88 21.35 -15.7 23.52 l -12 2.42 c -4.09 -7.71 -8.18 -15.41 -11.95 -23.29 -11.35 -28.48 -20.67 -57.68 -19.93 -88.8 0.36 -33.4 4.45 -66.7 5 -100 0 -15.2 -5.68 -29 -15 -39.62 z m -100 71.7 c 12.94 15.19 21.63 34.1 24.2 54.93 l 8 67.3 c -10.25 5.1 -18 14.46 -20.94 25.79 h -11.33 v -148 z m 200 0 v 148 h -11.33 c -2.92 -11.32 -10.69 -20.68 -20.94 -25.79 l 8 -67.3 c 2.59 -20.81 11.28 -39.74 24.2 -54.94 z m -100 135.3 c 5.37 17.57 12.76 34.3 21.95 49.78 -8.74 2.65 -16.34 7.81 -21.95 14.76 -5.61 -6.95 -13.21 -12.1 -21.95 -14.77 9.19 -15.51 16.58 -32.2 21.95 -49.77 z m -100 32.74 h 11.33 c 3.57 13.81 14.35 24.71 28 28.52 l 9.61 2.19 c -2.57 9.32 -3.98 19.1 -3.98 29.3 h -45 v -60 z m 188.7 0 h 11.33 v 60 h -45 c 0 -10.14 -1.41 -19.97 -3.98 -29.3 l 9.61 -2.19 c 13.7 -3.81 24.47 -14.72 28 -28.52 z m -120.2 35.3 c 12.13 1.71 21.48 12.1 21.48 24.69 h -25 c 0 -8.57 1.27 -16.84 3.52 -24.69 z m 62.97 0 c 2.25 7.85 3.52 16.1 3.52 24.69 h -25 c 0 -12.61 9.35 -22.98 21.48 -24.69 z m -64.2 44.7 h 22.73 v 42.1 c -11 -11.55 -19 -26 -22.73 -42.1 z m 42.73 0 h 22.73 c -3.68 16.1 -11.7 30.57 -22.73 42.1 v -42.1 z"/></svg>
               <span>ОДУ</span>
             </div>
          <div className="navigation__list">
          <div className="navigation__toggle" onClick={()=>{toOpen(!isOpen)}}><span></span></div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#ev")
            }}>Єдина Воля</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#kcvo")
            }}>КЦВО</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#ult")
            }}>Ультрас</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#go")
            }}>Культура</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#chd")
            }}>Час Добра</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#nh")
            }}>Нова Хвиля</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#yvs")
            }}>УВС</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#parl")
            }}>Молодіжний парламент</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#cran")
            }}>Журавель</div>
            <div className="navigation__list--item active" onClick={() => {
                ScrollToElement("#rada")
            }}>Молодіжна рада</div>
          </div>
        </div>
      </section>
    </>
  );
}
