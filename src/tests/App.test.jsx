// App.test.jsx

import { describe, expect, test, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../routes.jsx";
import { CartProvider } from "../Context/CartProvider";

// describe("App Component", () => {
//   test("Render Magnificent Monkeys", () => {
//     const container = render(<App />);
//     expect(container).toMatchSnapshot();
//   });
//   test("Renders radical rhinos after button click", async () => {
//     const user = userEvent.setup();

//     render(<App />);
//     const button = screen.getByRole("button", { name: "Click Me" });
//     await user.click(button);
//     expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
//   });
// });

describe("App component renders", () => {
  test("Render Nav Links", () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    const container = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  });
});

describe("Nav Links end up at the right page", () => {
  let user;
  beforeEach(() => {
    user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>,
    );
  });
  test("Render Home Page", async () => {
    await user.click(screen.getByRole("link", { name: /cafe nautica/i }));
    expect(screen.getByText(/delicious coffee/i)).toBeInTheDocument();
  });

  test("Render Shop Page", async () => {
    await user.click(screen.getByRole("link", { name: /shop page/i }));
    expect(screen.getByText(/catalog/i)).toBeInTheDocument();
  });
  test("Render Cart Page", async () => {
    await user.click(screen.getByRole("link", { name: /cart page/i }));
    expect(screen.getByText(/cart view/i)).toBeInTheDocument();
  });
});
