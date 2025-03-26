const fs = require('fs');
const readlineSync = require('readline-sync');

const TASKS_FILE = 'tasks.json';

// Function to load tasks from the JSON file
function loadTasks() {
    if (fs.existsSync(TASKS_FILE)) {
        const data = fs.readFileSync(TASKS_FILE);
        return JSON.parse(data);
    }
    return [];
}

// Function to save tasks to the JSON file
function saveTasks(tasks) {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 4));
}

// Function to add a task
function addTask(tasks) {
    const taskName = readlineSync.question('Enter task name: ');
    tasks.push({ task: taskName, completed: false });
    console.log(`Task "${taskName}" added.`);
    saveTasks(tasks);
}

// Function to view all tasks
function viewTasks(tasks) {
    if (tasks.length === 0) {
        console.log('No tasks available.');
    } else {
        console.log('Your tasks:');
        tasks.forEach((task, index) => {
            const status = task.completed ? 'Completed' : 'Pending';
            console.log(`${index + 1}. ${task.task} - ${status}`);
        });
    }
}

// Function to mark a task as completed
function markTaskCompleted(tasks) {
    const taskIndex = readlineSync.questionInt('Enter task number to mark as completed: ') - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].completed = true;
        console.log(`Task "${tasks[taskIndex].task}" marked as completed.`);
        saveTasks(tasks);
    } else {
        console.log('Invalid task number.');
    }
}

// Function to delete a task
function deleteTask(tasks) {
    const taskIndex = readlineSync.questionInt('Enter task number to delete: ') - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        console.log(`Task "${tasks[taskIndex].task}" deleted.`);
        tasks.splice(taskIndex, 1);
        saveTasks(tasks);
    } else {
        console.log('Invalid task number.');
    }
}

// Function to display the menu
function displayMenu() {
    console.log('\nTo-Do List CLI');
    console.log('1. Add Task');
    console.log('2. View Tasks');
    console.log('3. Mark Task Completed');
    console.log('4. Delete Task');
    console.log('5. Exit');
}

function main() {
    let tasks = loadTasks();
    
    while (true) {
        displayMenu();
        const choice = readlineSync.questionInt('Choose an option: ');
        
        switch (choice) {
            case 1:
                addTask(tasks);
                break;
            case 2:
                viewTasks(tasks);
                break;
            case 3:
                markTaskCompleted(tasks);
                break;
            case 4:
                deleteTask(tasks);
                break;
            case 5:
                console.log('Goodbye!');
                return;
            default:
                console.log('Invalid option. Please try again.');
        }
    }
}

// Run the app
main();
