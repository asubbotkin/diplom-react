import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTwitterLine,
  RiVisaFill,
  RiMastercardFill,
} from 'react-icons/ri';
import classNames from 'classnames';
import logo from '../../img/logo.png';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <Row
          className="align-items-start
          justify-content-center
          justify-content-sm-around
          flex-column
          flex-sm-row
          ">
          <Col className="col-12 justify-content-center col-sm-4 justify-content-sm-start col-lg-3">
            <ul className="text-center text-sm-start">
              <li className="mb-3 mb-md-4">
                <NavLink to="." end>
                  <img className="mx-auto mx-sm-0" src={logo} alt="Logo" />
                </NavLink>
              </li>
              <li className={styles.policyItem}>© Все права защищены</li>
              <li className={styles.policyItem}>Политика конфиденциальности</li>
              <li className={styles.policyItem}>Публичная оферта</li>
            </ul>
          </Col>
          <Col className="col-12 mt-4 mt-sm-0 mr-sm-0 col-sm-2 text-center col-lg-6 offset-lg-1">
            <nav>
              <ul className="d-flex flex-column flex-lg-row text-center">
                <li className={styles.footerMenuItem}>
                  <NavLink className={styles.footerMenuLink} to="." end>
                    Главная
                  </NavLink>
                </li>
                <li className={styles.footerMenuItem}>
                  <NavLink className={styles.footerMenuLink} to="shop">
                    Магазин
                  </NavLink>
                  <div className="d-none d-lg-block">
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
                  </div>
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
          <Col className="d-flex flex-column mt-4 mt-md-0 text-center text-md-end col-12 col-md-4 mt-lg-0 col-lg-2 ">
            <a
              className={styles.rightMenuItem}
              href="tel:+74958235412"
              rel="nofollow noopener noreferrer">
              +7 (495) 823-54-12
            </a>
            <a
              href="/"
              className={classNames(styles.rightMenuItem, styles.woomail)}
              rel="nofollow noopener noreferrer">
              hello@womazing.com
            </a>
            <div className="d-flex flex-row my-4 justify-content-center justify-content-md-end">
              <a
                href="https://www.instagram.com"
                className={styles.socialsLink}
                rel="nofollow noopener noreferrer"
                target="_blank">
                <RiInstagramLine className={styles.socialsIcon} />
              </a>
              <a
                className={styles.socialsLink}
                href="https://www.facebook.com"
                rel="nofollow noopener noreferrer"
                target="_blank">
                <RiFacebookBoxLine className={styles.socialsIcon} />
              </a>
              <a
                className={styles.socialsLink}
                href="https://www.twitter.com"
                rel="nofollow noopener noreferrer"
                target="_blank">
                <RiTwitterLine className={styles.socialsIcon} />
              </a>
            </div>
            <div>
              <RiVisaFill className={styles.card} />
              <RiMastercardFill className={styles.card} />
              {/* <img src={cards} alt="" /> */}
            </div>
            {/* </div> */}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
