document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('resource-search');
    const resourceItems = document.querySelectorAll('.resource-item');
    const noResultsMessage = document.getElementById('no-results-message');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        let found = false;
        
        resourceItems.forEach(function(item) {
            const text = (
                item.textContent +
                (item.getAttribute('data-categories') || '') +
                (item.getAttribute('data-animals') || '') +
                (item.getAttribute('data-tags') || '')
            ).toLowerCase();
            
            if (text.includes(searchTerm)) {
                item.style.display = '';
                found = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Hide/show type sections based on visible items
        document.querySelectorAll('.resource-type-section').forEach(function(section) {
            const visibleItems = section.querySelectorAll('.resource-item:not([style*="display: none"])');
            if (visibleItems.length === 0) {
                section.classList.add('hidden');
            } else {
                section.classList.remove('hidden');
            }
        });
        
        if (noResultsMessage) {
            noResultsMessage.style.display = found ? 'none' : 'block';
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