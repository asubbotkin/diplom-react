import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames';
import styles from './Home.module.css';

function Team() {
  return (
    <div className={styles.p130}>
      <div className="container">
        <Row>
          <Col className="text-center text-lg-start">
            <h2 className={styles.title}>Команда мечты Womazing</h2>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-lg-between">
          <Col className="col-12 col-lg-8 d-flex flex-row justify-content-center">
            <div className={styles.sliderWrapper}>
              <div className={classNames(styles.slide, styles.slideActive)}>
                <img
                  src={require('./../../img/team1.png')}
                  className="slideImg"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src={require('./../../img/team2.png')}
                  className="slideImg"
                  alt=""
                />
              </div>
              <div className={styles.slide}>
                <img
                  src={require('./../../img/team3.png')}
                  className="slideImg"
                  alt=""
                />
              </div>
              <div className="d-none d-lg-block">
                <button
                  className={classNames(
                    styles.sliderBtn,
                    styles.sliderBtnPrev
                  )}></button>
                <button
                  className={classNames(
                    styles.sliderBtn,
                    styles.sliderBtnNext
                  )}></button>
              </div>
              <div className={styles.dotsWrapper}>
                <button
                  type="button"
                  className={classNames(styles.dot, styles.dotActive)}></button>
                <button type="button" className={styles.dot}></button>
                <button type="button" className={styles.dot}></button>
              </div>
            </div>
          </Col>
          <Col className="col-10 offset-1 text-start mt-3 col-md-8 offset-md-2 mt-md-4 col-lg-3 offset-lg-1 mt-lg-0 text-lg-start">
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
