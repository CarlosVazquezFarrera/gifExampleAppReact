import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe("GifItem", () => {
  const url =
    "https://media4.giphy.com/media/fwii0mKnvHshW/giphy.gif?cid=26e8e2e09fnihkdk5c3gp8ib5izhjbgs9ajrpfbuogtb8q7e&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  const title = "test";
  test("should match snatshop", () => {
    const { container } = render(<GifItem url={url} title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("should math alt and src", () => {
    render(<GifItem url={url} title={title} />);
    const { src, alt } = screen.getByRole("img");

    expect(src).toEqual(url);
    expect(alt).toEqual(title);
  });
});
