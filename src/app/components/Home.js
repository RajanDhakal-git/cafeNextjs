"use client"

import { useMycontext } from "../store/ContextProvider"
import Accrodition from "./Accrodition"
import Card from "./Card"

const Home = () => {
    const { allData } = useMycontext()
    return (
        <div
            className="min-h-screen  bg-white w-full flex gap-4 p-5">
            <div className="left-side w-72 " >
                <Accrodition />
            </div>
            <div className="right-side flex w-full flex-wrap gap-4 " >
                {allData.map((item, index) => (
                    <Card
                        key={index}
                        strMeal={item.strMeal}
                        strMealThumb={item.strMealThumb}
                        strInstructions={item.strInstructions}
                        idMeal={item.idMeal}
                    />
                ))}
            </div>

        </div>
    )
}

export default Home