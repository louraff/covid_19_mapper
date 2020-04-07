import * as React from 'react';
import {ReactDOM, unmountComponentAtNode} from "react-dom";
import { render } from '@testing-library/react';
import { shallow, simulate } from 'enzyme';
import {MapContainer, Map} from './map'
import Marker from 'google-maps-react'
import renderer from 'react-test-renderer';
import MockedMap from './map'
import { act } from "react-dom/test-utils"



it('does something on marker click', () => {    
  const onMarkerClick = jest.fn();
  const component = shallow(<MapContainer countries={[]} onMarkerClick={onMarkerClick}/>); 
  const marker = component.find(Marker)
  expect(marker.simulate('click').first().length).toEqual(1)
});

