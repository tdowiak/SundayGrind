const sundayGrind = () => {

  function readMore() {
    const post = this.parentElement;
    const paragraphs = post.childNodes;
    paragraphs.forEach(child => {
      if (child.className === 'hidden'){
        child.classList.remove('hidden');
      }
    });

    this.classList.add('hidden');
  };

  const readMoreClickHandler = () => {
    const readMoreButtons = document.querySelectorAll('.readMoreButton');
    readMoreButtons.forEach(button => button.addEventListener('click', readMore));
  };

  readMoreClickHandler();
};

sundayGrind();
