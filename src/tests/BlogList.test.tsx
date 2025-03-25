import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BlogList from "../pages/BlogList";

describe("BlogList page", () => {
  it("renders blog list title", () => {
    const { getByText } = render(
      <MemoryRouter>
        <BlogList />
      </MemoryRouter>
    );
    expect(getByText("DWS Blog")).toBeInTheDocument();
  });

  it("renders filter component", () => {
    const { getByText } = render(
      <MemoryRouter>
        <BlogList />
      </MemoryRouter>
    );
    expect(getByText("Filters")).toBeInTheDocument();
  });

  it("renders sort component", () => {
    const { getByText } = render(
      <MemoryRouter>
        <BlogList />
      </MemoryRouter>
    );
    expect(getByText("Sort by:")).toBeInTheDocument();
  });

  it("renders loading message when data is loading", () => {
    jest.mock("../hooks/useFetchPosts", () => ({
      __esModule: true,
      default: () => ({ loading: true, error: null, posts: [] }),
    }));

    const { getByText } = render(
      <MemoryRouter>
        <BlogList />
      </MemoryRouter>
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error message when data fetch fails", () => {
    jest.mock("../hooks/useFetchPosts", () => ({
      __esModule: true,
      default: () => ({ loading: false, error: "Error message", posts: [] }),
    }));

    const { getByText } = render(
      <MemoryRouter>
        <BlogList />
      </MemoryRouter>
    );
    expect(getByText("Error: Error message")).toBeInTheDocument();
  });

  it("renders blog posts when data is available", async () => {
    jest.mock("../hooks/useFetchPosts", () => ({
      __esModule: true,
      default: () => ({
        loading: false,
        error: null,
        posts: [
          { id: 1, title: "Post 1", content: "Content 1" },
          { id: 2, title: "Post 2", content: "Content 2" },
        ],
      }),
    }));

    const { getAllByRole } = render(
      <MemoryRouter>
        <BlogList />
      </MemoryRouter>
    );
    await waitFor(() => expect(getAllByRole("article")).toHaveLength(2));
    expect(getAllByRole("article")[0]).toHaveTextContent("Post 1");
    expect(getAllByRole("article")[1]).toHaveTextContent("Post 2");
  });
});
