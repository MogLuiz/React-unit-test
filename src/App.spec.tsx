// Packages
import { render } from "@testing-library/react";

// Components
import App from "./App";

test("sum", () => {
  const { getByText } = render(<App />);

  expect(getByText("Hello World")).toBeInTheDocument();
  expect(getByText("Hello World")).toHaveAttribute("class", "test");
});
