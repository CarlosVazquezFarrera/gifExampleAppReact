import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";

describe("AddCategory", () => {
  const category = "Got";
  test("should change value", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");
    expect(input).toBeTruthy();

    fireEvent.input(input, { target: { value: category } });
    expect(input.value).toBe(category);
  });

  test("should executed onNewCategory if we type a new catergory", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(category);
  });

  test("should not executed onNewCategory since it's empty", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    expect(input.value).toBe('');
    fireEvent.submit(form);
    expect(input.value).toBe('');

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
