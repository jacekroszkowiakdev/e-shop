import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FavoriteButton from "../components/ui/FavoriteButton/FavoriteButton";

const mockProps = {
    initialLiked: false,
    onToggle: vi.fn(),
    size: 24,
    color: "black",
    likedColor: "red",
};

describe("FavoriteButton Component", () => {
    it("renders correctly with default state", () => {
        render(<FavoriteButton {...mockProps} />);

        // Check if the outlined heart icon is present
        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.getByTestId("heart-outline")).toBeInTheDocument();
    });

    it("toggles to liked state on click", () => {
        render(<FavoriteButton {...mockProps} />);
        const button = screen.getByRole("button");

        fireEvent.click(button);

        // Check if the filled heart icon is present
        expect(screen.getByTestId("heart-filled")).toBeInTheDocument();
        expect(mockProps.onToggle).toHaveBeenCalledWith(true);
    });

    it("respects the initialLiked prop", () => {
        render(<FavoriteButton {...mockProps} initialLiked={true} />);

        // Check if the filled heart icon is present initially
        expect(screen.getByTestId("heart-filled")).toBeInTheDocument();
    });
});
