var btnSuccess = document.querySelector('.controls .success')
var btnWarning = document.querySelector('.controls .warning')
var btnError = document.querySelector('.controls .error')

btnSuccess.addEventListener('click', function() {
    showToast('success')
})

btnWarning.addEventListener('click',function() {
    showToast('warning')
})

btnError.addEventListener('click',function() {
    showToast('error')
})



function showToast(status,timeout) {
    let template = `<i class="fa-solid fa-circle-check"></i>
    <span class="message">This is a Success message!</span>
    <span class="countdown"></span>`
    switch(status) {
        case 'success':
            template = `
            <i class="fa-solid fa-circle-check"></i>
            <span class="message">This is a Success message!</span>
            <span class="countdown"></span>`
            break;
        case 'warning':
            template = `
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a Warning message!</span>
            <span class="countdown"></span>
            `
            break;
        case 'error':
            template = `
            <i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is an Error message!</span>
            <span class="countdown"></span>
            `
            break;
    }


    timeout = timeout || 5000
    
    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = `${template}`
    var toasts = document.getElementById('toasts')
    toasts.appendChild(toast)
    setTimeout(function() {
        toast.style.animation = 'slide_hide 4s ease'
    }, timeout)
    setTimeout(function() {
        toast.remove()
    },timeout + 4000)

}
