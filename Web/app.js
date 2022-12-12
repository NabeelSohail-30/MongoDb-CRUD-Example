const url = window.location.href;
let baseUrl = "";

if (url.split(":")[0] === 'https') {
    baseUrl = 'https://ill-pink-gorilla-cuff.cyclic.app';
} else {
    baseUrl = 'http://localhost:5001';
}

/*------------------------------------------------------------------------*/

let addProduct = () => {

    let name = document.querySelector("#name").value
    let price = document.querySelector("#price").value
    let cat = document.querySelector("#cat").value
    let desc = document.querySelector("#desc").value

    axios.post(`${baseUrl}/product`, {
        name: name,
        price: price,
        category: cat,
        description: desc
    })
        .then(function (response) {
            // handle success
            console.log("response is success");
            console.log(response.data);

            alert(response.data.message);

            getAllProducts();

        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.querySelector("#result").innerHTML =
                error.message
        })

}

/*------------------------------------------------------------------------*/

let getAllProducts = () => {
    axios.get(`${baseUrl}/products`)
        .then(function (response) {
            // handle success
            console.log("response is success");
            console.log(response.data.data);
            document.querySelector("#productList").innerHTML = ""

            response?.data?.data.map((eachProduct, index) => {
                document.querySelector("#productList").innerHTML +=
                    `
                    <div class='pr_card'>
                        <div class='prName'>${eachProduct.name} </div>
                        <div class='prPrice'>${eachProduct.price} </div>
                        <div class='prCatg'>${eachProduct.category} </div>
                        <div class='prDesc'>${eachProduct.description} </div>
                        
                        <div class='action'>
                            <button class='btn' onclick="deleteProduct('${eachProduct._id}')">delete </button>
                            <button class='btn' onclick="editProduct('${eachProduct._id}')">Edit </button>
                            <button class='btn' onclick="updateProduct('${eachProduct._id}')">Update </button>
                        </div>
                    </div>
                    `
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.querySelector("#result").innerHTML = error.data.message
        })
}

/*------------------------------------------------------------------------*/

let deleteProduct = (id) => {

    axios.delete(`${baseUrl}/product/${id}`)
        .then(function (response) {
            // handle success
            console.log("response is success");
            console.log(response.data);

            document.querySelector("#result").innerHTML = response.data.message
            getAllProducts();

        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.querySelector("#result").innerHTML = error.data.message
        })
}

/*------------------------------------------------------------------------*/

let updateProduct = (id) => {

    let name = document.querySelector("#nameUp").value
    let price = document.querySelector("#priceUp").value
    let cat = document.querySelector("#catUp").value
    let desc = document.querySelector("#descUp").value

    axios.put(`${baseUrl}/product/${id}`, {
        name: name,
        price: price,
        category: cat,
        description: desc
    })
        .then(function (response) {
            // handle success
            console.log("response is success");
            console.log(response.data);

            document.querySelector("#result").innerHTML =
                response.data.message

            getAllProducts();

        })
        .catch(function (error) {
            // handle error
            console.log(error);
            document.querySelector("#result").innerHTML =
                error.data.message
        })

}