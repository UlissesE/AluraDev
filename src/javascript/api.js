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
    async getPostsBySearch(termo) {
        try {
            const codes = await this.getPosts();
            const formatedTermo = termo.toLowerCase();

            const filtredCodes = codes.filter(code => {
                return code.name.toLowerCase().includes(formatedTermo) ||
                code.description.toLowerCase().includes(formatedTermo) || 
                code.language.toLowerCase().includes(formatedTermo)
            })
            return filtredCodes;
        } catch (error) {
            alert("Erro ao realizar a busca por termo.");
            throw Error
        }
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