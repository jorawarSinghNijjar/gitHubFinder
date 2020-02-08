class GitHub {
    constructor() {
        this.client_id = "b6e85cb1216d2afe422f";
        this.client_secret = "0f929a0bef84083b52795e03d5b3c632f5f7530f";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}