import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import {getSingleHero} from '../../shared/services/API'



const SingleHeroPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [hero, setHero] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        const fetchHero = async() =>{
            try{
                setIsLoading(true)
                const data = await getSingleHero(id)
                setHero(data)
            }catch(error){
                console.log(error)
            } finally{
                setIsLoading(false)
            }
        }
        fetchHero()
    }, [])
    const keys = Object.keys(hero)
    return(
        <div>
            {isLoading && <p>Loading...</p>}
            {keys.length > 0 && <div><p>{hero.name}</p></div>}
        </div>
    )
}

export default SingleHeroPage
