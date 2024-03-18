import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import ClearBtn from '../buttons/ClearBtn';

export default function Collection() {
  return (
    <div className={styles.pt130}>
      <div className="container">
        <Row>
          <Col className="col-12 text-center text-xl-start">
            <h2 className={styles.title}>Новая коллекция</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-12 col-md-6 col-xl-4 d-flex flex-column align-items-center">
            <div className={styles.collectionItem}>
              <div className={styles.collectionItemImg}>
                <img
                  src={require('./../../img/product1.png')}
                  class="collection-item-product"
                  alt=""
                />
                <Link className={styles.collectionItemLink} to="item" />
              </div>
              <h4 className={styles.collectionItemName}>Футболка USA</h4>
              <div className={styles.collectionItemPriceWrapper}>
                <span className={styles.collectionItemOldprice}>$229</span>
                <span className={styles.collectionItemPrice}>$129</span>
              </div>
            </div>
          </Col>
          <Col className="col-12 mt-5 col-md-6 mt-md-0 col-xl-4 d-flex flex-column align-items-center">
            <div className="collectionItem">
              <div className={styles.collectionItem}>
                <div className={styles.collectionItemImg}>
                  <img
                    src={require('./../../img/product2.png')}
                    class="collection-item-product"
                    alt=""
                  />
                  <Link className={styles.collectionItemLink} to="item" />
                </div>
                <h4 className={styles.collectionItemName}>Футболка USA</h4>
                <div className={styles.collectionItemPriceWrapper}>
                  <span className={styles.collectionItemOldprice}>$229</span>
                  <span className={styles.collectionItemPrice}>$129</span>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-md-6 mt-5 col-xl-4 mt-xl-0 d-flex flex-column align-items-center">
            <div className="collectionItem">
              <div className={styles.collectionItem}>
                <div className={styles.collectionItemImg}>
                  <img
                    src={require('./../../img/product3.png')}
                    class="collection-item-product"
                    alt=""
                  />
                  <Link className={styles.collectionItemLink} to="item" />
                </div>
                <h4 className={styles.collectionItemName}>
                  Свитшот Sweet Shot
                </h4>
                <div className={styles.collectionItemPriceWrapper}>
                  <span className={styles.collectionItemPrice}>$129</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 d-flex justify-content-center">
            <ClearBtn />
          </Col>
        </Row>
      </div>
    </div>
  );
}
