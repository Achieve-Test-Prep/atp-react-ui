import React from 'react';

import { render } from '@testing-library/react';

import { Button } from '../components';
// import { defaultTheme as theme } from '../themes/default';
// import HeartIcon from './utils/heart.svg';

describe('Base Button', () => {
  it('should render without crashing', () => {
    render(<Button aria-label="test" />);
    console.log('TODO add all tests for button');
  });

  //   it('should render a button element', () => {
  //     const { container } = render(<Button aria-label="test" />);

  //     // // expect(wrapper.find('button')).toHaveLength(1);
  //   });

  //   it('should render a button with type button', () => {
  //     const { container } = render(<Button aria-label="test" />);

  //     // // expect(wrapper.find('button[type="button"]')).toHaveLength(1);
  //   });

  //   it('should render a button with type submit', () => {
  //     const { container } = render(<Button aria-label="test" type="submit" />);

  //     // // expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
  //   });

  //   it('should render a button with type reset', () => {
  //     const { container } = render(<Button aria-label="test" type="reset" />);

  //     // // expect(wrapper.find('button[type="reset"]')).toHaveLength(1);
  //   });

  //   it('should render an anchor element', () => {
  //     const { container } = render(<Button aria-label="test" tag="a" />);

  //     // // expect(wrapper.find('a')).toHaveLength(1);
  //   });

  //   it('should not contain type for anchor element', () => {
  //     const { container } = render(<Button aria-label="test" tag="a" />);

  //     // // expect(wrapper.find('a').getDOMNode().getAttribute('type')).toBeNull();
  //   });

  //   it('should render an arbitrary element', () => {
  //     const { container } = render(<Button aria-label="test" tag="div" />);

  //     // // expect(wrapper.find('div')).toHaveLength(1);
  //   });

  //   it('should render its children', () => {
  //     const { container } = render(<Button>Hi</Button>);

  //     // // expect(wrapper.find('button').text()).toBe('Hi');
  //   });

  //   it('should contain base classes', () => {
  //     const expected =
  //       'inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none';
  //     const { container } = render(<Button aria-label="test" />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  //   });

  //   it('should call onClick callback', (done) => {
  //     render(<Button aria-label="test" onClick={() => done()} />).simulate('click');
  //   });

  //   it('should contain the appropriate type', () => {
  //     const expected = 'submit';
  //     const { container } = render(<Button aria-label="test" type="submit" />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('type')).toBe(expected);
  //   });

  //   it('should render a full width button', () => {
  //     const expected = 'w-full';
  //     const { container } = render(<Button aria-label="test" block />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  //   });

  //   it('should render a regular button', () => {
  //     const expected = 'px-4 py-2 rounded-lg text-sm';
  //     const { container } = render(<Button aria-label="test" />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  //   });

  //   it('should extend classes', () => {
  //     const expected = 'ml-2';
  //     const { container } = render(<Button aria-label="test" className="ml-2" />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  //   });

  //   // it('should warn', () => {
  //   //   const expected = 'ml-2'
  //   //   const { container } = render(<Button size="icon" />)

  //   //   // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  //   // })
  // });

  // describe('Sizes', () => {
  //   it('should render a larger button', () => {
  //     const expected = 'px-10 py-4 rounded-lg';
  //     const { container } = render(<Button aria-label="test" size="lg" />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  //   });

  //   it('should render a large button', () => {
  //     const expected = 'px-5 py-3 rounded-lg';
  //     const { container } = render(<Button aria-label="test" size="lg" />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  //   });

  //   // the default case is tested in the Base Button suite
  //   it('should render a regular button', () => {
  //     const expected = 'px-4 py-2 rounded-lg text-sm';
  //     const { container } = render(<Button aria-label="test" size="base" />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  //   });

  //   it('should render a small button', () => {
  //     const expected = 'px-3 py-1 rounded-md text-sm';
  //     const { container } = render(<Button aria-label="test" size="sm" />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  //   });
  // });

  // describe('Primary Button', () => {
  //   it('should contain primary base classes', () => {
  //     const expected = 'text-white bg-purple-600 border border-transparent';
  //     const { container } = render(<Button aria-label="test" />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  //   });

  //   it('should contain primary active classes', () => {
  //     const expected = theme.button.primary.active;
  //     const { container } = render(<Button aria-label="test" />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  //   });

  //   it('should contain primary disabled classes', () => {
  //     const expected = 'opacity-50 cursor-not-allowed';
  //     const { container } = render(<Button aria-label="test" disabled />);

  //     // // expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(expected);
  //   });

  //   it('should not contain primary active classes when disabled', () => {
  //     const expected = 'active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple';
  //     const { container } = render(<Button aria-label="test" disabled />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).not.toContain(expected);
  //   });
  // });

  // describe('Outline Button', () => {
  //   it('should contain outline base classes', () => {
  //     const expected = 'text-gray-600 border-gray-300 border tb:text-gray-400 focus:outline-none';
  //     const { container } = render(<Button aria-label="test" as="outline" />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  //   });

  //   it('should contain outline active classes', () => {
  //     const expected = theme.button.outline.active;
  //     const { container } = render(<Button aria-label="test" as="outline" />);

  //     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  //   });

  //   it('should contain outline disabled classes', () => {
  //     const expected = 'opacity-50 cursor-not-allowed bg-gray-300';
  //     const { container } = render(<Button aria-label="test" as="outline" disabled />);

  //     // // expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(expected);
  //   });
});

// describe('Link Button', () => {
//   it('should contain link base classes', () => {
//     const expected = 'text-gray-600 tb:text-gray-400 focus:outline-none';
//     const { container } = render(<Button aria-label="test" as="link" />);

//     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
//   });

//   it('should contain link active classes', () => {
//     const expected = theme.button.link.active;
//     const { container } = render(<Button aria-label="test" as="link" />);

//     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
//   });

//   it('should contain link disabled classes', () => {
//     const expected = 'opacity-50 cursor-not-allowed';
//     const { container } = render(<Button aria-label="test" as="link" disabled />);

//     // // expect(wrapper.find('button[disabled]').getDOMNode().getAttribute('class')).toContain(expected);
//   });
// });

// describe('DropdownItem Button', () => {
//   it('should contain DropdowItem button classes', () => {
//     const expected =
//       'inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 tb:hover:bg-gray-800 tb:hover:text-gray-200';
//     const { container } = render(<Button aria-label="test" as="dropdownItem" />);

//     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
//   });
// });

// describe('Pagination Button', () => {
//   it('should contain PageButton classes', () => {
//     const expected = 'px-3 py-1 rounded-md text-xs';
//     const { container } = render(<Button aria-label="test" size="pagination" />);

//     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
//   });
// });

// describe('Icon', () => {
//   it('should contain an svg as a children', () => {
//     const { container } = render(
//       <Button aria-label="test">
//         <HeartIcon />
//       </Button>
//     );

//     // // expect(wrapper.find('svg')).toBeDefined();
//   });

//   it('should contain an svg passed as prop', () => {
//     const { container } = render(<Button icon={HeartIcon}>Test</Button>);

//     // // expect(wrapper.find('svg')).toBeDefined();
//   });

//   it('should render an icon as the first child of the button, using icon', () => {
//     const { container } = render(<Button icon={HeartIcon}>Lorem</Button>);

//     // // expect(wrapper.find('button').children()).toHaveLength(2);
//     // // expect(wrapper.find('button').childAt(0).type()).toBe(HeartIcon);
//     // // expect(wrapper.find('button').childAt(1).text()).toBe('Lorem');
//   });

//   it('should render an icon as the first child of the button, using iconLeft', () => {
//     const { container } = render(<Button iconLeft={HeartIcon}>Lorem</Button>);

//     // // expect(wrapper.find('button').children()).toHaveLength(2);
//     // // expect(wrapper.find('button').childAt(0).type()).toBe(HeartIcon);
//     // // expect(wrapper.find('button').childAt(1).text()).toBe('Lorem');
//   });

//   it('should render an icon as the last child of the button', () => {
//     const { container } = render(<Button iconRight={HeartIcon}>Lorem</Button>);

//     // // expect(wrapper.find('button').children()).toHaveLength(2);
//     // // expect(wrapper.find('button').childAt(0).text()).toBe('Lorem');
//     // // expect(wrapper.find('button').childAt(1).type()).toBe(HeartIcon);
//   });

//   it('should not contain left or right styles', () => {
//     const expected = 'mr-2 -ml-1 ml-2 -mr-1';
//     const { container } = render(<Button aria-label="test" icon={HeartIcon} />);

//     // // expect(wrapper.find('svg').getDOMNode().getAttribute('class')).not.toContain(expected);
//   });

//   it('should render an icon with left styles', () => {
//     const expected = 'mr-2 -ml-1';
//     const { container } = render(<Button iconLeft={HeartIcon}>Lorem</Button>);

//     // // expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expected);
//   });

//   it('should render an icon with right styles', () => {
//     const expected = 'ml-2 -mr-1';
//     const { container } = render(<Button iconRight={HeartIcon}>Lorem</Button>);

//     // // expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expected);
//   });

//   it('should render a button with regular styles if children is present', () => {
//     const expected = 'px-4 py-2 rounded-lg text-sm';
//     const { container } = render(<Button iconLeft={HeartIcon}>Lorem</Button>);

//     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
//   });

//   it('should contain regular sized button icon classes', () => {
//     const expectedButton = 'p-2 rounded-lg';
//     const expectedSvg = 'size-5';
//     const { container } = render(<Button aria-label="test" icon={HeartIcon} />);

//     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expectedButton);
//     // // expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expectedSvg);
//   });

//   it('should contain small sized button icon classes', () => {
//     const expectedButton = 'p-2 rounded-md';
//     const expectedSvg = 'size-3';
//     const { container } = render(<Button aria-label="test" size="sm" icon={HeartIcon} />);

//     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expectedButton);
//     // // expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expectedSvg);
//   });

//   it('should contain large sized button icon classes', () => {
//     const expectedButton = 'p-3 rounded-lg';
//     const expectedSvg = 'size-5';
//     const { container } = render(<Button aria-label="test" size="lg" icon={HeartIcon} />);

//     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expectedButton);
//     // // expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expectedSvg);
//   });

//   it('should contain larger sized button icon classes', () => {
//     const expectedButton = 'p-4 rounded-lg';
//     const expectedSvg = 'size-5';
//     const { container } = render(<Button aria-label="test" size="lg" icon={HeartIcon} />);

//     // // expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expectedButton);
//     // // expect(wrapper.find('svg').getDOMNode().getAttribute('class')).toContain(expectedSvg);
//   });
// });
