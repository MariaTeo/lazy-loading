import { lazy, Suspense, useState } from 'react';

const Home = () => {
  const [hide, setHide] = useState(false);

  const Image = lazy(() => {
    return new Promise((resolve) => {
      try {
        setTimeout(() => {
          resolve(import('../image'));
        }, 1000);
      } catch (error) {
        alert(error.message);
      }
    });
  });

  const click = () => {
    setHide(true);
  };

  return (
    <div>
      <div>
        <h1>Hello</h1>
        <p>Welcome to a simple project using lazy loading.</p>
        <button type="button" onClick={click}>
          Click me
        </button>
        <br />
        <Suspense fallback={<div>Loading...</div>}>
          {hide && <Image />}
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
