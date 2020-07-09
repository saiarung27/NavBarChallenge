import React, { Component } from "react";
import "./index.css";
import {Home, News, Contact, About} from './tabs';

const TABS = [
  { label: "Home", value: "HOME", component: Home },
  { label: "News", value: "NEWS", component: News },
  { label: "Contact", value: "CONTACT", component: Contact },
  { label: "About", value: "ABOUT", component: About },
];

class NavBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTile: "HOME",
    };
  }

  handleClick = (val) => {
    this.setState({ activeTile: val });
  };

  render() {
    const { activeTile } = this.state;
    const TabComponent = TABS.find((obj) => obj.value === activeTile).component;
    const _tabs = TABS.map((tabDetail, index) => {
      const className = tabDetail.value === activeTile ? "active" : "";
      return (
        <a
          key={index}
          onClick={() => this.handleClick(tabDetail.value)}
          className={className}
        >
          {tabDetail.label}
        </a>
      );
    });
    return (
      <div className="layout-column justify-content-center align-items-center">
        <div
          className="layout-row justify-content-around align-items-center mt-20 links"
          data-testid="navigation-tabs"
        >
          {_tabs}
        </div>
        <div className="card w-20 ma-0">
          <section className="card-text" data-testid="tab-content">
            <TabComponent />
          </section>
        </div>
      </div>
    );
  }
}
export default NavBarComponent;
