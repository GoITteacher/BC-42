let elem = {
  value: '123',
};

function func(a, b) {
  const arrow = (a, b) => {
    console.log(this); //elem
  };

  arrow();
}

func.call(elem);
