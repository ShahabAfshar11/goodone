function nextPage() {
    const name = document.getElementById("nameInput").value;

    if (name) {
        // Create a new page dynamically
        const newPage = window.open('', '_blank');
        newPage.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome, ${name}!</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #f0f8ff;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #333;
                    }
                    p {
                        font-size: 18px;
                        color: #555;
                    }
                </style>
            </head>
            <body>
                <h1>Hello, ${name}!</h1>
                <p>Welcome to your personalized page. We hope you have a great time here!</p>
                <button onclick="window.close()">Close</button>
            </body>
            </html>
        `);
    } else {
        alert("Please enter your name.");
    }
}
