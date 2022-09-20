import axios from 'axios'

const link = `https://swapi.dev/api/people/`

 export const getHeroes = async () => {
    const response = await axios.get(link)
    return response.data.results
    
}

export const getSingleHero = async (id) => {
    const response = await axios.get(`${link}${id}`)
    return response.data
}


