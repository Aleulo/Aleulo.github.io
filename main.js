

import {
    
    getElementById,
    loopLines,
    addLine,
    moveCursor
} from './utilities.js';

import {
    banner,
    whois,
    whoami,
    social,
    projects,
    help
} from './commands.js';

// Add an event listener to handle keyup events after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    
    var command = getElementById("typer");
    var textarea = getElementById("texter");
  
    // Initialize variables for controlling terminal behavior
    var git = 0;
    var commands = [];
  
    // Set up initial conditions after page loads
    setTimeout(function () {
        loopLines(banner, "", 80);
        textarea.focus();

    }, 100);


    // Add an event listener to handle keyup events
    textarea.addEventListener("keyup", function(event) {
        handleTyping(event);
        moveCursor(event);
    });

   
    // Initialize the textarea and command display
    textarea.value = "";
    command.innerHTML = textarea.value;

      // Function to handle typing in the textarea
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

    function newTab(url) {
        window.open(url, "_blank");
    }
    


    // Function to process user commands
     function commander(cmd) {
        switch (cmd.toLowerCase()) {
            case "help":
                loopLines(help, "color2 margin", 80);
                break;
            case "whois":
                loopLines(whois, "color2 margin", 80);
                break;
            case "whoami":
                loopLines(whoami, "color2 margin", 80);
                break;
            case "social":
                loopLines(social, "color2 margin", 80);
                break;
            case "projects":
                loopLines(projects, "color2 margin", 80);
                break;
            case "banner":
                loopLines(banner, "color2 margin", 80);
                break;
            case "email":
                addLine('Opening mailto:<a href="mailto:alejandr.iff@gmail.com">alejandr.iff@gmail.com</a>...', "color2", 80);
                newTab(email);
                break;
            case "sudo":
                addLine("Oh no, you're not admin...", "color2", 80);
                setTimeout(function() {
                    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
                }, 1000);
                break;
            case "clear":
                setTimeout(function () {
                    var beforeElement = document.getElementById("before");
                    var parent = beforeElement.parentNode;
                    
                    // Remove all <p> elements before the one with the ID "before"
                    while (parent.firstChild !== beforeElement) {
                        parent.removeChild(parent.firstChild);
                    }
                }, 1);
                break;
            default:
                // Handle unrecognized commands here
                addLine(`Command not found: ${cmd}`, "error", 80);
                break;
        }
    }
});

