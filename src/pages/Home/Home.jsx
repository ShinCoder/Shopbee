import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.scss';
import { setLoading, setError } from '../../redux/actions/System';
import ProductList from '../../components/ProductList';
import productService from '../../services/api/productService';
import ImageCarousel from '../../components/ImageCarousel';
import { useWindowDimensions } from '../../hooks';

const cx = classNames.bind(style);

function Home() {
  const dispatch = useDispatch();
  const [discovery, setDiscovery] = useState([]);

  const { width: windowWidth } = useWindowDimensions();
  const banners = [
    {
      id: 1,
      banner:
        'https://cf.shopee.vn/file/vn-50009109-7303fc95343fdf44798ad9605b59c832_xxhdpi',
      href: '/'
    },
    {
      id: 2,
      banner:
        'https://cf.shopee.vn/file/vn-50009109-6d01717d37418935f8338b4138b5dea3_xxhdpi',
      href: '/'
    },
    {
      id: 3,
      banner:
        'https://cf.shopee.vn/file/vn-50009109-7303fc95343fdf44798ad9605b59c832_xxhdpi',
      href: '/'
    },
    {
      id: 4,
      banner:
        'https://cf.shopee.vn/file/vn-50009109-7303fc95343fdf44798ad9605b59c832_xxhdpi',
      href: '/'
    },
    {
      id: 5,
      banner:
        'https://cf.shopee.vn/file/vn-50009109-7303fc95343fdf44798ad9605b59c832_xxhdpi',
      href: '/'
    }
  ];

  const serviceBanners = [
    {
      id: 1,
      banners:
        'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
      description: 'Khung Giờ Săn Sale',
      href: '/m/khung-gio-san-sale'
    }
  ];
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
    <div className={cx('home-wrapper')}>
      <section className={cx('home-banners__section')}>
        <div className='container'>
          {windowWidth < 786 || banners.length < 3 ? (
            <div className={cx('home-banners__grid-wrapper--simple')}>
              <div className={cx('home-banners__main')}>
                <ImageCarousel
                  slideDelay={500}
                  autoSlideInterval={5000}
                >
                  {banners.map((item) => (
                    <Link
                      to={item.href}
                      key={item.id}
                    >
                      <div
                        className={cx('home-banners__banner')}
                        style={{
                          backgroundImage: `url(${item.banner})`
                        }}
                      />
                    </Link>
                  ))}
                </ImageCarousel>
              </div>
            </div>
          ) : (
            <div className={cx('home-banners__grid-wrapper')}>
              <div className={cx('home-banners__main')}>
                <ImageCarousel
                  slideDelay={500}
                  autoSlideInterval={5000}
                >
                  {banners.slice(0, -2).map((item) => (
                    <Link
                      to={item.href}
                      key={item.id}
                    >
                      <div
                        className={cx('home-banners__banner')}
                        style={{
                          backgroundImage: `url(${item.banner})`
                        }}
                      />
                    </Link>
                  ))}
                </ImageCarousel>
              </div>
              <Link
                class={cx('home-banners__sub')}
                to={banners[banners.length - 2].href}
                key={banners[banners.length - 2].id}
              >
                <div
                  className={cx('home-banners__banner')}
                  style={{
                    backgroundImage: `url(${
                      banners[banners.length - 2].banner
                    })`
                  }}
                />
              </Link>
              <Link
                class={cx('home-banners__sub')}
                to={banners[banners.length - 1].href}
                key={banners[banners.length - 1].id}
              >
                <div
                  className={cx('home-banners__banner')}
                  style={{
                    backgroundImage: `url(${
                      banners[banners.length - 1].banner
                    })`
                  }}
                />
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className={cx('home-discovery__section', 'container')}>
        <div className={cx('home-discovery__header-wrapper')}>
          <span className={cx('home-discovery__header-title')}>
            Daily discover
          </span>
        </div>
        <ProductList dataList={discovery} />
      </section>
    </div>
  );
}

export default Home;
