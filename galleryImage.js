function slidesPlugin(activeSlide = 0) {
  let slides = document.querySelectorAll('.slide')
  slides[activeSlide].classList.add('active')

  for (let slide of slides ) {
    slide.addEventListener('click', () => {
      slides.forEach(slide => slide.classList.remove('active'))
      slide.classList.add('active')
    })
  }
}

slidesPlugin()