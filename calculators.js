// write numbers function
function view(val){
    document.getElementById('screen').value += val
}

function equal(){
    let input = document.getElementById('screen').value
    let res = eval(input)
    document.getElementById("screen").value = res
    // console.log(res)
}

function clear(){
    document.getElementById('screen').value = ''

    // console.log("clear clicked")
}