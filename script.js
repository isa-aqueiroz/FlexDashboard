const flexDirectionButtons = document.querySelectorAll('.flex-direction');
const justifyContentButtons = document.querySelectorAll('.justify-content');
const alignItemsButtons = document.querySelectorAll('.align-items');
const flexWrapButtons = document.querySelectorAll('.flex-wrap');
const alignContentButtons = document.querySelectorAll('.align-content');
const itemCountElement = document.getElementById('item-count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const flexContainer = document.getElementById('flex-container');

let currentItemCount = 1;
let currentFlexDirection = 'row';
let currentJustifyContent = 'flex-start';
let currentAlignContent = 'stretch';

// Add event listeners for Flex Direction buttons
flexDirectionButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentFlexDirection = button.textContent.toLowerCase();
        updateFlexContainer();
    });
});

// Add event listeners for Justify Content buttons
justifyContentButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentJustifyContent = button.textContent;
        updateFlexContainer();
    });
});

// Add event listeners for Align Items buttons
alignItemsButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentAlignContent = button.textContent;
        flexContainer.style.alignItems = currentAlignContent;
        updateFlexContainer();
    });
});

// Add event listeners for Flex Wrap buttons
flexWrapButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentWrapContent = button.textContent;
        flexContainer.style.flexWrap = currentWrapContent;
        updateFlexContainer();
    });
});

// Add event listeners for Align Content buttons
alignContentButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentAlignContent = button.textContent;
        flexContainer.style.alignContent = currentAlignContent;
        updateFlexContainer();
    });
});

// Update the item count
incrementButton.addEventListener('click', () => {
    if (currentItemCount < 20) { 
        currentItemCount++;
        itemCountElement.textContent = currentItemCount;
        updateFlexContainer();
    }
});

decrementButton.addEventListener('click', () => {
    if (currentItemCount > 1) {
        currentItemCount--;
        itemCountElement.textContent = currentItemCount;
        updateFlexContainer();
    }
});

// Function to update the Flex Container
function updateFlexContainer() {
    flexContainer.style.flexDirection = currentFlexDirection;
    flexContainer.style.justifyContent = currentJustifyContent;
    flexContainer.style.alignContent = currentAlignContent;
    flexContainer.innerHTML = '';

    for (let i = 1; i <= currentItemCount; i++) {
        const flexItem = document.createElement('div');
        flexItem.className = 'flex-item';
        if (i === 1) {
            flexItem.classList.add('color-1');
        } 
        flexItem.textContent = i;
        flexContainer.appendChild(flexItem);
    }
}

// Initial update
updateFlexContainer();
