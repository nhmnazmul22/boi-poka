import { render, screen, within } from "@testing-library/react";
import Footer from "./Footer";
import { MemoryRouter } from "react-router";

describe("Footer Component", () => {
  const renderFooter = (route = "/") => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <Footer></Footer>
      </MemoryRouter>
    );
  };

  it("Should render a logo and a small description", () => {
    renderFooter("/");

    const logoLink = screen.getByRole("link", { name: /Book Vibe/i });
    const description = screen.getByText(/Book Industries Ltd./i);

    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");

    expect(description).toBeInTheDocument();
  });

  it("Should render some quick links of pages and a title", () => {
    renderFooter("/");
    const expectedHrefs = ["/", "/listed-books", "/read-books"];

    const quickLinksContainer = screen.getByTestId("quick-links");
    expect(
      within(quickLinksContainer).getByText(/Quick Links/i)
    ).toBeInTheDocument();

    const quickLinks = within(quickLinksContainer).getAllByRole("link");

    expect(quickLinks).toHaveLength(3);
    quickLinks.forEach((link, index) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", expectedHrefs[index]);
    });
  });

  it("Should render some legals links of pages", () => {
    renderFooter("/");

    const legalLinksContainer = screen.getByTestId("legal-links");
    expect(within(legalLinksContainer).getByText(/Legal/i)).toBeInTheDocument();

    const legalLinks = within(legalLinksContainer).getAllByRole("link");
    expect(legalLinks).toHaveLength(3);
    legalLinks.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });
});
