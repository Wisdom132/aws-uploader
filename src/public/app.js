getAllImages();


let col = document.querySelector("#imageHolder");

let uiTemplate = imageKey => {
    return (`
    <div class="col-md-3" >
<img src="https://instagram-app.s3.us-west-1.amazonaws.com/${imageKey}" alt="..." class="img-thumbnail cover my-3">
                </div>`)
}

async function getAllImages() {
    try {
        let response = await axios.get('http://localhost:3000/upload');
        let data = response.data.data.Contents;
        data.forEach(image => {
            $('#imageHolder').append(uiTemplate(image.Key));

        });

    } catch (err) {
        console.log(err)
    }
}