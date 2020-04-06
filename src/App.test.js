import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import renderer from 'react-test-renderer';

describe("App Component", () => {  
  it('does not crash when loaded onto page', () => {
    shallow(<App />)
  })

  it('renders as expected, snapshot comparison', () => {
    const TextInputComponent = renderer.create(<App />).toJSON()
    expect(TextInputComponent).toMatchSnapshot()
  })
})

//  test('createCountry', () => {
//   const usStates = {'country.stat'{'country'{'United Kingdom'}}}
//   const countries = {{}}; 
//    expect(createCountry(usStates, countries)).toBe()
//  })


