import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../components/Input";
import { AiOutlineUser } from "react-icons/ai";

test("valor do input deve ser o digitado", () => {
  render(
    <Input
      label="name"
      type="text"
      placeholder="insira seu nome"
      icon={AiOutlineUser}
      name="name"
      register={() => {}}
      error={""}
    />
  );
  const inputText: any = screen.getByPlaceholderText("insira seu nome");

  fireEvent.change(inputText, { target: { value: "testando" } });

  expect(inputText.value).toBe("testando");
});
