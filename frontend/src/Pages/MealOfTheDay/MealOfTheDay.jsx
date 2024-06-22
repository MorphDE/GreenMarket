import { useContext, useState } from "react";
import { CartContext } from "../../Context/Contexts";
import { backendUrl } from "../../api/api";
import { useAuth } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const MealOfTheDay = () => {
  const navigate = useNavigate();
  const defaultPersons = 4;
  const [persons, setPersons] = useState(defaultPersons);
  const { cart, setCart } = useContext(CartContext);
  const { token } = useAuth();
  const ingredients = [
    { name: "Carrots", quantity: 150 },
    { name: "Red bell pepper", quantity: 100 },
    { name: "Zucchini", quantity: 150 },
    { name: "Potatoes, peeled and thinly sliced", quantity: 200 },
    { name: "Onion, chopped", quantity: 1 },
    { name: "Garlic cloves, chopped", quantity: 2 },
    { name: "Milk", quantity: 200 },
    { name: "Grated Gouda cheese", quantity: 100 },
  ];

  // Function to calculate ingredient quantities based on number of persons
  const calculateIngredientQuantity = (quantity) => {
    if (typeof quantity === "number") {
      return quantity * (persons / defaultPersons);
    }
    return quantity; // Return for ingredients with variable quantity
  };

  async function addToCart() {
    const res = await fetch(`${backendUrl}/api/v1/cart/addMealOfTheDay`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();
    const updatedCart = { ...cart, data };
    setCart(updatedCart);
    navigate("/cart");
  }

  return (
    <section>
      <h1>Meal of the Day</h1>
      <div className="recipe">
        <h2>Veggie Casserole</h2>

        <div className="ingredient-list">
          <h3>Ingredients:</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {calculateIngredientQuantity(ingredient.quantity)}{" "}
                {typeof ingredient.quantity === "number" ? "g" : ""}{" "}
                {ingredient.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="instruction-steps">
          <h3>Instructions:</h3>
          <ol>
            <li className="step">
              <strong>Prepare vegetables:</strong> Thoroughly wash the
              vegetables and cut them into bite-sized pieces, depending on the
              type.
            </li>
            <li className="step">
              <strong>Preheat oven:</strong> Preheat the oven to 200°C (392°F)
              conventional oven setting.
            </li>
            <li className="step">
              <strong>Sauté:</strong> Heat olive oil in a pan and sauté the
              chopped onion and garlic until translucent.
            </li>
            <li className="step">
              <strong>Add vegetables:</strong> Add the prepared vegetables and
              sauté for about 5-7 minutes, stirring occasionally, until lightly
              browned. Season with salt and pepper.
            </li>
            <li className="step">
              <strong>Layer:</strong> Grease a large casserole dish. Place a
              layer of potato slices on the bottom of the dish. Top with a layer
              of the sautéed vegetables. Repeat this process alternately until
              all ingredients are used.
            </li>
            <li className="step">
              <strong>Add cream:</strong> Pour the cream or milk over the
              vegetable casserole.
            </li>
            <li className="step">
              <strong>Sprinkle cheese:</strong> Evenly sprinkle the grated
              cheese over the vegetable casserole.
            </li>
            <li className="step">
              <strong>Bake:</strong> Place the casserole dish in the preheated
              oven and bake the vegetable casserole for about 30-35 minutes,
              until the potatoes are tender and the cheese is golden brown and
              crispy.
            </li>
            <li className="step">
              <strong>Serve:</strong> Remove the vegetable casserole from the
              oven and let it rest for about 5 minutes before serving. Garnish
              with fresh herbs as desired and serve hot.
            </li>
          </ol>
        </div>

        <p className="note">
          This veggie casserole is versatile, healthy, and can be prepared in
          advance. You can vary the types of vegetables according to season and
          personal preferences. Enjoy your meal!
        </p>

        <div className="person-selector">
          <button
            onClick={() =>
              setPersons((prevPersons) => Math.max(prevPersons - 1, 1))
            }
          >
            -
          </button>
          <span>{persons}</span>
          <button onClick={() => setPersons((prevPersons) => prevPersons + 1)}>
            +
          </button>
        </div>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </section>
  );
};

export default MealOfTheDay;
