
const inputRef = document.getElementById('input');
const copyButtonRef = document.getElementById('copy');
const generateButtonRef = document.getElementById('generate');




const copyContent = ()=>{

    const value = inputRef.value;
    console.log(value)
    navigator.clipboard.writeText(value)
    alert('text copied successfully')
}



const generatePassword = (e)=>{
    e.preventDefault()
    console.log("Hiii")

    const passwordChar = 'abcde1fghi2jkl3mno4pqr5stu6vwx7yzA8BCD9EFG0HIJKLMNOPQRSTUVQXYZ'
    let n = passwordChar.length;
    var lenght = 8;
    let generatedPassword = ''
    for(var i=0;i<lenght;i++)
    {
        generatedPassword+=passwordChar.charAt(Math.floor(Math.random()*n));
        

    }
    console.log(generatedPassword)
    inputRef.value = generatedPassword



}

generateButtonRef.addEventListener('click',generatePassword)
copyButtonRef.addEventListener('click',copyContent)
