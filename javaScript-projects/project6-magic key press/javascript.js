const content=document.querySelector(".content")
 const check=window.addEventListener('keypress',function(e){
    // content.innerHTML=`${e.key}`
    // content.innerHTML +=`  ${e.keyCode}`
    // content.innerHTML +=`   ${e.code}`
    content.innerHTML=`<table class="adjust"  cellspacing=2 cellpadding=1 bgcolor=white>
    <tr align=center bgcolor=black color=white>
      <th><font color=white>key</font></th>
      <th><font color=white>code</font></th>
      <th><font color=white>keypressed</font></th>
    </tr>
    <tr bgcolor=black><font color=white>
      <td align=center > <font color=white>${e.key}</font></td>
      <td align=center><font color=white>${e.keyCode} </font></td>
      <td align=center><font color=white>${e.code}</font></td>
    </tr>
  
  </table>`
   
})
console.log(check)