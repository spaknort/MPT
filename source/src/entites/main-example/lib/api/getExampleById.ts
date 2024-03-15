export const getExampleById = async (exampleId: number): Promise<any> => {
    const response = await fetch('http://localhost:5000/solve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({exampleId})
    })

    const result = await response.json()
    localStorage.setItem('example', JSON.stringify(result))

    return result
}