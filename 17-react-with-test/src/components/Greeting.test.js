import { render, screen } from '@testing-library/react';
// user-event trigger user events in the virtual screen
import userEvent from '@testing-library/user-event';

// import component that we do want to test
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('renders Hello World as a text.', () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert

    /**
     * [screen]
     * - virtual DOM which was rendered.
     * - find function on that screen
     * ex)
     *  1. 'get' function throw Error if not found
     *  2. 'query' function won't
     *  3. 'find' function return promise
     */
    const helloWorldElement = screen.getByText('Hello World', { exact: false }); // second arg is exact match
    // HTML element expect here is in the document / or not be here with 'not.toBeInTheDocumen'
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if then button was NOT clicked', () => {
    // Arrange
    render(<Greeting />);

    // Assert
    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('does not renders "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button'); //select element
    userEvent.click(buttonElement);

    // Assert
    // [query*] return null, if element is not found
    const outputElement = screen.queryByText('good to see you', { exact: false });
    expect(outputElement).toBeNull();
  });
});
