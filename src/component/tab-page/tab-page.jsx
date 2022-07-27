import { lazy, Suspense, useState } from 'react';

const TabPage = () => {
  const TabOne = lazy(() => {
    return new Promise((resolve) => {
      try {
        setTimeout(() => {
          resolve(import('../tab-one'));
        }, 500);
      } catch (error) {
        alert(error.message);
      }
    });
  });
  const TabTwo = lazy(() => {
    return new Promise((resolve) => {
      try {
        setTimeout(() => {
          resolve(import('../tab-two'));
        }, 500);
      } catch (error) {
        alert(error.message);
      }
    });
  });
  const TabThree = lazy(() => {
    return new Promise((resolve) => {
      try {
        setTimeout(() => {
          resolve(import('../tab-three'));
        }, 500);
      } catch (error) {
        alert(error.message);
      }
    });
  });
  const TabFour = lazy(() => {
    return new Promise((resolve) => {
      try {
        setTimeout(() => {
          resolve(import('../tab-four'));
        }, 500);
      } catch (error) {
        alert(error.message);
      }
    });
  });

  const tabs = [TabOne, TabTwo, TabThree, TabFour];

  const [currentTab, setCurrentTab] = useState(1);

  const handleTab = (e) => {
    setCurrentTab(Number(e.target.value));
  };

  const Tab = tabs[currentTab - 1];
  return (
    <div>
      <div>
        <button value="1" onClick={handleTab}>
          1
        </button>
        <button value="2" onClick={handleTab}>
          2
        </button>
        <button value="3" onClick={handleTab}>
          3
        </button>
        <button value="4" onClick={handleTab}>
          4
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Tab />
      </Suspense>
    </div>
  );
};

export default TabPage;
