var successBtn = document.querySelector('.controls .success')
var warningBtn = document.querySelector('.controls .warning')
var errorBtn = document.querySelector('.controls .error')

successBtn.addEventListener('click',function() {
    createToast('success', 10000)
})
warningBtn.addEventListener('click',function() {
    createToast('warning')
})
errorBtn.addEventListener('click',function() {
    createToast('error')
})

createToast('success')


function createToast(status,timeout) {
    let templateInner = `
                    <i class="fa-solid fa-circle-check"></i>
                    <span class="message">This is a Success message!</span>
                    <span class="countdown"></span>`
    switch (status) {
        case 'success':
            templateInner = `
                    <i class="fa-solid fa-circle-check"></i>
                    <span class="message">This is a Success message!</span>
                    <span class="countdown"></span>`
            break;
        case 'warning':
            templateInner = `
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span class="message">This is a Warning message!</span>
                    <span class="countdown"></span>`
            break;
        case 'error':
            templateInner = `
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <span class="message">This is a Warning message!</span>
                    <span class="countdown"></span>`
            break;
    }

    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = `${templateInner}`
    var totalList = document.getElementById('toasts')
    totalList.appendChild(toast)
    timeout = timeout || 4000
    setTimeout(function(){
    toast.style.animation = `slide_hide 2s ease`;
    },timeout)
    setTimeout(function(){
        toast.remove()
    },timeout + 2000)
}





        