type ProductCardProps = {
  name: string
  price: number
  image: string
  rating: number
}

export default function ProductCard({ name, price, image, rating }: ProductCardProps) {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <p>⭐ {rating}</p>
    </div>
  )
}