import { render, screen } from "@testing-library/react";
import ProductItem from ".";
import testImage from "../../assets/images/test.png";

describe("ProductItem", () => {
  it("renders product details as intended", () => {
    const product = {
      productImage: testImage,
      name: "Meat",
      price: 10.99,
      description: "This meat is the best plus it is delicious.",
    };

    render(<ProductItem data={product} />);

    // Check if the image is rendered with the correct alt text
    const imageElement = screen.getByAltText(product.name);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src.split("/").pop()).toBe(product.productImage);

    // Check if the name is rendered
    const nameElement = screen.getByText(product.name);
    expect(nameElement).toBeInTheDocument();

    // Check if the price is rendered with the correct format
    const priceElement = screen.getByText(`$${product.price}`);
    expect(priceElement).toBeInTheDocument();

    // Check if the description is rendered
    const descriptionElement = screen.getByText(
      product.description.slice(0, 50) + "..."
    );
    expect(descriptionElement).toBeInTheDocument();
  });
});
