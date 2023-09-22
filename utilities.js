



//Function to move the cursor left or right based on key presses
export function moveCursor(event) {
    const textarea = getElementById('texter');
    const cursor = getElementById('cursor');
    const text = textarea.value;
    const selectionStart = textarea.selectionStart;

    // Check the key pressed to determine cursor movement
    if (event.key === 'ArrowLeft' && selectionStart > 0) {
        textarea.selectionStart = selectionStart - 1;
        textarea.selectionEnd = selectionStart - 1;
    } else if (event.key === 'ArrowRight' && selectionStart < text.length) {
        textarea.selectionStart = selectionStart + 1;
        textarea.selectionEnd = selectionStart + 1;
    }
    
    // Move the cursor position based on selection
    const cursorPosition = textarea.selectionStart * 10; // Assuming 10px per character width
    cursor.style.left = 240 + cursorPosition + 'px';
}



// Function to get an HTML element by its ID
export function getElementById(elid) {
    return document.getElementById(elid);
}

// Function to loop through and display lines of text
export function loopLines(name, style, time) {
    name.forEach(function (item, index) {
        addLine(item, style, index * time);
    });
}

// Function to add a new line of text to the terminal
export function addLine(text, style, time) {
    let modifiedString = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            modifiedString += "&nbsp;&nbsp;";
            i++;
        } else {
            modifiedString += text.charAt(i);
        }
    }
    setTimeout(function () {
        var next = document.createElement("p");
        next.innerHTML = modifiedString;
        next.className = style;
        before.parentNode.insertBefore(next, before);
        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}


   // Function to handle typing in the textarea  I tried to export it to another function but it is inside the event i guess, so code is ugly but it works.
function handleTyping(event) {
    const textarea = event.target;
    const typer = getElementById('typer');
    let text = textarea.value;

    // Check if the Enter key (key code 13) is pressed
    if (event.keyCode === 13) {
        // Create a new line with the command input
        const commandLine = `<span class="prompt"><b>visitor@aleulo.com:~$</b> ${text}</span>`;
            
        // Handle the user input when Enter is pressed
        addLine(commandLine, 'color2');
        commander(text.trim()); // Pass the trimmed text to the commander function
        textarea.value = ''; // Clear the textarea
        } 
        const cursorPosition = 240 + (text.length * 10.5); // Adjust the multiplier for spacing
        cursor.style.left = `${cursorPosition}px`;
        typer.innerHTML = text;
    //updateCursorPosition()
    }

