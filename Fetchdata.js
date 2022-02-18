function fetchdata() {
    // fetch('http://jsonplaceholder.typicode.com/users').then(function (response) {
    //     return response.json();
    // }).then(function (obj) {
    //     console.log(obj);

    // }).catch(function (error) {
    //     console.error('something went wrong with retriving tht people');
    //     console.error(error);
    // });


    fetch('http://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const html = data
                .map(user => {
                    return `
                <div class="user">
                <p>ID: ${user.id}</p>
                <p>Name: ${user.name}</p>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</P>
              
                <p>Adress: ${user.address}</p>
                <span>Street: ${user.street}</span>
                </div>

                `;
                })
                .join("");
            console.log(html)

            document.querySelector('#app')
                .insertAdjacentHTML("afterbegin", html);
        })
        .catch((err) => {
            console.error('something went wrong with retriving that people');
            console.error(error);
        });
}
fetchdata();