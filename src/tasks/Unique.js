const Unique = () => {
  // function isUnique(string) {
  //   for (let i = 0; i < string.length; i++) {
  //     const char = string[i];
  //     if (string.indexOf(char) !== i) {
  //       return false;
  //     }
  //   }
  //   return true
  // }

  // function isUnique(string) {
  //   return new Set(string).size === string.length;
  // }

  // function isUnique(string) {
  //   return [...new Set(string)].length === string.length;
  // }

  // console.log(isUnique("abcdef")); // -> true
  // console.log(isUnique("1234567")); // -> true
  // console.log(isUnique("abcABC")); // -> true
  // console.log(isUnique("abcadef")); // -> false

  return (
    <>
      <h1>Строки и массивы</h1>
      <h2>Уникальность всех символов в строке</h2>
      <h5>
        Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и
        `‘A’` разные символы.
      </h5>
      <div>
        console.log(isUnique('abcdef')) // -> true
        <br />
        console.log(isUnique('1234567')) // -> true
        <br />
        console.log(isUnique('abcABC')) // -> true
        <br />
        console.log(isUnique('abcadef')) // -> false
      </div>
    </>
  );
};

export default Unique;
