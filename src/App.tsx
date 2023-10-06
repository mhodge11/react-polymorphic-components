import { useRef } from "react";
import "./App.css";
import { Text } from "./components";

const Emphasis = ({ children }: { children: string | number }) => (
  <em style={{ background: "yellow", color: "black", fontSize: "40px" }}>
    {children}
  </em>
);

export const App = () => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const ref2 = useRef<HTMLHeadingElement | null>(null);

  return (
    <div className="App">
      <Text ref={ref2} as="h1">
        Hello CodeSandbox
      </Text>

      <Text as="h2" color="violet" style={{ backgroundColor: "black" }}>
        Start editing to see some magic happen!
      </Text>

      <Text ref={ref} as="a" href="https://www.google.com">
        Hello world
      </Text>

      <Text>This is a text node with no as</Text>

      <br />

      <Text as={Emphasis}>This is a text node with emphasis</Text>
    </div>
  );
};
