const $ = id => document.getElementById(id);

function escapeHtml(s){
  return String(s||'')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');
}

function logLine(el, s){
  el.textContent =
    (el.textContent === '—' ? '' : el.textContent) +
    `[${new Date().toLocaleTimeString()}] ${s}\n`;
  el.scrollTop = el.scrollHeight;
}

function logExec(s){ logLine($('execLog'), s); }
function logScratch(s){ logLine($('scratchLog'), s); }

function appendLog(s){
  logExec(s);
  if($('viewScratch')?.style.display !== 'none'){
    logScratch(s);
  }
}
