async function patch_item(){
    const conn = await fetch(`https://coderspage.com/iceland/update-item/316be582-c363-486b-8299-f0aab77bc787`, {
      // mode: 'cors',
      method : "POST",
      headers: {
        'Access-Control-Allow-Origin':'*'
      }    
    })
    console.log(patch_item)
  }
  
  patch_item()