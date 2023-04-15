import axios from 'axios';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import style from './Home.module.scss';
import { setLoading, setError } from '../../redux/actions/System';
import ProductList from '../../components/ProductList/ProductList';

const cx = classNames.bind(style);

function Home() {
  const dispatch = useDispatch();
  const [discovery, setDiscovery] = useState([]);
  useEffect(() => {
    const fetchDiscovery = () => {
      dispatch(setLoading(true));
      axios
        .get('https://my.api.mockaroo.com/products/discovery.json?key=e9f65c40')
        .then((data) => setDiscovery(data.data))
        .catch((error) =>
          dispatch(setError(error.message ? error.message : 'Unknow error'))
        )
        .finally(() => dispatch(setLoading(false)));
    };

    fetchDiscovery();
  }, [dispatch]);

  return (
    <div className={cx('homepage-wrapper')}>
      <section className={cx('discovery-section')}>
        <ProductList dataList={discovery} />
      </section>
    </div>
  );
}

export default Home;
