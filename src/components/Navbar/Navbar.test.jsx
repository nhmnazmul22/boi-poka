import { cleanup, render, screen, within } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router";

describe("Navbar Components", () => {
  const renderNavbar = (route = "/") => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <Navbar />
      </MemoryRouter>
    );
  };

  it("should render logo and singIn and singUp buttons", () => {
    renderNavbar("/");

    const logo = screen.getByText(/Boi Poka/i);
    const singInBtn = screen.getByRole("link", { name: "Sign in" });
    const singUpBtn = screen.getByRole("link", { name: "Sign Up" });

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");

    expect(singInBtn).toBeInTheDocument();
    expect(singInBtn).toHaveAttribute("href", "/");

    expect(singUpBtn).toBeInTheDocument();
    expect(singUpBtn).toHaveAttribute("href", "/");
  });

  it("Should render menu list items", () => {
    renderNavbar("/");
    const homeMenuLinks = screen.getAllByRole("link", { name: /Home/i });
    const listedBooksMenuLinks = screen.getAllByRole("link", {
      name: /Listed Books/i,
    });
    const bookReadMenuLinks = screen.getAllByRole("link", {
      name: /Pages to read/i,
    });

    expect(homeMenuLinks).toHaveLength(2);
    expect(listedBooksMenuLinks).toHaveLength(2);
    expect(bookReadMenuLinks).toHaveLength(2);

    homeMenuLinks.forEach((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/");
    });

    listedBooksMenuLinks.forEach((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/listed-books");
    });

    bookReadMenuLinks.forEach((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/read-books");
    });
  });

  it("Should highlight the active style based on routes", () => {
    const routes = [
      { path: "/", activeLinkText: "Home" },
      { path: "/listed-books", activeLinkText: "Listed Books" },
      { path: "/read-books", activeLinkText: "Pages to read" },
    ];

    routes.forEach(({ path, activeLinkText }) => {
      renderNavbar(path);
      const desktopMenu = screen.getByTestId("desktop-links");
      // Active link

      const activeLink = within(desktopMenu).getByText(activeLinkText);
      expect(activeLink).toHaveClass(
        "btn-outline border-[#23BE0A] hover:bg-[#23BE0A]"
      );

      // Inactive Links
      const inactiveLinks = within(desktopMenu)
        .getAllByRole("link")
        .filter((link) => link.textContent !== activeLinkText);

      inactiveLinks.forEach((link) => {
        expect(link).toHaveClass(
          "bg-transparent border-0 shadow-none hover:bg-[#23BE0A]"
        );
      });

      cleanup();
    });
  });
});
