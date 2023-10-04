import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import { IVendas } from '../Context/DataContext'
import Loading from '../Components/Loading'

type IVendaSemData = Omit<IVendas, "data">

const Venda = () => {
    const paramns = useParams()
    const { data, loading } = useFetch<IVendaSemData>(`https://data.origamid.dev/vendas/${paramns.id}`)

    if (loading === true) return <Loading />

    return (
        <div>
            {data &&
                <div>
                    <div className='box mb'>ID: {data.id}</div>
                    <div className='box mb'>Nome: {data.nome}</div>
                    <div className='box mb'>Preço: {data.preco.
                        toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
                    </div>
                    <div className='box mb'>Status: {data.status}</div>
                </div>}
        </div>
    )
}

export default Venda