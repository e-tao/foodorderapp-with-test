import { render, screen } from "@testing-library/react";
import AvailableMeals from "../AvailableMeals";
import MealsSummary from "../MealsSummary";

describe("Meal Test", () => {
  //test need to reconfig when the DUMMY DATA changes

  it("has available meals", () => {
    render(<AvailableMeals />);
    const availableMealsElements = screen.getAllByRole("listitem");
    expect(availableMealsElements.length).toBe(4);
  });

  it("has Meals Summary", () => {
    render(<MealsSummary />);
    const mealsSummaryElement = screen.getByTestId("meal-summary");
    expect(mealsSummaryElement).toBeInTheDocument();
  });
});
