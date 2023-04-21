document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function (){
        document.querySelector('img').style.filter = `${this.textContent}(${prompt('Value')})`
        console.log(document.querySelector('img').style.filter)
    })
})
