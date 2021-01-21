function isSelected(list) {
    let listArray = list.split(",");
    let feeIncludes = document.getElementById('feeIncludes');
    for (let element in feeIncludes) {
        for (let item of listArray) {
            if (feeIncludes[element].value == item) {
                feeIncludes[element].setAttribute('selected', 'selected');
            }
        }
    }
}