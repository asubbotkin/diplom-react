import Slider from './Slider';
import Collection from './Collection';
import Importances from './Importances';
import Team from './Team';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      {/* <h1>Home</h1> */}
      <Slider />
      <Collection />
      <Importances />
      <Team />
    </div>
  );
}

export default Home;
