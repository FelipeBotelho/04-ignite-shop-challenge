import { CartProduct } from "@/contexts/CartContext";
import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { products } = req.body as { products: CartProduct[]};

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!products) {
    return res.status(400).json({ error: 'Products not found' });
  }

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancel_url = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: success_url,
    cancel_url: cancel_url,
    mode: 'payment',
    line_items: products.map(product => ({
      price: product.defaultPrice,
      quantity: 1,
    }))
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}