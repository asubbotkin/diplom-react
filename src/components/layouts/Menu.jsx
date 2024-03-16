import { Link, NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import classNames from 'classnames';
import hamburger from '../../img/menu_32px.png';
import logo from '../../img/logo.png';
import styles from './Menu.module.css';

function Menu() {
  return (
    <div className="container">
      <Row className="d-flex align-items-center justify-content-center py-5">
        {/* <div className={styles.menuWrapper}> */}
        <Col className="col-4 col-lg-2">
          <div>
            <NavLink to="." end>
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>
        </Col>
        <Col className="col-lg-6 justify-content-center d-flex order-1 order-lg-0 offset-lg-1 col-xl-5">
          <nav className={styles.mainMenu}>
            <ul className="d-none flex-column d-lg-flex flex-lg-row">
              <li>
                <NavLink className={styles.mainMenuItem} to="." end>
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.mainMenuItem} to="shop">
                  Магазин
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.mainMenuItem} to="about">
                  О бренде
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.mainMenuItem} to="contacts">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </nav>
          <ul className="d-block text-end d-lg-none">
            <li>
              <img className={styles.hamburger} src={hamburger} alt="" />
            </li>
          </ul>
        </Col>
        <Col className="d-flex col-4 justify-content-center col-md-5 justify-content-lg-between col-lg-3 justify-content-lg-end col-xl-4">
          <div>
            <ul className={styles.rightMenu}>
              <li>
                <Link className={styles.call}></Link>
              </li>
              <li className="d-none d-md-block">
                <Link className={styles.rightMenuItem}>+7 (495) 823-54-12</Link>
              </li>
              <li className="ms-4 ms-md-0">
                <NavLink className={styles.shoppingChart} to="chart"></NavLink>
              </li>
            </ul>
          </div>
        </Col>
        {/* </div> */}
      </Row>
    </div>
  );
}

export default Menu;
