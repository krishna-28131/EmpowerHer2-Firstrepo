
function countCategories(categories) {
    return categories.reduce((counts, category) => {
        counts[category] = (counts[category] || 0) + 1;
        return counts;
    }, {}); 
}

function sortCategoriesByCount(countsObject) {
    const entries = Object.entries(countsObject);
    const sortedEntries = entries.sort((a, b) => b[1] - a[1]);
    const sortedCategories = sortedEntries.map(entry => entry[0]);

    return sortedCategories;
}

const inputCategories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys", "accessories"];
const categoryCounts = countCategories(inputCategories);

console.log("1. Category Counts Object (reduce() result):", categoryCounts);
const sortedCategoryNames = sortCategoriesByCount(categoryCounts);

console.log("2. Sorted Categories (Extra Challenge Result):", sortedCategoryNames);
