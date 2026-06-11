import { vi, describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomButton from "../components/CustomButton";

describe("CustomButton", () => {
  test("should render button with text click me", () => {
    render(<CustomButton onclick={() => {}} />);

    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();
  });

  test("should call the onclick function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<CustomButton onClick={onClick} />);

    const button = screen.getByRole("button", { name: "Click Me" });
    await user.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("should not call onClick if button not clicked", () =>{
    const onClick = vi.fn();
    render(<CustomButton onClick={onClick}/>);
    expect(onClick).not.toHaveBeenCalled();
  })
});
