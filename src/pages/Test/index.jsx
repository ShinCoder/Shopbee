import { useWindowDimensions } from '../../hooks';
import './test.scss';

function Test() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        backgroundColor: 'cyan',
        width: '100vw',
        height: '100vh',
        paddingTop: '100px'
      }}
    >
      <div
        style={{ width: '1200px', margin: '0 auto', backgroundColor: 'white' }}
      >
        <div style={{ width: '50%', height: '300px' }}>
          width: {width} height: {height}
        </div>
      </div>
    </div>
  );
}

export default Test;
