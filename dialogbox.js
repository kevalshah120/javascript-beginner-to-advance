// In JavaScript, dialog boxes are used to interact with users by displaying messages, collecting input, or prompting for confirmation. These dialog boxes are part of the window object and are primarily provided by the browser's built-in APIs. There are three main types of dialog boxes in JavaScript: Alert, Confirm, and Prompt.


// prompt
/*
    The prompt() method displays a dialog box with a message, a text input field, and "OK" and "Cancel" buttons. It is used to collect user input.

    Characteristics:
    Purpose: To collect a text input from the user.
    User Interaction: The user can enter text in the input field and click "OK" to submit or "Cancel" to dismiss.
    Return Value:
    Returns the entered text (as a string) if the user clicks "OK."
    Returns null if the user clicks "Cancel."
    Returns an empty string ("") if the user clicks "OK" without entering any text.
    Blocking: Modal, preventing further interaction until the user responds.

    Default Value: An optional second parameter can set a default value for the input field.
    prompt(message, defaultValue);
    message: The text displayed to the user (e.g., "Please enter your name:").
    defaultValue (optional): A string that pre-fills the input field in the prompt dialog. If not provided, the input field is empty by default.

    the default value will be displayed to the user but if the user removes or erases that default value then the default value will not be stored in the variable
*/

// alert
/*
    The alert() method displays a simple dialog box with a message and an "OK" button. It is used to inform the user about something important or to display a warning/error message.
    User Interaction: The user can only acknowledge the message by clicking the "OK" button or pressing the Enter key.
    
    Return Value: Does not return any value (returns undefined).
    
    Blocking: It is modal, meaning it blocks further script execution and user interaction with the page until the dialog is dismissed.
*/
// confirm
/*
    The confirm() method displays a dialog box with a message and two buttons: "OK" and "Cancel." It is used to get user confirmation before performing an action.

    Characteristics:
    Purpose: To ask the user for confirmation (yes/no decision).
    User Interaction: The user can click "OK" (to confirm) or "Cancel" (to decline).
    Return Value: Returns true if the user clicks "OK" and false if the user clicks "Cancel."
    Blocking: Modal, halting script execution and page interaction until the user responds.
*/
alert("Hello my name is keval shah")
console.log("lala")
function fun()
{
    let alert_choice = confirm("Are you sure you want to delete?")
    if(alert_choice)
    {
        console.log("deleted successfully")
    }
    else
    {
        console.log("Ok baby, i am not deleting")
    }
}
let val = +prompt("Ok babe can you tell me whats your age ? ","jannu") // the + in the beginning convert it to number
if(val>0)
{
    document.writeln("OH thats good")
}
else
{
    document.writeln("It's ok if you don't want to disclose and want to keep it secret",val)
}