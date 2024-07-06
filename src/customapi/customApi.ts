export class customApi {
    private url = 'https://jsonplaceholder.typicode.com';
    constructor() {}

    public async patchLike(id: string) {
        try {
            return await fetch(`${this.url}/posts/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
}
