type Props = {
  itme: {
    name: string;
    quantity: number;
  };
};
const ManuItems = (props: Props) => {
  return (
    <li className="flex gap-4 mx-auto text-xl justify-between">
      <h2>{props.itme.name}</h2>
      <span>{props.itme.quantity}</span>
    </li>
  );
};

export default ManuItems;
