export class customApi {
    private url = 'https://jsonplaceholder.typicode.com';
    constructor() {}

    public async patchLike(id: string) {
        try {
            return (
                await fetch(`${this.url}/posts/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            ).ok;
        } catch (e) {
            console.log(e);
        }
    }
    public async getPosts(): Promise<{ id: number; title: string; body: string }[]> {
        try {
            return await fetch(`${this.url}/posts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => res.json());
        } catch (e) {
            console.log(e);
        }
    }

    public async getPostInfoById(id: string | number) {
        try {
            return await fetch(`${this.url}/posts/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => res.json());
        } catch (e) {
            console.log(e);
        }
    }

    public async getCommentByPostId(postId: string| number) {
        try {
            return await fetch(`${this.url}/comments?postId=${postId}`).then(res=> res.json());
        } catch(e) {
            console.log(e);
        }
    }
}
