import { useState } from 'react';
import Popper from '../../components/Popper';

function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Popper
        useOwnState
        isVisible={visible}
        render={<div style={{ width: '100px' }}>Hello</div>}
      >
        <input
          type='text'
          onFocus={() => setVisible(true)}
          onBlur={() => setVisible(false)}
        />
      </Popper>
    </div>
  );
}

export default Home;
