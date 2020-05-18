import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Buttons from "./components/Buttons";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };

  sortLast = () => {

    const employees = this.state.employees.sort((a, b) => (a.last > b.last) ? 1 : -1);

    this.setState({ employees });
  };

  sortFirst = () => {

    const employees = this.state.employees.sort((a, b) => (a.name > b.name) ? 1 : -1);

    this.setState({ employees });
  };

  removeemployee = id => {
    const employees = this.state.employees.filter(employee => employee.id !== id);
    this.setState({ employees });
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <Buttons sortLast = {this.sortLast}
        sortFirst = {this.sortFirst} />
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeemployee={this.removeemployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            last={employee.last}
            image={employee.image}
            category={employee.category}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
