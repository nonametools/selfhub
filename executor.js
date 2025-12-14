async function fetchWithRetry(url,opts){
  while(true){
    const r=await fetch(url,opts);
    if(r.status!==429) return r;
    await new Promise(r=>setTimeout(r,1000));
  }
}

$('btnExec').onclick = async ()=>{
  const sel=$('selectToken').value;
  if(!sel) return alert('token');
  const token=DB.tokens[sel].token;

  logExec('開始');
  const res=await fetchWithRetry(
    'https://discord.com/api/v9/users/@me',
    {headers:{Authorization:token}}
  );
  logExec('status '+res.status);
};
