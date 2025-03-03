# To-Do List Application - Assignment Ac tivity Unit 5

## Overview

This project is a simple To-Do List application designed to demonstrate event handling and event delegation in JavaScript. Users can add, edit, remove, and mark tasks as complete or incomplete, with all interactions dynamically updating the DOM.

## Learning Objectives

By completing this assignment, you will demonstrate your ability to:

- Implement event handling to respond to user interactions.
- Use event delegation for efficient event management.
- Dynamically update the DOM to reflect changes in application state.

## Features

- **Add New Tasks:** Users can enter a task in an input field and add it to the to-do list by clicking the "Add Task" button.
- **Edit Existing Tasks:** Each task has an "Edit" button that enables the user to modify the task's content through a dialog box.
- **Remove Tasks:** Each task includes a "Remove" button, allowing users to delete tasks from the list.
- **Mark Tasks as Complete/Incomplete:** A checkbox is provided for each task, allowing users to toggle its completion status. Completed tasks are visually differentiated using a strike-through effect.

## Implementation Details

### HTML Structure

The application consists of:

- An input field for entering new tasks.
- An "Add Task" button.
- A list (`<ul>`) where tasks are dynamically appended.
- Each task includes:
  - A text display for the task.
  - An "Edit" button.
  - A "Remove" button.
  - A checkbox to mark completion status.

### CSS Styling

Basic styling is applied to enhance user experience, ensuring:

- A clean and consistent layout.
- A visually appealing task list.
- Clear differentiation of completed and incomplete tasks.

### JavaScript Functionality

JavaScript is used to implement event-driven interactions, including:

- **Event Handling:** Listens for user actions like adding, editing, removing, and toggling tasks.
- **Event Delegation:** Ensures efficient handling of "Edit", "Remove", and "Complete/Incomplete" actions by leveraging delegation on the task list container.
- **Dialog Box for Editing:** A modal dialog appears when editing a task, providing an input field for updates and "OK"/"Cancel" buttons.

## Assessment Criteria

Your implementation will be evaluated based on:

- Proper structuring of HTML elements.
- Effective use of CSS for styling.
- Correct use of JavaScript for event handling and event delegation.
- Functional completion of all four key features (adding, editing, removing, marking complete/incomplete).
  .
