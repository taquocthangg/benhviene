import axios from "axios";
import $ from 'jquery';
const host = "https://provinces.open-api.vn/api/";
var callAPI = (api) => {
    return axios.get(api)
        .then((response) => {
            renderData(response.data, "province");
        });
}
callAPI('https://provinces.open-api.vn/api/?depth=1');
var callApiDistrict = (api) => {
    return axios.get(api)
        .then((response) => {
            renderData(response.data.districts, "district");
        });
}

var renderData = (array, select) => {
    let row = ' <option disable value="">chọn</option>';
    array.forEach(element => {
        row += `<option value="${element.code}">${element.name}</option>`
    });
    document.querySelector("#" + select).innerHTML = row
}

$("#province").triggerHandler(() => {
    callApiDistrict(host + "p/" + $("#province").val() + "?depth=2");
    printResult();
});

var printResult = () => {
    if ($("#province").val() !== "") {
        let result = $("#province option:selected").text();
        $("#result").text(result)
    }
}