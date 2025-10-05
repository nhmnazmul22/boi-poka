import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import HeroImg from "../../assets/hero-book-img.png";

describe("Hero Components", () => {
  it("Should render a title, button and a images", () => {
    render(<Hero />);

    const title = screen.getByRole("heading", {
      name: /Books to freshen up your bookshelf/i,
    });
    const button = screen.getByRole("button", { name: /View The List/i });
    const images = screen.getByAltText(/Hero image/i);

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(images).toBeInTheDocument();
    expect(images).toHaveAttribute("src", HeroImg);
  });
});
