const Dupes = () => {
  // function removeDupes(string) {
  //   const split = string.split("");
  //   const array = [...new Set(split)];
  //   return array.join("");
  // }

  // function removeDupes(string) {
  //   return Array.from(new Set(string)).join("");
  // }

  // console.log(removeDupes("abcd")); // -> 'abcd'
  // console.log(removeDupes("aabbccdd")); // -> 'abcd'
  // console.log(removeDupes("abcddbca")); // -> 'abcd'
  // console.log(removeDupes("abababcdcdcd")); // -> 'abcd'

  return (
    <>
      <h2>Удаление всех повторяющихся значений в строке</h2>
      <h5>
        Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут
        удалены.
      </h5>
      <div>
        console.log(removeDupes('abcd')) // -> 'abcd'
        <br />
        console.log(removeDupes('aabbccdd')) // -> 'abcd'
        <br />
        console.log(removeDupes('abcddbca')) // -> 'abcd'
        <br />
        console.log(removeDupes('abababcdcdcd')) // -> 'abcd'
      </div>
    </>
  );
};

export default Dupes;
