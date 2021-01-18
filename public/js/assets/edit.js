function ifSelected(list) {
    // let feeIncludesItem = document.querySelectorAll(".feeIncludesItem");
    // let string = item.replaceAll(",", ", ");
    // list = list.replaceAll(" ", "");
    let itemArray = list.split(",");
    for (let item in itemArray) {
        console.log(itemArray[item]);
        // let hello = document.querySelector('#feeIncludes').options.;
        // hello.setAttribute('selected', 'selected');
    }
    // if (feeIncludesItems.includes(item)) {
    //     let itemId = item.replace(' ', '');
    //     document.querySelector(`#${itemId}`).setAttribute('selected', 'selected');
    // }
}