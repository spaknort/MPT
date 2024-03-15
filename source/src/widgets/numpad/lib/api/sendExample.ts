const sendExample = async (example: Array<any>) => {
    const response = await fetch('http://localhost:5000/index', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(example)
    })

    return await response.json()
}

export default sendExample