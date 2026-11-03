import { useParams } from 'react-router-dom'

function CarDetails() {
    const { id } = useParams()

  return <h1 className="text-3xl font-bold p-8">Car Details: {id}</h1>
}

export default CarDetails