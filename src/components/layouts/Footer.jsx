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
                <Link className={styles.rightMenuItem} href="tel:+74958235412">
                  +7 (495) 823-54-12
                </Link>
                <Link
                  href="#"
                  className={classNames(styles.rightMenuItem, styles.woomail)}>
                  hello@womazing.com
                </Link>
                <div className={styles.socials}>
                  <Link
                    className={classNames(
                      styles.socials,
                      styles.socialsLink,
                      styles.socialsInst
                    )}
                    href="https://www.instagram.com"
                    rel="nofollow noopener noreferrer"
                    target="_blank"></Link>
                  <Link
                    className={classNames(
                      styles.socials,
                      styles.socialsLink,
                      styles.socialsFb
                    )}
                    href="https://www.facebook.com"
                    rel="nofollow noopener noreferrer"
                    target="_blank"></Link>
                  <Link
                    className={classNames(
                      styles.socials,
                      styles.socialsLink,
                      styles.socialsTwit
                    )}
                    href="https://www.twitter.com"
                    rel="nofollow noopener noreferrer"
                    target="_blank"></Link>
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
