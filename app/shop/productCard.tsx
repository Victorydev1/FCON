import Image from "next/image"

export default function ProductCard({name, price, image, rating}: any) {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden">
      <Image
       src={image} 
       alt={name} 
       width={300} 
       height={300} 
       className="w-full h-72 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <div className="text-yellow-500">{"★".repeat(rating)}</div>
          <p className="text-orange-500 font-bold">₦{price}</p>
        </div>
        <button className="mt-4 w-full py-2 bg-gradient-to-r from-purple-700 to-orange-400 text-white rounded">👜 Add to cart</button>
      </div>
    </div>
  )
}