import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import SearchContainer from './searchbar'
import renderer from 'react-test-renderer';

describe("Navbar Component", () => {
  it('does not crash when loaded onto page', () => {
    shallow(<SearchContainer total={[]} />)
  })
})