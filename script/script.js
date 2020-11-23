'use strict'
function add_zero(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    // если передаваемое значение value < 10, то вначале значения выводить "0"и ретернить строку
    return value;
}
function view_date()
{
    let current_datetime = new Date();
    let day = add_zero(current_datetime.getDate());
    let month = add_zero(current_datetime.getMonth()+1);
    let year = current_datetime.getFullYear();

    return day+"."+month+"."+year;
}
/* вывод даты на страницу в футере в блок с id  'view-date' */
document.getElementById('view-date').innerHTML = view_date();