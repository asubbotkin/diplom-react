import { Link } from 'react-router-dom';
import styles from './ClearBtn.module.css';

function ClearBtn() {
  return (
    <Link className={styles.clearBtn} to="shop">
      Открыть Магазин
    </Link>
  );
}

export default ClearBtn;
