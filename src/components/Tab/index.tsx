import classNames from "classnames";
import { FC } from "react";
import "./styles.css";

type TabProps = {
  /** A unique ID for the tab. */
  id: number;
  /** Whether the tab is disabled. */
  isDisabled?: boolean;
  /** Whether the tab is selected. */
  isSelected?: boolean;
  /** Callback for when the tab is clicked. */
  onClick: () => void;
};

const Tab: FC<TabProps> = ({
  id,
  onClick,
  isSelected,
  isDisabled,
  children
}) => {
  return (
    <button
      className="tab"
      role="tab"
      id={`tab-${id}`}
      aria-controls={`panel-${id}`}
      disabled={isDisabled}
      aria-selected={isSelected ? "true" : "false"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Tab;
