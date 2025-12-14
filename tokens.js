function refreshTokenUI(){
  const list = $('tokenList');
  const sel = $('selectToken');

  list.innerHTML = '';
  sel.innerHTML = '<option value="">--選択--</option>';

  Object.entries(DB.tokens||{}).forEach(([id,t])=>{
    const div = document.createElement('div');
    div.className='item';
    div.innerHTML = `
      <div>
        <strong>${escapeHtml(t.label)}</strong>
        <div class="small">••••${t.token.slice(-6)}</div>
      </div>
      <div>
        <button data-id="${id}" class="useBtn small">選択</button>
        <button data-id="${id}" class="delBtn small danger">削除</button>
      </div>
    `;
    list.appendChild(div);

    const opt = document.createElement('option');
    opt.value=id; opt.textContent=t.label;
    sel.appendChild(opt);
  });

  document.querySelectorAll('.useBtn').forEach(b=>{
    b.onclick = ()=> sel.value = b.dataset.id;
  });
  document.querySelectorAll('.delBtn').forEach(b=>{
    b.onclick = ()=>{
      if(confirm('削除しますか？')){
        delete DB.tokens[b.dataset.id];
        saveDB(); refreshTokenUI();
      }
    };
  });
}

$('saveToken').onclick = ()=>{
  const lbl=$('tokenLabel').value.trim();
  const tok=$('tokenValue').value.trim();
  if(!lbl||!tok) return alert('入力不足');

  DB.tokens['t_'+Date.now()]={label:lbl,token:tok};
  saveDB(); refreshTokenUI();
};
