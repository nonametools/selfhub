function refreshTplUI(){
  const list=$('groupList');
  const sel=$('tplSelect');
  list.innerHTML='';
  sel.innerHTML='<option value="">--選択--</option>';

  Object.entries(DB.templates||{}).forEach(([id,t])=>{
    const div=document.createElement('div');
    div.className='item';
    div.innerHTML=`
      <div>
        <strong>${escapeHtml(t.label)}</strong>
        <div class="small">${t.users.join(',')}</div>
      </div>
      <div>
        <button data-id="${id}" class="useTpl small">利用</button>
        <button data-id="${id}" class="delTpl small danger">削除</button>
      </div>`;
    list.appendChild(div);

    const opt=document.createElement('option');
    opt.value=id; opt.textContent=t.label;
    sel.appendChild(opt);
  });

  document.querySelectorAll('.useTpl').forEach(b=>{
    b.onclick=()=>applyTemplateToExec(b.dataset.id);
  });
}
