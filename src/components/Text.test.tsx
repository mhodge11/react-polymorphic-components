import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

test("renders span when as prop is not passed", () => {
  render(<Text>test</Text>);
  const spanElement = screen.getByText("test");
  expect(spanElement.nodeName.toLowerCase()).toBe("span");
});

test('renders h1 when as prop is passed "h1"', () => {
  render(<Text as="h1">test</Text>);
  const h1Element = screen.getByText("test");
  expect(h1Element.nodeName.toLowerCase()).toBe("h1");
});
