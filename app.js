//Создайте функцию которая бы умела делать:
//minus(10)(6); // 4
//minus(5)(6); // -1
//minus(10)(); // 10
//minus()(6); // -6
//minus()(); // 0


/*function minus(value) {
  return function(val) {
    return value - val;
  }
}

let res = minus(10, 0);
console.log(res);*/

//Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
//function multiplyMaker ...
//const multiply = multiplyMaker(2);
//multiply(2); // 4 (2 * 2)
//multiply(1); // 4 (4 * 1)
//multiply(3); // 12 (4 * 3)
//multiply(10); // 120 (12 * 10)


/*function makeCounter(first) {
    let counter = first;
    return function (second) {
    	counter *= second 
        return counter;
    }
}

let counterInstance1 = makeCounter(2)
console.log(counterInstance1(2))
console.log(counterInstance1(1))
console.log(counterInstance1(3))*/
//. Реализовать модуль, который работает со строкой и имеет методы:
//a. установить строку
//i. если передано пустое значение, то установить пустую строку
//ii. если передано число, число привести к строке
//b. получить строку
//c. получить длину строки
//d. получить строку-перевертыш
//Пример:
//модуль.установитьСтроку(‘abcde’);
//модуль.получитьСтроку(); // ‘abcde’
//модуль.получитьДлину(); // 5

/*const stringProcessor = function (value) {
    let stringValue = value ? value.toString() : '';
    
    function setValue(value) {
      stringValue = value ? value.toString() : '';
    }
  
    function getString() {
      return stringValue;
    }
  
    function getStringLength() {
      return stringValue.length;
    }

*/
//Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

//модуль.установитьЗначение(10); // значение = 10
//модуль.прибавить(5); // значение += 5
//модуль.умножить(2); // значение *= 2
//модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

//Также можно вызывать методы цепочкой:
//модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100


class Math {
	constructor(firstNumber, secondNumber){
		this.firstNumber = firstNumber;
		this.secondNumber = secondNumber;
	}
	sum (){
		let sum = this.firstNumber + this.secondNumber
		console.log(sum)
	}
	count(){
		let count = this.firstNumber * this.secondNumber
		console.log(count)
	}
	minus(){
		let minus = this.firstNumber - this.secondNumber
		console.log(minus)
	}
	doubt(){
		let doubt = this.firstNumber / this.secondNumber
		console.log(doubt)
	}
	stepen(){
 		let stepen = this.firstNumber**3;
 		let SecondStepen = this.secondNumber**3
 		console.log(stepen, SecondStepen)
	}
}
let p = new Math(5, 3)

p.sum()
p.minus()
p.stepen()