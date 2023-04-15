import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './ProductList.module.scss';
import ProductListCard from './ProductListCard';

const cx = classNames.bind(styles);

function ProductList(props) {
  const { dataList } = props;
  return (
    <div className={cx('product-list-wrapper')}>
      <Container>
        <Row>
          {dataList.map((data) => (
            <Col
              key={data.id}
              xl={2}
              md={3}
              sm={4}
            >
              <ProductListCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

ProductList.propTypes = {
  dataList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProductList;
