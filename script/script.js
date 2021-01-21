'use strict'

let doughEl = document.getElementsByName("dough");
let sizeEl = document.getElementsByName("size");
let componentsEl = document.getElementsByName("components");
let additionallyEl = document.getElementsByName("additionally");
let json;
let num_components = 0;
let sendObj = {};
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
    components:{
        cost: 0,
        calories: 0,
    },
    additionally: {
        cost: 0,
        calories: 0,
    },
};
let finalPizzaObj = {
    dough: {
        cost: 0,
    },
    size: {
        cost: 0,
    },
    components: {
        cost: 0,
        components:{

        }
    },
    additionally: {
        cost: 0,
        additionally:{

        }
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
        cost: 0.01,
        calories: 0.01,
    },
    size_40: {
        cost: 0.3,
        calories: 0.3,
    },
    size_45: {
        cost: 0.5,
        calories: 0.5,
    },
};

//   Объект с видами компонентов
let componentsObj = {
    cheese: {
        cost: 3,
        calories: 150,
    },
    bacon: {
        cost: 6,
        calories: 230,
    },
    tomato: {
        cost: 2,
        calories: 70,
    },
    paprika: {
        cost: 2,
        calories: 70,
    },
    corn: {
        cost: 1,
        calories: 90,
    },
    pineapple: {
        cost: 4,
        calories: 110,
    },
    olives: {
        cost: 3,
        calories: 60,
    },
    shrimp: {
        cost: 4,
        calories: 130,
    },
    mushrooms: {
        cost: 8,
        calories: 110,
    },
    greens: {
        cost: 1,
        calories: 20,
    },
};

//   Объект с дополнительными ингредиентами
let additionallyObj = {
    cheese_sauce: {
        cost: 5,
        calories: 80,
    },
    tomato_sauce: {
        cost: 5,
        calories: 80,
    },
    spicy_sauce: {
        cost: 5,
        calories: 80,
    },
    mustard_sauce: {
        cost: 5,
        calories: 80,
    },
    wasabi: {
        cost: 5,
        calories: 80,
    }
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
                        if(sizeEl){
                            for(let x = 0; x < sizeEl.length; x++){
                                if(sizeEl[x].checked && doughEl[i].checked){
                                    for(let key in sizeObj){
                                        if(sizeEl[x].id === key){
                                            pizzaObj.size.cost = sizeObj[key]["cost"] * pizzaObj.dough.cost;
                                            pizzaObj.size.calories = sizeObj[key]["calories"] * pizzaObj.dough.calories;
                                        }
                                    }
                                    if(componentsEl){
                                        for(let i = 0; i < componentsEl.length; i++){
                                            if(componentsEl[i].checked){
                                                num_components++;
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
                                }
                            }
                        }
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
    console.log(num_components);

    if(finalCostPizza !== 0){
        document.getElementById('information_cost').innerHTML = 'Cost: ' + costPizza.toFixed(2) + ' + ' + taxCost.toFixed(2) + ' = ' + ' $' + '<span>' + finalCostPizza.toFixed(2) + '</span>';
        document.getElementById('information_calories').innerHTML = 'Calories: ' + '<span>' + caloriesPizza + '</span>' + '  Kkal';
    }
    if(pizzaObj.dough['cost'] === 0){
        document.getElementById('text_popup').innerHTML = 'No <span>dough</span> type selected. Select the type of pizza <span>dough</span> !!!';
        viewPopup();
        return;
    }
    if(finalPizzaObj.size['cost'] === 0){
        document.getElementById('text_popup').innerHTML = 'No dough <span>size</span> selected. Select the type of pizza <span>size</span> !!!';
        viewPopup();
        return;
    }
    if(pizzaObj.components['cost'] === 0){
        document.getElementById('text_popup').innerHTML = 'No <span>components</span> selected. Select the <span>components</span> of pizza !!!';
        viewPopup();
    }else{
        if(num_components < 3){
            document.getElementById('text_popup').innerHTML = 'You added too few <span>components</span> to the pizza. <br>The minimum number of <span>components</span> is 3 !!!';
            viewPopup();
            return;
        }
    }
    sendObj = finalPizzaObj;
    sendObj["total_cost"] = finalCostPizza.toFixed(2);
    console.log("Объект для отправки");
    console.log(sendObj);
    fetch('https://json-app-server.azurewebsites.net/pizza', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendObj)
    }).then(res => res.json()).then(console.log);

    num_components = 0;
}

//   Функция отображения предупреждения
function viewPopup(){
    document.getElementById('popup').style.opacity = '1';
    document.getElementById('popup').style.visibility = 'visible';
    document.getElementById('popup_content').style.transform = 'perspective(600px) translate(0, 0) rotateX(0)';
}

//   Функция закрытия предупреждения
function closePopup(){
    document.getElementById('popup').style.opacity = '0';
    document.getElementById('popup').style.visibility = 'hidden';
    document.getElementById('popup_content').style.transform = 'perspective(600px) translate(0, -200%) rotateX(45deg)';
}

//   Функция расчитывающая стоимость пиццы.
function cost(num){
    //   Запись информации о тесте в объект finalPizzaObj
    finalPizzaObj.dough["cost"] = pizzaObj.dough["cost"];
    for(let x = 0; x < doughEl.length; x++) {
        if (doughEl[x].checked) {
            for (let key in doughObj) {
                if (doughEl[x].id === key) {
                    finalPizzaObj.dough["name"] = key;
                }
            }
        }
    }
    //   Запись информации о размере в finalPizzaObj
    finalPizzaObj.size["cost"] = pizzaObj.size["cost"] * pizzaObj.dough["cost"];
    for(let x = 0; x < sizeEl.length; x++) {
        if (sizeEl[x].checked) {
            for (let key in sizeObj) {
                if (sizeEl[x].id === key) {
                    finalPizzaObj.size["name"] = key;
                }
            }
        }
    }



    //   Запись информации о добавленных ингредиентах в объект finalPizzaObj
    for(let i = 0; i < componentsEl.length; i++) {
        if (componentsEl[i].checked) {
            for (let key in componentsObj) {
                if (componentsEl[i].id === key) {
                    finalPizzaObj.components.components[key] = key;
                }
            }
        }else {
            for (let key in componentsObj) {
                if (componentsEl[i].id === key) {
                    delete finalPizzaObj.components.components[key];
                }
            }
        }
    }
    finalPizzaObj.components['cost'] = pizzaObj.components['cost'];

    //   Запись информации о дополнительных ингредиентах в объект finalPizzaObj
    for(let i = 0; i < additionallyEl.length; i++) {
        if (additionallyEl[i].checked) {
            for (let key in additionallyObj) {
                if (additionallyEl[i].id === key) {
                    finalPizzaObj.additionally.additionally[key] = key;
                }
            }
        }else {
            for (let key in additionallyObj) {
                if (additionallyEl[i].id === key) {
                    delete finalPizzaObj.additionally.additionally[key];
                }
            }
        }
    }
    finalPizzaObj.additionally['cost'] = pizzaObj.additionally['cost'];
    console.log(finalPizzaObj);

    //   Расчет конечной стоимости пиццы с учетом наценки
    if(num < 100){
        finalCostPizza = num + num * 0.2;
        taxCost = num * 0.2;
    }
    if(num >= 20 && num <= 35){
        finalCostPizza = num + num * 0.15;
        taxCost = num * 0.15;
    }
    if(num > 35){
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
            for(let n = 0; n < doughEl.length; n++){
                if(doughEl[n].checked){
                    componentsEl[i].checked = true;
                    document.querySelectorAll('.img_components_block img')[i].style.opacity = "1";
                    break;
                }
                document.querySelectorAll('.img_components_block img')[i].style.opacity = "0";
                componentsEl[i].checked = false;
            }
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

//   Функция сброса
function reset(){
    for(let i =0; i < doughEl.length; i++){
        doughEl[i].checked = false;
    }
    for(let i =0; i < sizeEl.length; i++){
        sizeEl[i].checked = false;
    }
    for(let i =0; i < componentsEl.length; i++){
        componentsEl[i].checked = false;
    }
    for(let i =0; i < additionallyEl.length; i++){
        additionallyEl[i].checked = false;
    }

    viewImgDough();
    viewImgSize(32);
    viewImgComponents();
    viewImgAdditionally();
    document.getElementById('information_cost').innerHTML = 'Cost: ';
    document.getElementById('information_calories').innerHTML = 'Calories: ';
    pizzaObj = {
        dough: {
            cost: 0,
            calories: 0,
        },
        size: {
            cost: 0,
            calories: 0,
        },
        components:{
            cost: 0,
            calories: 0,
        },
        additionally: {
            cost: 0,
            calories: 0,
        },
    };
    finalPizzaObj = {
        dough: {
            cost: 0,
            name: '',
        },
        size: {
            cost: 0,
            name: '',
        },
        components: {
            cost: 0,
            components:{

            }
        },
        additionally: {
            cost: 0,
            additionally:{

            }
        },
    };
    num_components = 0;
}


