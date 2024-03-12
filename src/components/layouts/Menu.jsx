import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../img/logo.png';
import styles from './Menu.module.css';

function Menu() {
  return (
    // <div className={styles.menuWrapper}>
    <Container fluid>
      <Row className={styles.menuWrapper}>
        <Col sm={4} lg={2}>
          <div className={styles.logo}>
            <NavLink to="." end>
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>{' '}
        </Col>
        <Col sm={4} md={5} lg={3} xl={4}>
          <nav className={styles.mainMenu}>
            <NavLink className={styles.mainMenuItem} to="." end>
              Home
            </NavLink>
            <NavLink className={styles.mainMenuItem} to="shop">
              Shop
            </NavLink>
            <NavLink className={styles.mainMenuItem} to="about">
              About
            </NavLink>
            <NavLink className={styles.mainMenuItem} to="contacts">
              Contacts
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
                <Link className={styles.rightMenuItem}>+7 (495) 823-54-12</Link>
              </li>
              <li>
                <Link className={styles.shoppingChart}></Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    // </div>
  );
}

export default Menu;
