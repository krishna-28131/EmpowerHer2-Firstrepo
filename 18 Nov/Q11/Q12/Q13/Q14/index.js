
const PERFORMANCE_RANKING = {
    "Excellent": 3,
    "Good": 2,
    "Needs Improvement": 1
};

function calculatePerformance(rating) {
    if (rating > 4.5) {
        return "Excellent";
    } else if (rating >= 3) {
        return "Good";
    } else {
        return "Needs Improvement";
    }
}

function processEmployees(employees) {
    const minTasks = 5;
    const highTaskEmployees = employees.filter(employee => employee.tasksCompleted > minTasks);
    const mappedPerformance = highTaskEmployees.map(employee => {
        return {
            name: employee.name,
            performance: calculatePerformance(employee.rating)
        };
    });
    const sortedEmployees = mappedPerformance.sort((a, b) => {
        const rankA = PERFORMANCE_RANKING[a.performance];
        const rankB = PERFORMANCE_RANKING[b.performance];

        return rankB - rankA;
    });

    return sortedEmployees;
}
const inputEmployees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 }, 
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 } 
];

const finalEvaluation = processEmployees(inputEmployees);

console.log("Final Employee Evaluation:");
console.log(finalEvaluation);

