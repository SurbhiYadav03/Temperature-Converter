const calculateTemp = () => {
    const numTemp = document.getElementById('temp').value;
    const optionSelected = document.getElementById('temp_diff').value;
    
    let result;

    const celToFah = (num) =>{
        return ((num* 9/5) + 32);
    }
    const FahToCel = (num) =>{
        return ((num-32)*5/9);
    }

    if(optionSelected == 'cel')
    {
        result = celToFah(numTemp);
        document.getElementById('res').innerHTML = `${result} Fahrenheit`;
    }else
    {
        result = FahToCel(numTemp);
        document.getElementById('res').innerHTML = `${result} Celsius`;
    }
}