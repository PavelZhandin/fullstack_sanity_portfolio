import React from "react";

interface INavigationDots {
  active: string;
}

const NavigationDots = ({ active }: INavigationDots) => {
  return (
    <div className="app__navigation">
      {[
        "home",
        "about",
        "contact",
        "work",
        "skills",
        "testimonials",
        "contact",
      ].map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          key={`${item + index}`}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
