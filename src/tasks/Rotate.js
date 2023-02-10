const Rotate = () => {
  function isStringRotated(source, test) {
    // todo
  }

  console.log(isStringRotated("javascript", "scriptjava")); // -> true
  console.log(isStringRotated("javascript", "iptjavascr")); // -> true
  console.log(isStringRotated("javascript", "java")); // -> false

  return (
    <>
      <h2>Повернута ли строка?</h2>
      <h5>
        Напишите функцию, которая принимает 2 строки. Верните true если строки являются перевернутым вариантом друг
        друга (см. пример). Иначе верните false.
      </h5>
      <div>
        console.log(isStringRotated('javascript', 'scriptjava')) // -> true
        <br />
        console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
        <br />
        console.log(isStringRotated('javascript', 'java')) // -> false
      </div>
    </>
  );
};

export default Rotate;
