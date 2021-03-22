    const btnForget = document.querySelector('.btn-forget');
    const modalHelp = document.querySelector('.modal-help');
    const modalClose = document.querySelector('.modal-close');
    const focusForm = modalHelp.querySelector('.form-text');
    const form = modalHelp.querySelector('.help-form');
    const name = modalHelp.querySelector('[name=name]');
    const email = modalHelp.querySelector('[name=e-mail]');





    btnForget.addEventListener('click', function () {
      modalHelp.classList.add('modal-show');
    });


    modalClose.addEventListener('click', function () {
      modalHelp.classList.remove('modal-show');
    });


    btnForget.addEventListener('click', function () {
      modalHelp.classList.add('modal-show');
      focusForm.focus();
    });


    form.addEventListener('submit', function (evt) {
      if (!name.value || !email.value) {
      evt.preventDefault();
      console.log('Нужно ввести имя и имеил');
      }
    });


    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        if (modalHelp.classList.contains('modal-show')) {
          evt.preventDefault();
          modalHelp.classList.remove('modal-show');
        }
      }
    });
