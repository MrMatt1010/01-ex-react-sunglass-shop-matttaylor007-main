import { render, cleanup } from "@testing-library/react";
import App from "../App";

afterEach(cleanup);

test("renders the Sunglass Shop page as expected", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
