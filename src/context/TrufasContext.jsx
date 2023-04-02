import React from 'react';
import trufaItem from '../trufas.json';

const TrufasContext = React.createContext({});

export const TrufasProvider = ({ children }) => {
    const [busca, setBusca] = React.useState('')

    const lowerBusca = busca.toLowerCase()

    const trufasFiltradas = trufaItem.data.filter(
        (trufa) => trufa.name.toLowerCase().includes(lowerBusca)
    )

    React.useEffect(() => console.log(busca), [busca])

    return (
        <TrufasContext.Provider value={{ busca, setBusca }} >
            {children}
        </TrufasContext.Provider>
    )
}

export default TrufasContext;