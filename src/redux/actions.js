const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const fetchMakes = () => {
    return (dispatch) => {
        console.log("test")
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
            .then(res => res.json())
            .then(response => {
                console.log(response.Results)
                const action = {
                    type: 'FETCH_MAKES',
                    value: response.Results
                }
                console.log(action)
                dispatch(action)
            })
    }
}

export const deleteMake = (index) => {
    return {
        type: 'DELETE_MAKES',
        value: index
    }
}