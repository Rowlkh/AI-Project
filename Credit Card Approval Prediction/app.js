document.querySelector('.zfbtnSubmit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button action
    
    // Collect form data
    let formData = new FormData(document.querySelector('form'));
    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Send the data to Flask server using Fetch API
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the data as JSON
    })
    .then(response => response.json())
    .then(result => {
        // Handle the prediction result (display it)
        // Assuming you want to display the result in an element with ID 'result'
        document.getElementById('result').innerText =  'MLP Prediction: ' + result.mlp_prediction;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
