import React from 'react';
import logo from './logo.svg';
import './App.css';

const salaryGrid: Map<number, number> = new Map<number, number>([
  [0, 42000],
  [1, 45000],
  [2, 48000],
  [3, 52000],
  [4, 55000],
  [5, 58000],
  [6, 62000],
  [7, 65000],
  [8, 68000],
  [9, 70000]
]);

class SimulatorShodo extends React.Component<{}, { experience: string, salary?: number }> {
  constructor(props: any) {
    super(props);
    this.state = { experience: '0', salary: 0 }
  }

  updateSalary(event: any) {
    this.setState({ experience: event.target.value, salary: salaryGrid.get(Number.parseInt(event.target.value)) })
  }

  render() {
    return (
      <div className="App">
        <select value={this.state.experience} onChange={ (event) => this.updateSalary(event)}>
          <option value="0">Noob</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9 et +</option>
        </select>

        <br />
        <h1>{ this.state.salary }</h1>
      </div>
    );
  }
}

export default SimulatorShodo;
