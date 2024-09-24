document.getElementById('donate_btn-1')
.addEventListener('click',()=>{
      console.log("ok click here")
      const userinput=getinputfiled('donate_input_one');
      const donateown=getinputfromuser('donate_frist_amount');
      const mainbanlace=getinputfromuser('main_balance');
      if (isNaN(userinput) || userinput === "" || typeof userinput !=='number') {
            alert("Please enter a valid number.");
            return null;  
        }
      if (userinput < 0) {
            alert("Please enter a non-negative amount.");
            return null;
      }  
      if(userinput>mainbanlace)
      {
            alert('Insufficient balance. You cannot donate more than your available balance.')
            return
      }
      const mainblanceadd=mainbanlace-userinput;
      const dontownnew=donateown+userinput;

      document.getElementById('donate_frist_amount').innerText=dontownnew;
      document.getElementById('main_balance').innerText=mainblanceadd;


      document.getElementById("modal").classList.remove("hidden");
      
      const historitem=document.createElement('div')
      historitem.className=' bg-white p-3 rounded-md w-3/5 h-40 border-2 bg-white border'

      historitem.innerHTML=`
      <p>${userinput} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
      <p>${new Date().toLocaleDateString()}</p>
    `
      const hestorcontainer=document.getElementById('history-list1')
      hestorcontainer.insertBefore(historitem,hestorcontainer.firstChild)
})
document.getElementById("close-modal-btn").addEventListener("click", function() {
      document.getElementById("modal").classList.add("hidden");
    });


document.getElementById('donate_btn-11')
.addEventListener('click',()=>{
      console.log("ok click here")
      const userinput=getinputfiled('donate_input_one1');
     
      const donateown=getinputfromuser('donate_frist_amount1');
      const mainbanlace=getinputfromuser('main_balance');
      const dontownnew=donateown+userinput;
      if (isNaN(userinput) || userinput === "") {
            alert("Please enter a valid number.");
            return null;  
        }
      if (userinput < 0) {
            alert("Please enter a non-negative amount.");
            return null;
      }  
      if(userinput>mainbanlace)
      {
            alert('Insufficient balance. You cannot donate more than your available balance.')
            return
      }
      const mainblanceadd=mainbanlace-userinput;

      document.getElementById('donate_frist_amount1').innerText=dontownnew;
      document.getElementById('main_balance').innerText=mainblanceadd;

      document.getElementById("modal").classList.remove("hidden");


      const historitem=document.createElement('div')
      historitem.className=' bg-white p-3 rounded-md w-3/5 h-40 border-2 bg-white border'

      historitem.innerHTML=`
      <p>${userinput} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
      <p>${new Date().toLocaleDateString()}</p>
    `
      const hestorcontainer=document.getElementById('history-list1')
      hestorcontainer.insertBefore(historitem,hestorcontainer.firstChild)
})

document.getElementById('donate_btn-12')
.addEventListener('click',()=>{
      console.log("ok click here")
      const userinput=getinputfiled('donate_input_one2');
     
      const donateown=getinputfromuser('donate_frist_amount2');
      const mainbanlace=getinputfromuser('main_balance');
      const dontownnew=donateown+userinput;
      if (isNaN(userinput) || userinput === "") {
            alert("Please enter a valid number.");
            return null;  
        }
      if (userinput < 0) {
            alert("Please enter a non-negative amount.");
            return null;
      }  
      if(userinput>mainbanlace)
      {
            alert('Insufficient balance. You cannot donate more than your available balance.')
            return 
      }
      const mainblanceadd=mainbanlace-userinput;

      document.getElementById('donate_frist_amount2').innerText=dontownnew;
      document.getElementById('main_balance').innerText=mainblanceadd;

      document.getElementById("modal").classList.remove("hidden");


      const historitem=document.createElement('div')
      historitem.className=' bg-white p-3 rounded-md w-3/5 h-40 border-2 bg-white border'

      historitem.innerHTML=`
      <p>${userinput} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
      <p>${new Date().toLocaleDateString()}</p>
    `
      const hestorcontainer=document.getElementById('history-list1')
      hestorcontainer.insertBefore(historitem,hestorcontainer.firstChild)
})

// cahngeing part

document.getElementById('history-tab').addEventListener('click',()=>{
      console.log('ok')
      
      document.getElementById('history-list').classList.remove('hidden');
      document.getElementById('card-contioner').classList.add('hidden');

      document.getElementById('history-tab').classList.add(
            "bg-clifford",
            "text-white",
            "hover:bg-clifford"
      )
      document.getElementById('donation-tab').classList.remove(
            "bg-clifford",
            "text-white",
            "hover:bg-clifford"
            
      )
      
})
document.getElementById('donation-tab').addEventListener('click',()=>{
      console.log('ok')
      
      document.getElementById('history-list').classList.add('hidden');
      document.getElementById('card-contioner').classList.remove('hidden');

      document.getElementById('history-tab').classList.remove(
            "bg-clifford",
            "text-white",
             "hover:bg-clifford"
      )
      document.getElementById('donation-tab').classList.add(
            "bg-clifford",
            "text-white",
             "hover:bg-clifford"
      )
      
})