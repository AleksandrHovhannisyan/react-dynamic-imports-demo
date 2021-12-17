import { FC } from "react";
import "./styles.css";

type Props = {
  /** The tab ID corresponding to this panel. */
  id: number;
};

const TabPanel: FC<Props> = ({ id, children }) => {
  return (
    <div role="tabpanel" id={`tab-panel-${id}`} aria-labelledby={`tab-${id}`}>
      {children}
    </div>
  );
};

export default TabPanel;
