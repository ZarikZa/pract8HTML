//propmpt();
//parseint


while (true){
  let vibor = prompt("Выберите действие:\n1. Сложить\n2. Вычесть\n 3. Умножить\n 4. Разделить\n 5. Возвести в квадрат\n 6. Квадратный корень\n 7. Выйти");
  switch (vibor){
    case "1":
      let first = prompt("Введите первое значение: ")
      let second = prompt("Введите первое значение: ")
      alert(parseInt(first) + parseInt(second))
      break
    case "2":
      let first5 = prompt("Введите первое значение: ")
      let second5 = prompt("Введите первое значение: ")
      alert(parseInt(first5) - parseInt(second5))
      break
    case "3":
      let first4 = prompt("Введите первое значение: ")
      let second4 = prompt("Введите первое значение: ")
      alert(parseInt(first4) * parseInt(second4))
      break
    case "4":
      let first3 = prompt("Введите первое значение: ")
      let second3 = prompt("Введите первое значение: ")
      alert(parseFloat(first3) / parseFloat(second3))
      break
    case "5":
      let first2 = prompt("Введите первое значение: ")
      alert(parseInt(first2) * parseInt(first2))
      break
    case "6":
      let first1 = prompt("Введите первое значение: ")
      alert(Math.sqrt(parseFloat(first1)))
      break
    case "7":
      process.exit(0)
  }
}
