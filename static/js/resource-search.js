document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('resource-search');
    const resourceItems = document.querySelectorAll('.resource-item');
    const noResultsMessage = document.getElementById('no-results-message');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        let hasResults = false;
        
        resourceItems.forEach(function(item) {
            const itemText = item.textContent.toLowerCase();
            const itemCategories = item.dataset.categories ? item.dataset.categories.toLowerCase() : '';
            const itemAnimals = item.dataset.animals ? item.dataset.animals.toLowerCase() : '';
            
            if (
                itemText.includes(searchTerm) || 
                itemCategories.includes(searchTerm) || 
                itemAnimals.includes(searchTerm)
            ) {
                item.style.display = '';
                hasResults = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        if (noResultsMessage) {
            noResultsMessage.style.display = hasResults ? 'none' : 'block';
        }
    });
    
    // Clear search when clicking the clear button
    const clearButton = document.getElementById('clear-search');
    if (clearButton) {
        clearButton.addEventListener('click', function() {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
        });
    }
    
    // Filter by category when clicking a category pill
    const categoryPills = document.querySelectorAll('.category-pill');
    categoryPills.forEach(function(pill) {
        pill.addEventListener('click', function() {
            const category = this.dataset.category.toLowerCase();
            searchInput.value = category;
            searchInput.dispatchEvent(new Event('input'));
        });
    });
    
    // Filter by animal when clicking an animal pill
    const animalPills = document.querySelectorAll('.animal-pill');
    animalPills.forEach(function(pill) {
        pill.addEventListener('click', function() {
            const animal = this.dataset.animal.toLowerCase();
            searchInput.value = animal;
            searchInput.dispatchEvent(new Event('input'));
        });
    });
});