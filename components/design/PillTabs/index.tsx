import * as Styles from "./styes";
import { TabsProps, ButtonProps } from "./types";

const PillTabs = (props: TabsProps) => {
  const { buttons, selectedTab, handleClick } = props;

  return (
    <Styles.Wrapper>
      {buttons.map((button: ButtonProps, index: number) => (
        <button
          key={index}
          className={index === selectedTab ? "active" : undefined}
          onClick={() => {
            handleClick(index);
          }}
        >
          {button.label}
        </button>
      ))}
    </Styles.Wrapper>
  );
};

export default PillTabs;
