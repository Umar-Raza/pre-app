
import ManuItem from "./ManuItem";
const Cart = () => {
  return (
    <section className="max-w-sm mx-auto">
      <h1>Cart</h1>
      <ul>
        <ManuItem
          itme={{
            name: "biryani",
            quantity: 2,
          }}
        />
        <ManuItem
          itme={{
            name: "handi",
            quantity: 1,
          }}
        />
        <ManuItem
          itme={{
            name: "halwa puri",
            quantity: 6,
          }}
        />
      </ul>
    </section>
  );
};

export default Cart;
