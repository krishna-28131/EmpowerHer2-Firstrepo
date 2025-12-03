# Enhanced Todo List (L1 Assignment)

This project is an enhanced Todo List application built using **HTML, CSS, and JavaScript**.  
It stores tasks in **localStorage**, supports **task completion**, **deletion**, and has a **real-time search feature**.

---

## 🚀 Features

### ✅ Add Tasks  
Users can type a task and add it to the list.

### ✅ Mark Tasks as Completed  
Click "Done" to mark as completed. Completed tasks become:
- Grey
- Strikethrough

Click "Undo" to revert back.

### ✅ Delete Tasks  
Removes the selected task from the list and from localStorage.

### ✅ Real-Time Search  
Typing in the search bar filters tasks instantly.

### ✅ Persistent Storage  
All tasks are stored in `localStorage` as an array of objects:

```json
{
  "id": 123456,
  "text": "Buy groceries",
  "completed": false
}
