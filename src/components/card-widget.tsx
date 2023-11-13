"use client";
import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/cart-context";

const CardWidget = () => {
  const {items} = useCart()
  return (
    <div className="flex items-center gap-4">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">Cart ({items.length})</span>
    </div>
  );
};

export default CardWidget;
