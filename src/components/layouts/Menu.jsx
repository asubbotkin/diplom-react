import { Link, NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../img/logo.png';
import styles from './Menu.module.css';

function Menu() {
  return (
    <div className="container">
      <Row>
        <div className={styles.menuWrapper}>
          <Col sm={4} lg={2}>
            <div>
              <NavLink to="." end>
                <img src={logo} alt="Logo" />
              </NavLink>
            </div>
          </Col>
          <Col sm={4} md={5} lg={3} xl={4}>
            <nav className={styles.mainMenu}>
              <NavLink className={styles.mainMenuItem} to="." end>
                Главная
              </NavLink>
              <NavLink className={styles.mainMenuItem} to="shop">
                Магазин
              </NavLink>
              <NavLink className={styles.mainMenuItem} to="about">
                О бренде
              </NavLink>
              <NavLink className={styles.mainMenuItem} to="contacts">
                Контакты
              </NavLink>
            </nav>
          </Col>
          <Col sm={4} md={5} lg={3} xl={4}>
            <div>
              <ul className={styles.rightMenu}>
                <li>
                  <Link className={styles.call}></Link>
                </li>
                <li>
                  <Link className={styles.rightMenuItem}>
                    +7 (495) 823-54-12
                  </Link>
                </li>
                <li>
                  <NavLink
                    className={styles.shoppingChart}
                    to="chart"></NavLink>
                </li>
              </ul>
            </div>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default Menu;
