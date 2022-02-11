const sendForm = ({ formId }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется";

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      if (input.name === "tel") {
        if (/[^0-9\+]/g.test(input.value)) {
          alert("Ошибка в записи номера телефона");
          success = false;
        }
      }

      if (input.name === "fio") {
        if (/[^а-я\ ]/gi.test(input.value)) {
          alert("Ошибка в записи имени");
          success = false;
        }
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll(".form-group > input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    statusBlock.style.color = "black";
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;

          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    }
  };

  try {
    if (!form) {
      throw new Error("Пожалуйста, верните форму на место");
    }
    form.addEventListener("input", (e) => {
      if (e.target.matches('input[name="fio"]')) {
        e.target.value = e.target.value.replace(/[^а-я\ ]/gi, "");
      }
      if (e.target.matches('input[name="tel"]')) {
        e.target.value = e.target.value.replace(/[^0-9\+]/g, "");
      }
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;
