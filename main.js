const original = document.querySelectorAll('#original')
const change = document.querySelectorAll('#change')

document.querySelectorAll('#englishButton').addEventListener('click', originalText)
document.querySelectorAll('#spanishButton').addEventListener('click', changeText)

function originalText(){
	change.classList.add('hidden')
    original.classList.toggle('hidden')
}

function changeText(){
    original.classList.add('hidden')
    change.classList.toggle('hidden')
}

