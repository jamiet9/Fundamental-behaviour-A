const questions = [
    { question: "Describe how behaviour can be understood as part of the biology of an animal.", answer: "Behavior integrates genetic, neurological, and environmental influences reflective of evolutionary adaptations." },
    { question: "How does natural selection influence behavior?", answer: "It favors traits that enhance survival and reproductive success, perpetuating these behaviors in future generations." },
    // Add more detailed questions and answers
];

function spinWheel() {
    const wheel = document.getElementById('wheel');
    const degree = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transform = `rotate(${degree}deg)`;

    const randomQA = questions[Math.floor(Math.random() * questions.length)];
    setTimeout(() => {
        document.getElementById('question').textContent = randomQA.question;
        document.getElementById('answer').textContent = '';
        document.getElementById('revealBtn').onclick = () => document.getElementById('answer').textContent = randomQA.answer;
    }, 4000);
}

// Flashcards
const flashcards = [
    { term: "Natural Selection", definition: "Process by which traits become more or less common depending on their contribution to survival and reproduction." },
    { term: "Behavior", definition: "Actions or reactions of an organism in response to external or internal stimuli." },
    // Add more flashcards
];

flashcards.forEach(card => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'flashcard';
    cardContainer.innerHTML = `
        <div class="card-content">
            <div class="card-front">${card.term}</div>
            <div class="card-back">${card.definition}</div>
        </div>
    `;
    cardContainer.addEventListener('click', () => {
        cardContainer.firstChild.classList.toggle('flipped');
    });
    document.getElementById('flashcards-container').appendChild(cardContainer);
});

// Matching Game
const terms = ["Natural Selection", "Behavior"];
const definitions = ["Process by which traits become more or less common depending on their contribution to survival and reproduction.", "Actions or reactions of an organism in response to external or internal stimuli."];

terms.forEach((term, index) => {
    let termEl = document.createElement('div');
    termEl.textContent = term;
    termEl.id = 'term' + index;
    termEl.draggable = true;
    termEl.ondragstart = drag;
    document.getElementById('terms').appendChild(termEl);
});

definitions.forEach((definition, index) => {
    let defEl = document.createElement('div');
    defEl.textContent = definition;
    defEl.id = 'definition' + index;
    defEl.ondrop = drop;
    defEl.ondragover = allowDrop;
    document.getElementById('definitions').appendChild(defEl);
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
