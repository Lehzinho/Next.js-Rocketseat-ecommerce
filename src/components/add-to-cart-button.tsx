'use client'
import { useCart } from '@/contexts/cart-context'
import React from 'react'

export interface addToCartButtonProps {
  productId: number
}

const AddToCartButton = ({ productId }: addToCartButtonProps) => {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white "
    >
      Adicionar ao carrinho
    </button>
  )
}

export default AddToCartButton
