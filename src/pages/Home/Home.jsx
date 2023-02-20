import Popper from '../../components/Popper';

function Home() {
  return (
    <Popper render={<span>Popper element</span>}>
      <button type='button'>Button</button>
    </Popper>
  );
}

export default Home;
