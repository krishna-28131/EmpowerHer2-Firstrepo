// Select elements from DOM
const notesArea = document.getElementById("notesArea");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");


// Load notes automatically on page load

window.addEventListener("load", function () {
    const savedNotes = localStorage.getItem("userNotes");

    // If notes exist in localStorage, display them
    if (savedNotes) {
        notesArea.value = savedNotes;
    }
});



// Save Notes button

saveBtn.addEventListener("click", function () {
    const notes = notesArea.value.trim();

    // Validation: prevent saving empty notes
    if (notes === "") {
        alert("Cannot save empty notes!");
        return;
    }

    // Save to localStorage
    localStorage.setItem("userNotes", notes);

    alert("Notes saved successfully!");
});


// Load Notes button

loadBtn.addEventListener("click", function () {
    const savedNotes = localStorage.getItem("userNotes");

    if (savedNotes) {
        notesArea.value = savedNotes;
        alert("Notes loaded!");
    } else {
        alert("No notes found in storage!");
    }
});

// Clear Notes button

clearBtn.addEventListener("click", function () {
    localStorage.removeItem("userNotes");
    notesArea.value = "";
    alert("Notes cleared!");
});
