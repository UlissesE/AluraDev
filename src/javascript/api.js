const api = {
    async getPosts() {
        try {
            const response = await axios.get("http://localhost:3000/codes")
            console.log(response.data)
        } catch (error) {
            
        }
    }
}

api.getPosts()