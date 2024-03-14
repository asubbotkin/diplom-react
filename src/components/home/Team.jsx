import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames';
import styles from './Home.module.css';

function Team() {
  return (
    <div className={styles.p130}>
      <div className="container">
        <Row d-flex flex row align-items-center justify-content-lg-between>
          <Col className="text-center text-lg-start">
            <h2 className={styles.title}>Команда мечты Womazing</h2>
          </Col>
          <Col sm={12} lg={8}>
            <div className={styles.sliderWrapper}></div>
          </Col>
          <Col sm={12} lg={3} offset-lg-1>
            <div className={styles.teamAbout}>
              <h3 className={styles.teamAboutTitle}>Для каждой</h3>
              <div className={styles.teamAboutTextWrapper}>
                <p className={styles.teamAboutText1}>
                  Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                </p>
                <p className={styles.teamAboutText2}>
                  Womazing ищет эти мелочи и создает прекрасные вещи, которые
                  выгодно подчеркивают достоинства каждой девушки.
                </p>
              </div>
              <Link to="about" className={styles.teamAboutLink}>
                Подробнее о бренде
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Team;
