const Frequency = () => {
  // function highestFrequency(array) {
  //   const map = {};
  //   let maxFreq = 0;
  //   let maxFreqStr = array[0];

  //   for (let i = 0; i < array.length; i++) {
  //     const current = array[i];

  //     if (map[current]) {
  //       map[current]++;
  //     } else {
  //       map[current] = 1;
  //     }

  //     if (map[current] > maxFreq) {
  //       maxFreq = map[current];
  //       maxFreqStr = current;
  //     }
  //   }

  //   return maxFreqStr;
  // }

  // console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
  // console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
  // console.log(highestFrequency(["abc", "def"])); // -> abc
  // console.log(highestFrequency(["abc", "abc", "def", "def", "def", "ghi", "ghi", "ghi", "ghi"])); // -> ghi

  return (
    <>
      <h2>Какая строка встречается чаще всего</h2>
      <h5>
        Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве.
        Если таких строк несколько, то нужно вернуть первую, идя слева на право.
      </h5>
      <div>
        console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
        <br />
        console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
        <br />
        console.log(highestFrequency(['abc', 'def'])) // -> abc
        <br />
        console.log(highestFrequency(["abc", "abc", "def", "def", "def", "ghi", "ghi", "ghi", "ghi"])); // -> ghi
      </div>
    </>
  );
};

export default Frequency;
