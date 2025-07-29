const url = axios.create({
    baseURL: "http://localhost:3000"
});

const api = {
    async getPosts() {
        try {
            const response = await url.get("codes");
            return await response.data;
        } catch (error) {
            alert("Erro ao buscar códigos")
            throw Error
        }
    },
    async getPostsById(id) {

    },
    async postCode(code) {
        try {
            const response = await url.post('codes', code);
            return await response.data;
        } catch (error) {
            alert("Erro ao postar código");
            throw Error
        }
    }
}

export default api