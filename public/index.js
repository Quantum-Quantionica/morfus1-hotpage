window.addEventListener('load', () => {
    const iframe = document.querySelector('.videos iframe')
    const videos = document.querySelectorAll('.videos ul > li')

    videos.forEach(item => {
        const link = item.getAttribute('src')
        item.addEventListener('click', () => {
            console.log(link)
            iframe.src = link
        })
    })
})