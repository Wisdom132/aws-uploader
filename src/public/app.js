let loader = document.querySelector('#loaderWrapper')

getAllImages();


let col = document.querySelector("#imageHolder");

let uiTemplate = imageKey => {
    return (`
    <div class="col-md-3" >
<img src="https://instagram-app.s3.us-west-1.amazonaws.com/${imageKey}" alt="..." class="img-thumbnail cover my-3">
                </div>`)
}

async function getAllImages() {
    loader.style.display = 'block';
    try {
        let response = await axios.get('http://localhost:3000/upload');
        let data = response.data.data.Contents.reverse();
        data.forEach(image => {
            $('#imageHolder').append(uiTemplate(image.Key));

        });
        loader.style.display = 'none';

    } catch (err) {
        console.log(err);
        loader.style.display = 'none';
    }
}


let form = document.querySelector("#uploadForm");
let file = document.querySelector("#file")
form.addEventListener('submit', e => {
    e.preventDefault();
    let data = file.files[0];
    var formData = new FormData;
    formData.append('image', data);
    loader.style.display = 'block';

    axios.post("http://localhost:3000/upload", formData).then(res => {
        console.log(res)
        loader.style.display = 'none';
        alert("Image Added");
        getAllImages();
    }).catch(err => {
        console.log(err)
        loader.style.display = 'none';
        alert("Something Went Wrong");

    })

})