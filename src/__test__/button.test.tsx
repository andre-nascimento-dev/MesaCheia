import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button";

test("Should be able to click on button", () => {
  render(<Button>Enviar</Button>);

  const buttonElement = screen.getByRole("button");

  userEvent.click(buttonElement);

  expect(buttonElement).not.toBeDisabled();
});

test("Should not be able to click on button if it is disabled", () => {
  render(<Button disabled>Enviar</Button>);

  const buttonElement = screen.getByRole("button");

  expect(buttonElement).toBeDisabled();
});
