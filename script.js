onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);

    // Анимация букв основного текста
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.style.opacity = 1;
        letter.style.transform = 'translateY(0)';
      }, 1000 + index * 50);
    });

    // Анимация маленькой надписи
    setTimeout(() => {
      const loveNote = document.querySelector('.love-note');
      if (loveNote) {
        loveNote.style.opacity = 1;
      }
    }, 3000);
  }, 1000);
};