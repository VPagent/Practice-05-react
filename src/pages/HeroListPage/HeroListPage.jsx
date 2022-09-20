
import { useState } from "react"
import { useEffect } from "react"
import { getHeroes } from "shared/services/API"
import {Link} from 'react-router-dom'

const HeroListPage = () => {
    const [heroes, setHeroes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({})

    useEffect(()=>{
        const fetchHeroes = async () => {
            try{
            setIsLoading(true)
                const data = await getHeroes()
                setHeroes(data)
            } catch(error){
                console.log(error)
            } finally{
                setIsLoading(false)
            }
        }
        fetchHeroes()
    }, [])

    return(
        <>
        <h1>Hero List Page</h1>
        {isLoading && <p>Loading...</p>}
        {heroes.length > 0 && heroes.map((hero, index) => <div key={hero.name}><p>{hero.name}</p><Link to={`/hero-list-page/${index}`}>Details</Link></div>)}
        </>
        

    )
}

export default HeroListPage