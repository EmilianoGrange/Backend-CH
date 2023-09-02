const socket = io();

const table = document.querySelector('#rpTable');

const form = document.querySelector('#createForm');

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    body = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        price: document.querySelector('#price').value,
        code: document.querySelector('#code').value,
        stock: document.querySelector('#stock').value,
        category: document.querySelector('#category').value
    }

    fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res)
        Toastify({
            text: 'Producto creado!',
            duration: 2000,
            style: {
                background: "linear-gradient(to right, #5f2c82, #49a09d)"
            }
        }).showToast();
    }).catch((error) => {
        console.log(error)
    })
});

