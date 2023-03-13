const carte_section = document.getElementById('carte')
 console.log(carte_section);
const data = [
    {
        imgSrc: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title: 'UN SUPER TITRE',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore distinctio reprehenderit officiis dolorem magni quaerat, esse ipsa minus eaque unde possimus nemo! Odit iure sequi officiis enim fugit quia.'
    },
    {
        imgSrc: 'https://plus.unsplash.com/premium_photo-1673896380752-0fd3d3980889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title: 'UN SUPER TITRE',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore distinctio reprehenderit officiis dolorem magni quaerat, esse ipsa minus eaque unde possimus nemo! Odit iure sequi officiis enim fugit quia.'
    },
    {
        imgSrc: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title: 'UN SUPER TITRE',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore distinctio reprehenderit officiis dolorem magni quaerat, esse ipsa minus eaque unde possimus nemo! Odit iure sequi officiis enim fugit quia.'
    },
    {
        imgSrc: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title: 'UN SUPER TITRE',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore distinctio reprehenderit officiis dolorem magni quaerat, esse ipsa minus eaque unde possimus nemo! Odit iure sequi officiis enim fugit quia.'
    },
    {
        imgSrc: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title: 'UN SUPER TITRE',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore distinctio reprehenderit officiis dolorem magni quaerat, esse ipsa minus eaque unde possimus nemo! Odit iure sequi officiis enim fugit quia.'
    }
]

for(let i = 0; i < data.length; i++) {
    const element = data[i]

    const section = document.createElement('section')
    section.classList.add('plat')
    section.style.marginTop = `${(i+1) * 110}px`

    if(i % 2 === 0) {
        section.classList.add('bg-gris')
    }

    const image = document.createElement('img')
    image.classList.add('image-plat')
    image.setAttribute('src', element.imgSrc)

    const title = document.createElement('h2')
    title.classList.add('title-plat')
    title.innerText = element.title

    const text = document.createElement('p')
    text.classList.add('content-plat')
    text.innerText = element.text


    section.appendChild(text)
    section.appendChild(title)
    section.appendChild(image)
    carte_section.appendChild(section)
}