function ifSelected(list) {
    let listArray = list.split(",");
    let feeIncludes = document.getElementById('feeIncludes');
    for (let element in feeIncludes) {
        for (let item of listArray) {
            if (feeIncludes[element].getAttribute('value').toUpperCase() == item.toUpperCase()) {
                feeIncludes[element].setAttribute('selected', 'selected');
            }
        }
    }
}