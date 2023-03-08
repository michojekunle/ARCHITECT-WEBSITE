document.querySelector('.hamburger-menu').addEventListener('click', ()=> {
    document.querySelector('.container').classList.toggle('change');
})

document.querySelectorAll('.field').forEach(el => {
    console.log(el)
    el.addEventListener('input', () => {
        if(el.target?.value !== '' || el.target?.innerText !== ''){
            el.parentElement.children[1].classList.add('changed');
        } else {
            el.parentElement.children[1].classList.remove('changed')
        }
    })
})

// document.querySelector('scrol-btn').addEventListener('click', () => {
//     document.querySelector('html').style.scrollBehavior = 'smooth';
//     setTimeout(()=> {
//         document.querySelector('html').style.scrollBehavior = 'unset';
//     }, 1000)
// })