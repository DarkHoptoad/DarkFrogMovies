import { API_URL} from './config'
const getMainMenu = async () => {
    const response = await fetch( API_URL + `&s=matrix`)

    return await response.json();
}

const getSearch = async (str, type) => {
    const response = await fetch( API_URL + `&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`)

      return await response.json();
}

const getById = async (id) => {
    const response = await fetch( API_URL + `&i=${id}`)

    return await response.json();
}

export {getSearch, getMainMenu, getById}