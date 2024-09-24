let isFAQVisible = false;
document.getElementById('blog-btn').addEventListener('click', function()
{
    
    if (!isFAQVisible) {
    document.getElementById('blogs-container').classList.remove('hidden');
    document.getElementById('card-contioner').classList.add('hidden');
    document.getElementById('historanddonatecontainer').classList.add('hidden')
    document.getElementById('history-list').classList.add('hidden')
    
    isFAQVisible=true;
    }
    else
    {
        document.getElementById('blogs-container').classList.add('hidden');
        document.getElementById('card-contioner').classList.remove('hidden');
        document.getElementById('history-list').classList.add('hidden')
        document.getElementById('historanddonatecontainer').classList.remove('hidden')
        isFAQVisible=false   
    }
   
    
    
})
