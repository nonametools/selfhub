const workspace = $('workspace');
let blockCounter=0;

function workspaceToSequence(){
  return [...workspace.children]
    .map(c=>c._data)
    .filter(Boolean);
}

$('saveSeq').onclick=()=>{
  const name=$('seqName').value.trim();
  if(!name) return alert('name');
  DB.sequences['seq_'+Date.now()]={name,blocks:workspaceToSequence()};
  saveDB();
};
