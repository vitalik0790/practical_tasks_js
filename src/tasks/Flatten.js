const Flatten = () => {
  // function flatten(array) {
  //   const res = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (Array.isArray(array[i])) {
  //       const flat = flatten(array[i]);
  //       for (let j = 0; j < flat.length; j++) {
  //         res.push(flat[j]);
  //       }
  //     } else {
  //       res.push(array[i]);
  //     }
  //   }
  //   return res;
  // }

  // console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]

  return (
    <>
      <h2>Плоский массив</h2>
      <h5>
        Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В
        результате должны получить новый одномерный массив.
      </h5>
      <div>console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]</div>
    </>
  );
};

export default Flatten;
