import { Link, NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../img/logo.png';
import styles from './Footer.module.css';
import menuStyles from './Menu.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <Row className="d-flex align-items-center">
          <Col xs={12} sm={6} md={4} lg={3}>
            <NavLink to="." end>
              <img src={logo} alt="Logo" />
            </NavLink>
            <ul className="policy text-center text-sm-start">
              <li className={styles.policyItem}>© Все права защищены</li>
              <li className={styles.policyItem}>Политика конфиденциальности</li>
              <li className={styles.policyItem}>Публичная оферта</li>
            </ul>
          </Col>
          <Col sm={4} md={5} lg={3} xl={4}>
            <nav className={menuStyles.mainMenu}>
              <NavLink className={menuStyles.mainMenuItem} to="." end>
                Главная
              </NavLink>
              <NavLink className={menuStyles.mainMenuItem} to="shop">
                Магазин
              </NavLink>
              <NavLink className={menuStyles.mainMenuItem} to="about">
                О бренде
              </NavLink>
              <NavLink className={menuStyles.mainMenuItem} to="contacts">
                Контакты
              </NavLink>
            </nav>
          </Col>
          <Col>
            <div className={styles.socialsWrapper}>
              <Link className="rightMenuItem" href="tel:+74958235412">
                +7 (495) 823-54-12
              </Link>
              <Link href="#" className="rightMenuItem woomail">
                hello@womazing.com
              </Link>
              <div className="socials d-inline-flex">
                <Link
                  className="socials socialsLink socialsInst"
                  href="https://www.instagram.com"
                  rel="nofollow noopener noreferrer"
                  target="_blank"></Link>
                <Link
                  className="socials socialsLink socialsFb"
                  href="https://www.facebook.com"
                  rel="nofollow noopener noreferrer"
                  target="_blank"></Link>
                <Link
                  className="socials socialsLink socialsTwit"
                  href="https://www.twitter.com"
                  rel="nofollow noopener noreferrer"
                  target="_blank"></Link>
              </div>
              <div className="cadrds">
                <img src="../../img/cards.png" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
