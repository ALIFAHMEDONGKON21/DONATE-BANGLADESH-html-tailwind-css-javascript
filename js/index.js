document.getElementById('donate_btn-1')
.addEventListener('click',()=>{
      console.log("ok click here")
      const userinput=getinputfiled('donate_input_one');
     
      const donateown=getinputfromuser('donate_frist_amount');
      const mainbanlace=getinputfromuser('main_balance');
      const dontownnew=donateown+userinput;
      if(userinput>mainbanlace)
      {
           alert("No blance")
            return 
      }
      const mainblanceadd=mainbanlace-dontownnew;

      document.getElementById('donate_frist_amount').innerText=dontownnew;
      document.getElementById('main_balance').innerText=mainblanceadd;


      const historitem=document.createElement('div')
      historitem.className=' bg-white p-3 rounded-md w-3/5 h-32 border-2 border-indigo-500'

      historitem.innerHTML=`
      <p>${userinput} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
      <p>${new Date().toLocaleDateString()}</p>
    `
      const hestorcontainer=document.getElementById('history-list')
      hestorcontainer.insertBefore(historitem,hestorcontainer.firstChild)
})

document.getElementById('donate_btn-11')
.addEventListener('click',()=>{
      console.log("ok click here")
      const userinput=getinputfiled('donate_input_one1');
     
      const donateown=getinputfromuser('donate_frist_amount1');
      const mainbanlace=getinputfromuser('main_balance');
      const dontownnew=donateown+userinput;
      if(userinput>mainbanlace)
      {
           alert("No blance")
            return 
      }
      const mainblanceadd=mainbanlace-dontownnew;

      document.getElementById('donate_frist_amount1').innerText=dontownnew;
      document.getElementById('main_balance').innerText=mainblanceadd;


      const historitem=document.createElement('div')
      historitem.className=' bg-white p-3 rounded-md w-3/5 h-32 border-2 border-indigo-500'

      historitem.innerHTML=`
      <p>${userinput} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
      <p>${new Date().toLocaleDateString()}</p>
    `
      const hestorcontainer=document.getElementById('history-list')
      hestorcontainer.insertBefore(historitem,hestorcontainer.firstChild)
})

document.getElementById('donate_btn-12')
.addEventListener('click',()=>{
      console.log("ok click here")
      const userinput=getinputfiled('donate_input_one2');
     
      const donateown=getinputfromuser('donate_frist_amount2');
      const mainbanlace=getinputfromuser('main_balance');
      const dontownnew=donateown+userinput;
      if(userinput>mainbanlace)
      {
           alert("No blance")
            return 
      }
      const mainblanceadd=mainbanlace-dontownnew;

      document.getElementById('donate_frist_amount2').innerText=dontownnew;
      document.getElementById('main_balance').innerText=mainblanceadd;


      const historitem=document.createElement('div')
      historitem.className=' bg-white p-3 rounded-md w-3/5 h-32 border-2 border-indigo-500'

      historitem.innerHTML=`
      <p>${userinput} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
      <p>${new Date().toLocaleDateString()}</p>
    `
      const hestorcontainer=document.getElementById('history-list')
      hestorcontainer.insertBefore(historitem,hestorcontainer.firstChild)
})

