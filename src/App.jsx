import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from './routes';
import { DefaultLayout } from './layout';
import Loading from './components/Loading/Loading';
import { ErrorToast } from './components/Toastify';

function App() {
  return (
    <>
      <Loading />
      <ErrorToast />
      <Router>
        <div className='App'>
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = DefaultLayout;
              if (route.layout === null) Layout = Fragment;
              const Component = route.component;
              return (
                <Route
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Component />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
