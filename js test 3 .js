// Source:
const checkBtn = document.getElementById("check-btn")
const input = document.getElementById("user-input")
const clearBtn = document.getElementById("clear-btn")
const result = document.getElementById("results-div")


function inputTest() {
    const regex = /^1?\s?\(?\d{3}\)?\s?-?\d{3}\s?-?\d{4}$/;
    const sanitizedInput = input.value.replace(/[-()\s]/g, ''); // Remove hyphens, parentheses, and spaces
    if (sanitizedInput === "") {
        alert("Please provide a phone number")
        return;
    } else if (!regex.test(input.value) || input.value.includes(')') && !input.value.includes('(') || !input.value.includes(')') && input.value.includes('(')) { // Check if the original input matches the regex and ensure parentheses are correctly paired
        return result.innerText = `Invalid US number: ${input.value}`;
    } else {
        return result.innerText = `Valid US number: ${input.value}`;
    }
}

//event listeners
clearBtn.addEventListener("click", () => {
    input.value = ""
    result.innerText = ""
})

checkBtn.addEventListener("click", inputTest)