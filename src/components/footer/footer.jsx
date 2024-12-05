import s from './footer.module.scss';
import icon1 from '../../assets/iconfb.png';
import icon2 from '../../assets/icontt.png';
import icon3 from '../../assets/iconyt.png';
import icon4 from '../../assets/iconld.png';
import icon5 from '../../assets/iconinsta.png';

export default function Footer() {
    return (
      <footer className={s.footer}>
        <section className={s.section1}>
          <div className={s.numero}>
            <p>4002-8922</p>
          </div>
          <nav>
            <a href=""><img src={icon1} alt="" /></a>
            <a href=""><img src={icon2} alt="" /></a>
            <a href=""><img src={icon3} alt="" /></a>
            <a href=""><img src={icon4} alt="" /></a>
            <a href=""><img src={icon5} alt="" /></a>
          </nav>
        </section>
        <section className={s.section2}>
          <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
        </section>
      </footer>
    );
  }
  