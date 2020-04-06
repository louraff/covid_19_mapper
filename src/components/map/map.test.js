import * as React from 'react';
import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import MapContainer from './map'

it('does not crahs on rendering',() => {
  shallow(<MapContainer />)
})