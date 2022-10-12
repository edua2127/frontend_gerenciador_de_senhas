
 export const useRemoverSenha = (id, token) => {
    const fetchData = async() => {
        const res = await fetch('http://localhost:8080/api/senha/' + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization":token
            },
        })
        console.log(res.status)
    }
    fetchData()
}