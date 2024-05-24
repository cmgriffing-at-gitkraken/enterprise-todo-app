import { type PropsWithoutRef } from "react";
import { type Widget, type Gadget } from "~/types";

interface ProductListProps {
  widgets: Widget[];
  gadgets: Gadget[];
}

export function ProductList({
  widgets,
  gadgets,
}: PropsWithoutRef<ProductListProps>) {
  return (
    <>
      <div>
        <h3>Widgets</h3>
        <ul className="mb-4 border border-primary-500 p-2">
          {widgets.map(({ id, name, description }) => (
            <li key={id} className="m-2 border border-primary-300 p-1">
              <h4>{name}</h4>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Gadgets</h3>
        <ul className="mb-4 border border-primary-500 p-2">
          {gadgets.map(({ id, name, description }) => (
            <li key={id} className="m-2 border border-primary-300 p-1">
              <h4>{name}</h4>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
