import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import style from './Home.module.scss';
import { setLoading, setError } from '../../redux/actions/System';
import ProductList from '../../components/ProductList/ProductList';
import productService from '../../services/api/productService';

const cx = classNames.bind(style);

function Home() {
  const dispatch = useDispatch();
  const [discovery, setDiscovery] = useState([]);
  useEffect(() => {
    const fetchDiscovery = async () => {
      dispatch(setLoading(true));
      try {
        const data = await productService.getDiscovery();
        setDiscovery(data);
      } catch (error) {
        dispatch(setError(error.message ? error.message : 'Unknow error'));
      }
      dispatch(setLoading(false));
    };

    fetchDiscovery();
  }, [dispatch]);

  return (
    <div className={cx('homepage-wrapper')}>
      <section className={cx('discovery-section', 'container')}>
        <div className={cx('discovery-header-wrapper')}>
          <span className={cx('discovery-header-title')}>Daily discover</span>
        </div>
        <ProductList dataList={discovery} />
      </section>
    </div>
  );
}

export default Home;
