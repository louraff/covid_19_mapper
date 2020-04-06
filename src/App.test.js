import * as React from 'react';
import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import MapContainer from './components/map/map'


it('does not crash when loaded onto page', () => {
  shallow(<App />)
})

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText;
//   expect(linkElement).toBeInTheDocument();
// });

// it('does not crash when loaded onto page', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// })
