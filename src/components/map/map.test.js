import * as React from 'react';
import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import MapContainer from './map'
import renderer from 'react-test-renderer';

describe("Map from GoogleMap", () => {
  it('does not crash on rendering',() => {
    shallow(<MapContainer />)
  })

  it('renders correctly the map component', () => {
    const TextInputComponent = renderer.create(<MapContainer />).toJSON();
    expect(TextInputComponent).toMatchSnapshot()
  })
})