const addTransaction = ({ request, response }: { request: any; response: any }) => {
    response.body = { message: 'OK'} 
    response.status = 200
}

export { addTransaction }