import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';
import styles from './Home.module.css';

function Importances() {
  return (
    <div className="p130">
      <div class="container">
        <Row class="row">
          <Col className="col-12 text-center text-xl-start">
            <h2 className={classNames(styles.title, styles.importansesTitle)}>
              Что для нас важно
            </h2>
          </Col>
        </Row>
        <Row className="">
          <Col className="col-12 col-md-6 justify-content-center justify-content-xl-start col-xl-4 d-flex">
            <div class="importancesItem">
              <div
                className={classNames(
                  styles.importancesItem,
                  styles.importancesItemImg
                )}>
                <img src={require('./../../img/quality.png')} alt="" />
              </div>
              <h3
                className={classNames(
                  styles.importancesItem,
                  styles.importancesItemTitle
                )}>
                Качество
              </h3>
              <p
                className={classNames(
                  styles.importancesItem,
                  styles.importancesItemText
                )}>
                Наши профессионалы работают на лучшем оборудовании для пошива
                одежды беспрецедентного качества
              </p>
            </div>
          </Col>
          <Col className="col-12 mt-4 mt-md-0 col-md-6 justify-content-center justify-content-lg-start col-xl-4 d-flex">
            <div class="importancesItem">
              <div
                className={classNames(
                  styles.importancesItem,
                  styles.importancesItemImg
                )}>
                <img src={require('./../../img/speed.png')} alt="" />
              </div>
              <h3
                className={classNames(
                  styles.importancesItem,
                  styles.importancesItemTitle
                )}>
                Скорость
              </h3>
              <p
                className={classNames(
                  styles.importancesItem,
                  styles.importancesItemText
                )}>
                Благодаря отлаженной системе в Womazing мы можем отшивать до
                20-ти единиц продукции в наших собственных цехах
              </p>
            </div>
          </Col>
          <Col className="col-12 offset-md-3 offset-xl-0  col-md-6 mt-4 mt-xl-0 justify-content-center justify-content-lg-start col-xl-4 d-flex">
            <div class="importancesItem">
              <div
                className={classNames(
                  styles.importancesItem,
                  styles.importancesItemImg
                )}>
                <img src={require('./../../img/hand.png')} alt="" />
              </div>
              <h3
                className={classNames(
                  styles.importancesItem,
                  styles.importancesItemTitle
                )}>
                Ответственность
              </h3>
              <p
                className={classNames(
                  styles.importancesItem,
                  styles.importancesItemText
                )}>
                Мы заботимся о людях и планете. Безотходное производство и
                комфортные условия труда - все это Womazing
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Importances;
