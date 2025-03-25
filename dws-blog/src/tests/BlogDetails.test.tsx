import React from "react";
import jest from "@jest/globals";
import "@testing-library/jest-dom";
import BlogDetail from "../pages/BlogDetail";
import { render } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { Post } from "../types/Post";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("BlogDetail page", () => {
  const post: Post = {
    id: 1,
    title: "Test Post",
    content: "This is a test post",
    author: {
      name: "John Doe",
      profilePicture: "https://example.com/profile-picture.jpg",
    },
    thumbnail_url: "https://example.com/thumbnail.jpg",
    createdAt: "2022-01-01T00:00:00.000Z",
  };

  beforeEach(() => {
    (useParams as jest.Mock<typeof useParams>).mockReturnValue({
      id: post.id.toString(),
    });
  });

  it("renders post title", () => {
    const { getByText } = render(<BlogDetail />);
    expect(getByText(post.title)).toBeInTheDocument();
  });

  it("renders post content", () => {
    const { getByText } = render(<BlogDetail />);
    expect(getByText(post.content)).toBeInTheDocument();
  });

  it("renders author name and profile picture", () => {
    const { getByText, getByAltText } = render(<BlogDetail />);
    expect(getByText(post.author.name)).toBeInTheDocument();
    expect(getByAltText(post.author.name)).toBeInTheDocument();
  });

  it("renders thumbnail image", () => {
    const { getByAltText } = render(<BlogDetail />);
    expect(getByAltText(post.title)).toBeInTheDocument();
  });

  it("renders formatted date", async () => {
    const { getByText } = render(<BlogDetail />);
    await waitFor(() => expect(getByText("Jan 1, 2022")).toBeInTheDocument());
  });
});
