import { lazy, FC, useState, Suspense } from "react";
import Tab from "./components/Tab";
import { Tab1, Tab2, Tab3, Tab4 } from "./components/tabs";
import "./styles.css";

const tabs: {
  isDisabled?: boolean;
  component: FC;
}[] = [
  {
    component: Tab1,
  },
  {
    component: Tab2,
  },
  {
    isDisabled: true,
    component: Tab3,
  },
  {
    component: Tab4,
  },
];

const App = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const renderTabPanel = () => {
    const Component = tabs[currentTabIndex].component;
    return <Component />;
  };

  return (
    <div className="app">
      <div>
        <div className="tabs" role="tablist">
          {tabs.map((tab, index) => {
            return (
              <Tab
                key={index}
                id={index}
                isSelected={index === currentTabIndex}
                isDisabled={tab.isDisabled}
                onClick={() => setCurrentTabIndex(index)}
              >
                {index + 1}
              </Tab>
            );
          })}
        </div>
        <div>{renderTabPanel()}</div>
      </div>
    </div>
  );
};

export default App;
