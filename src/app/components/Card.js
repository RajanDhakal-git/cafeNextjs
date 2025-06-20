"use client"

import { useRouter } from "next/navigation"

const Card = ({strMeal ,strMealThumb ,strInstructions, idMeal, price}) => {
    const {push} = useRouter()
    // Generate a random price if not provided
    const displayPrice = price || (Math.floor(Math.random() * 200) + 100) / 10;
    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <div className="card bg-white w-96 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <figure className="relative">
                    <img
                        onClick={() => {
                            push(`/${idMeal}`)
                        }}
                        className='cursor-pointer rounded-t-xl h-60 object-cover w-full hover:scale-105 transition-transform duration-300'
                        src={strMealThumb}
                        alt={strMeal}
                    />
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        ${displayPrice}
                    </span>
                </figure>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-2xl font-bold text-gray-800 mb-2 text-center">
                        {strMeal}
                    </h2>
                    <p className='line-clamp-3 text-gray-600 text-center mb-4'>{strInstructions}</p>
                    <div className="flex gap-3 w-full justify-center">
                        <button className="btn btn-primary rounded-full px-6 py-2 font-semibold text-lg shadow-md hover:scale-105 transition-transform duration-200">
                            Order Now
                        </button>
                        <button className="btn btn-outline btn-secondary rounded-full px-6 py-2 font-semibold text-lg hover:bg-secondary hover:text-white transition-colors duration-200">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card