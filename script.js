document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('input-field');
    const addBtn = document.getElementById('add-button');
    const optionsContainer = document.getElementById('options-container');
    const decisionButton = document.getElementById('decision-button');
    const restartButton = document.getElementById('restart-button');
    const decisionResult = document.getElementById('decision-result');

    const options = [];

    function addOption() {
        const optionText = inputField.value.trim();
        if (optionText !== '') {
            options.push(optionText);
            inputField.value = '';
            renderOptions();
        }
    }

    addBtn.addEventListener('click', addOption);

    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addOption();
        }
    });

    decisionButton.addEventListener('click', function() {
        if (options.length < 2) {
            decisionResult.textContent = "Add at least 2 options to make a decision.";
        } else {
            const randomIndex = Math.floor(Math.random() * options.length);
            const selectedOption = options[randomIndex];
            decisionResult.textContent = ` ${selectedOption} wins!`;
        }
    });

    restartButton.addEventListener('click', function() {
        options.length = 0;
        renderOptions();
        decisionResult.textContent = '';
    });

    function renderOptions() {
        optionsContainer.innerHTML = '';
        options.forEach(function(option, index) {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            const optionText = document.createElement('span');
            optionText.className = 'option-text';
            optionText.textContent = option;
            optionElement.appendChild(optionText);
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                options.splice(index, 1);
                renderOptions();
            });
            optionElement.appendChild(deleteButton);
            optionsContainer.appendChild(optionElement);
        });
    }
});
