const input = document.querySelector('input');

const validateEmail = (email) => {
  if (email === '') {
    input.classList.remove('greenBorder');
    input.classList.remove('redBorder');
    return;
  }

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    input.classList.add('greenBorder');
    input.classList.remove('redBorder');
  } else {
    input.classList.add('redBorder');
    input.classList.remove('greenBorder');
  }
};

const onChange = (event) => {
  validateEmail(input.value);
};
