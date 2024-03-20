import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ISearch from ".";

afterEach(cleanup);

// test("renders default value correctly", () => {
//   const {} = render(<ISearch value="query" />);
// });

test("renders placeholder correctly", () => {
  const placeholderText = "Search";

  render(<ISearch placeholder={placeholderText} />);

  expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
});

test("renders default value correctly", () => {
  const value = "Cotton material";

  render(<ISearch value={value} />);

  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test("calls onChange function with correct value", () => {
  // Mock onChange function
  const onChangeMock = jest.fn();

  render(<ISearch onChange={onChangeMock} />);

  const targetElement = screen.getByTestId("search");

  fireEvent.change(targetElement, { target: { value: "Test input" } });

  expect(onChangeMock).toHaveBeenCalledWith(
    expect.objectContaining({
      target: expect.objectContaining({
        value: "Test input",
      }),
    })
  );
});
