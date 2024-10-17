"use client";
import { useState, useEffect } from "react";
import type { Gadget, GadgetsResponse, Widget, WidgetsResponse } from "~/types";
import { env } from "~/env";
import { ProductList } from "~/components/ProductList";

const { NEXT_PUBLIC_API_BASE } = env;

export default function ProductsPage() {

  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [gadgets, setGadgets] = useState<Gadget[]>([]);

  useEffect(() => {
    fetch(`${NEXT_PUBLIC_API_BASE}/widgets`)
      .then((response) => response.json())
      .then((widgetsResponse: WidgetsResponse) => {
        setWidgets(widgetsResponse.widgets);
      })
      .catch((widgetsError) => {
        // TODO: Show error in a toast when we have that component
        console.log("Error fetching Widgets", widgetsError);
      });

    
    fetch(`${NEXT_PUBLIC_API_BASE}/gadgets`)
      .then((response) => response.json())
      .then((gadgetsResponse: GadgetsResponse) => {
        setGadgets(gadgetsResponse.gadgets);
      })
      .catch((gadgetsError) => {
        // TODO: Show error in a toast when we have that component
        console.log("Error fetching Gadgets", gadgetsError);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Products
        </h1>
        <p>Here is a list of currently available products from our Product catalog.</p>
        <ProductList widgets={widgets} gadgets={gadgets} />
      </div>
    </main>
  );
}
