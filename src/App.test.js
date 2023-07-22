import { render, screen } from "@testing-library/react";
import App from "./App";
import { createElement } from "react";

test("renders learn react link", () => {
    render(createElement(App, null, null));
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
