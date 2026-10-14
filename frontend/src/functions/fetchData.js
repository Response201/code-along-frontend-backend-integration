
const BASE_URL = "http://localhost:5000";



export const fetchTodos = async () => {


    try {
        const response = await fetch("http://localhost:5000/todos",
            {

                method: "GET",
                headers: { "Content-Type": "application/json" },
                body: null


            })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message)

        }

        return data



    } catch (error) {

        console.log(error)
        throw error

    }


}



export const fetchData = async (endpoint = "", method = "GET", body = null) => {

    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`,
            {

                method: method,
                headers: { "Content-Type": "application/json" },
                body: body ? JSON.stringify(body) : null


            })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message)

        }

        return data

    } catch (error) {

        console.log(error)
        throw error

    }













};

