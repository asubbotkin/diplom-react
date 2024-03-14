import { Link, NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames';
import logo from '../../img/logo.png';
import cards from '../../img/cards.png';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <Row>
          <div className={styles.footerContentWrapper}>
            <Col xs={12} sm={6} md={4} lg={3}>
              <NavLink to="." end>
                <img src={logo} alt="Logo" />
              </NavLink>
              <ul className="policy text-center text-sm-start">
                <li className={styles.policyItem}>© Все права защищены</li>
                <li className={styles.policyItem}>
                  Политика конфиденциальности
                </li>
                <li className={styles.policyItem}>Публичная оферта</li>
              </ul>
            </Col>
            <Col sm={4} md={5} lg={3} xl={4}>
              <nav>
                <ul className={styles.footerMenu}>
                  <li className={styles.footerMenuItem}>
                    <NavLink className={styles.footerMenuLink} to="." end>
                      Главная
                    </NavLink>
                  </li>
                  <li className={styles.footerMenuItem}>
                    <NavLink className={styles.footerMenuLink} to="shop">
                      Магазин
                    </NavLink>
                    <ul className={styles.products}>
                      <li>
                        <a href="/">Пальто</a>
                      </li>
                      <li>
                        <a href="/">Свитшоты</a>
                      </li>
                      <li>
                        <a href="/">Кардиганы</a>
                      </li>
                      <li>
                        <a href="/">Толстовки</a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.footerMenuItem}>
                    <NavLink className={styles.footerMenuLink} to="about">
                      О бренде
                    </NavLink>
                  </li>
                  <li className={styles.footerMenuItem}>
                    <NavLink className={styles.footerMenuLink} to="contacts">
                      Контакты
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col>
              <div className={styles.socialsWrapper}>
                <a className={styles.rightMenuItem} href="tel:+74958235412">
                  +7 (495) 823-54-12
                </a>
                <Link
                  href="#"
                  className={classNames(styles.rightMenuItem, styles.woomail)}>
                  hello@womazing.com
                </Link>
                <div className={styles.socials}>
                  <a
                    href="https://www.instagram.com"
                    className={classNames(
                      styles.socials,
                      styles.socialsLink,
                      styles.socialsInst
                    )}
                    rel="nofollow noopener noreferrer"
                    target="_blank">
                    <img className={styles.socialsImg} alt="Instagramm"></img>
                  </a>
                  <a
                    className={classNames(
                      styles.socials,
                      styles.socialsLink,
                      styles.socialsFb
                    )}
                    href="https://www.facebook.com"
                    rel="nofollow noopener noreferrer"
                    target="_blank">
                    <img className={styles.socialsImg} alt="Facebook"></img>
                  </a>
                  <a
                    className={classNames(
                      styles.socials,
                      styles.socialsLink,
                      styles.socialsTwit
                    )}
                    href="https://www.twitter.com"
                    rel="nofollow noopener noreferrer"
                    target="_blank">
                    <img className={styles.socialsImg} alt="Twitter"></img>
                  </a>
                </div>
                <div className={styles.cards}>
                  <img src={cards} alt="" />
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
