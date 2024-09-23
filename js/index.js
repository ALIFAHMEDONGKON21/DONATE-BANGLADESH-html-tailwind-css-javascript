document.getElementById('donate_btn-1')
.addEventListener('click',()=>{
      console.log("ok click here")
      const donatevale1=getvaluefrominput('donate_input_one')
      console.log(donatevale1)

      document.getElementById('donate_frist_amount').innerText=donatevale1;
})