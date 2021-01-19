'use strict'

let doughEl = document.getElementsByName("dough");
let sizeEl = document.getElementsByName("size");
let componentsEl = document.getElementsByName("components");
let additionallyEl = document.getElementsByName("additionally");

// //  Выбранное значение теста
// let dough;
//
// //  Выбранное значение размера
// let size;
//
// //  Выбранные компоненты
// let components;
//
// //  Выбранные дополнительные ингридиены
// let additionally;

//****************************  ОБЪЕКТЫ  *******************************//
//   Объект готового продукта со всеми игредиентами.
let pizzaObj = {
    dough: {
        cost: 0,
        calories: 0,
    },
    size: {
        cost: 0,
        calories: 0,
    },
    components: {
        cost: 0,
        calories: 0,
    },
    additionally: {
        cost: 0,
        calories: 0,
    },
};

//   Объект с видами теста
let doughObj = {
    thin: {
        cost: 1,
        calories: 200,
    },
    thick: {
        cost: 4,
        calories: 500,
    },
    calzone: {
        cost: 3,
        calories: 300,
    },
    italian: {
        cost: 3,
        calories: 200,
    },
    standard: {
        cost: 2,
        calories: 300,
    },
};

//   Объект с размерами пиццы
let sizeObj = {
    size_32: {
        cost: 5,
        calories: 2,
    },
    size_40: {
        cost: 9,
        calories: 2,
    },
    size_45: {
        cost: 12,
        calories: 2,
    },
};

//   Объект с видами компонентов
let componentsObj = {
    cheese: {
        cost: 5,
        calories: 2,
    },
    bacon: {
        cost: 5,
        calories: 2,
    },
    tomato: {
        cost: 5,
        calories: 2,
    },
    paprika: {
        cost: 5,
        calories: 2,
    },
    corn: {
        cost: 5,
        calories: 2,
    },
    pineapple: {
        cost: 5,
        calories: 2,
    },
    olives: {
        cost: 5,
        calories: 2,
    },
    shrimp: {
        cost: 5,
        calories: 2,
    },
    mushrooms: {
        cost: 5,
        calories: 2,
    }
};

//   Объект с дополнительными ингредиентами
let additionallyObj = {
    cheese_sauce: {
        cost: 5,
        calories: 2,
    },
    tomato_sauce: {
        cost: 5,
        calories: 2,
    },
    spicy_sauce: {
        cost: 5,
        calories: 2,
    },
    mustard_sauce: {
        cost: 5,
        calories: 2,
    },
    greens: {
        cost: 5,
        calories: 2,
    },
};
//****************************  ОБЪЕКТЫ  *******************************//


//   Стоимость пиццы до наценки
let costPizza;

//   Калорийность пиццы
let caloriesPizza;

//   Сумма наценки
let taxCost;

//   Стоимость пиццы ПОСЛЕ наценки
let finalCostPizza;

//   Функция заполнения объекта свойствами готовой пиццы
function cooking(){
    costPizza = 0;
    caloriesPizza = 0;
    pizzaObj.components.cost = pizzaObj.components.calories = 0;
    pizzaObj.additionally.cost = pizzaObj.additionally.calories = 0;

    if(doughEl){
        for(let i = 0; i < doughEl.length; i++){
            if(doughEl[i].checked){
                for(let key in doughObj){
                    if(doughEl[i].id === key){
                        pizzaObj.dough.cost = doughObj[key]["cost"];
                        pizzaObj.dough.calories = doughObj[key]["calories"];
                        console.log(costPizza);
                        console.log(caloriesPizza);
                    }
                }
            }
        }
    }

    if(sizeEl){
        for(let i = 0; i < sizeEl.length; i++){
            if(sizeEl[i].checked){
                for(let key in sizeObj){
                    if(sizeEl[i].id === key){
                        pizzaObj.size.cost = sizeObj[key]["cost"];
                        pizzaObj.size.calories = sizeObj[key]["calories"];
                    }
                }
            }
        }
    }

    if(componentsEl){
        for(let i = 0; i < componentsEl.length; i++){
            if(componentsEl[i].checked){
                for(let key in componentsObj){
                    if(componentsEl[i].id === key){
                        pizzaObj.components.cost += componentsObj[key]["cost"];
                        pizzaObj.components.calories += componentsObj[key]["calories"];
                    }
                }
            }
        }
    }

    if(additionallyEl){
        for(let i = 0; i < additionallyEl.length; i++){
            if(additionallyEl[i].checked){
                for(let key in additionallyObj){
                    if(additionallyEl[i].id === key){
                        pizzaObj.additionally.cost += additionallyObj[key]["cost"];
                        pizzaObj.additionally.calories += additionallyObj[key]["calories"];
                    }
                }
            }
        }
    }
    costPizza = pizzaObj.dough.cost + pizzaObj.size.cost + pizzaObj.components.cost + pizzaObj.additionally.cost;
    caloriesPizza = pizzaObj.dough.calories + pizzaObj.size.calories + pizzaObj.components.calories + pizzaObj.additionally.calories;
    console.log('Стоимость: ' + pizzaObj.dough.cost + ' / ' + pizzaObj.size.cost + ' / ' + pizzaObj.components.cost + ' / ' + pizzaObj.additionally.cost);
    console.log('Калории:  ' + pizzaObj.dough.calories + ' / ' + pizzaObj.size.calories + ' / ' + pizzaObj.components.calories + ' / ' + pizzaObj.additionally.calories);
    console.log(costPizza);
    console.log(caloriesPizza);
    console.log(pizzaObj);
    cost(costPizza);
    document.getElementById('information_cost').innerHTML = 'Cost: ' + costPizza + ' + ' + taxCost.toFixed(1) + ' = ' + '<span>' + finalCostPizza.toFixed(2) + '</span>' + '  $';
    document.getElementById('information_calories').innerHTML = 'Calories: ' + '<span>' + caloriesPizza + '</span>' + '  kkal';
}

//   Функция расчитывающая стоимость пиццы.
function cost(num){
    //   Расчет конечной стоимости пиццы с учетом наценки
    if(num < 100){
        finalCostPizza = num + num * 0.2;
        taxCost = num * 0.2;
    }
    if(num >= 100 && num <= 150){
        finalCostPizza = num + num * 0.15;
        taxCost = num * 0.15;
    }
    if(num > 150){
        finalCostPizza = num + num * 0.1;
        taxCost = num * 0.1;
    }
    console.log('Final cost pizza = ' + finalCostPizza);
    return finalCostPizza;
}

//   Функция отображения теста
function viewImgDough(){
    for(let i = 0; i < doughEl.length; i++){
        if(doughEl[i].checked){
            document.querySelectorAll('.img_dough_block img')[i].style.opacity = "1";
        }else{
            document.querySelectorAll('.img_dough_block img')[i].style.opacity = "0";
        }
    }
}

//   Функция отображения размера пиццы
function viewImgSize(num){
    if(num === 32){
        for(let i = 0; i < doughEl.length; i++){
            document.querySelectorAll('.img_dough_block img')[i].style.width = "260px";
            document.querySelectorAll('.img_dough_block img')[i].style.height = "260px";
            }
        for(let n = 0; n < componentsEl.length; n++){
            document.querySelectorAll('.img_components_block img')[n].style.width = "227px";
            document.querySelectorAll('.img_components_block img')[n].style.height = "227px";
        }
    }
    if(num === 40){
        for(let i = 0; i < doughEl.length; i++){
            document.querySelectorAll('.img_dough_block img')[i].style.width = "320px";
            document.querySelectorAll('.img_dough_block img')[i].style.height = "320px";
        }
        for(let n = 0; n < componentsEl.length; n++){
            document.querySelectorAll('.img_components_block img')[n].style.width = "280px";
            document.querySelectorAll('.img_components_block img')[n].style.height = "280px";
        }
    }
    if(num === 45){
        for(let i = 0; i < doughEl.length; i++){
            document.querySelectorAll('.img_dough_block img')[i].style.width = "370px";
            document.querySelectorAll('.img_dough_block img')[i].style.height = "370px";
        }
        for(let n = 0; n < componentsEl.length; n++){
            document.querySelectorAll('.img_components_block img')[n].style.width = "320px";
            document.querySelectorAll('.img_components_block img')[n].style.height = "320px";
        }
    }
}

//   Функция отображения компонентов пиццы
function viewImgComponents(){
    for(let i = 0; i < componentsEl.length; i++){
        if(componentsEl[i].checked){
            document.querySelectorAll('.img_components_block img')[i].style.opacity = "1";
        }else{
            document.querySelectorAll('.img_components_block img')[i].style.opacity = "0";
        }
    }
}

//   Функция отображения дополнительных ингридиентов
function viewImgAdditionally(){
    for(let i = 0; i < additionallyEl.length; i++){
        if(additionallyEl[i].checked){
            document.querySelectorAll('.img_additionally_block img')[i].style.opacity = "1";
        }else{
            document.querySelectorAll('.img_additionally_block img')[i].style.opacity = "0";
        }
    }
}


