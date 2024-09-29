body {
    font-family: 'Arial', sans-serif;
    text-align: center;
    padding: 20px;
    background-color: #f4f4f9;
}

h1, h2 {
    color: #333;
}

.interactive-area {
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    background: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    width: 80%;
    max-width: 600px;
}

#wheel {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 8px solid #ccc;
    border-top-color: red; /* Highlight color */
    margin: 20px auto;
    position: relative;
}

#spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-top: -25px; /* Half height */
    margin-left: -25px; /* Half width */
    background-color: red;
    border-radius: 50%;
}

button {
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    background-color: #007BFF;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#question, #answer {
    margin-top: 10px;
    font-size: 18px;
    color: #333;
}

#flashcards-container, #matching-game {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}

.flashcard, #terms div, #definitions div {
    border: 1px solid #ccc;
    padding: 10px;
    background: #fff;
    cursor: pointer;
}

.flashcard {
    width: 200px;
    height: 120px;
    perspective: 1000px; /* Enable 3D space for children */
}

.card-content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card-content.flipped {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.card-back {
    background-color: #eef;
    transform: rotateY(180deg);
}

#terms, #definitions {
    flex: 1;
    min-height: 150px;
    border: 1px dashed #ccc;
}
