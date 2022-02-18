// Packages
import { render } from "@testing-library/react";

// Components
import App from "./App";

test("sum", () => {
  const { getByText } = render(<App />);

  expect(getByText("Luiz")).toBeInTheDocument();
  // expect(getByText("Henrique")).toHaveAttribute("class", "test");
});

describe("App Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<App />);

    expect(getByText("Luiz")).toBeInTheDocument();
    expect(getByText("Henrique")).toBeInTheDocument();
    expect(getByText("de")).toBeInTheDocument();
  });
});
