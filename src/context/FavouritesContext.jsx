import { createContext, useReducer, useEffect, useContext } from 'react'

const FavouritesContext = createContext()

function favouritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVOURITE': {
      const exists = state.some((country) => country.cca3 === action.payload.cca3)
      if (exists) {
        return state
      }
      return [...state, action.payload]
    }
    case 'REMOVE_FAVOURITE':
      return state.filter((country) => country.cca3 !== action.payload)
    default:
      return state
  }
}

function initFavourites() {
  const saved = localStorage.getItem('favourites')
  if (!saved) {
    return []
  }

  try {
    return JSON.parse(saved)
  } catch (error) {
    console.warn('Failed to parse favourites from localStorage:', error)
    return []
  }
}

export function FavouritesProvider({ children }) {
  const [favourites, dispatch] = useReducer(favouritesReducer, [], initFavourites)

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  return (
    <FavouritesContext.Provider value={{ favourites, dispatch }}>
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  const context = useContext(FavouritesContext)
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider')
  }
  return context
}
