var btncorolla = document.getElementById('btn_corolla');
var btnecosport = document.getElementById('btn_ecosport');
var btnetios = document.getElementById('btn_etios');
var btnpassat = document.getElementById('btn_passat');
var btnspin = document.getElementById('btn_spin');

var corolla = document.getElementById('corolla');
var ecosport = document.getElementById('ecosport');
var etios = document.getElementById('etios');
var passat = document.getElementById('passat');
var spin = document.getElementById('spin');

btncorolla.addEventListener('click', ()=>{
    corolla.classList.add('auto');
    corolla.style.display='';
    ecosport.style.display='none';
    etios.style.display='none';
    passat.style.display='none';
    spin.style.display='none';
    btncorolla.classList.add('seleccionado');
    btnecosport.classList.remove('seleccionado');
    btnetios.classList.remove('seleccionado');
    btnpassat.classList.remove('seleccionado');
    btnspin.classList.remove('seleccionado');
});
btnecosport.addEventListener('click', ()=>{
    corolla.style.display='none';
    ecosport.classList.add('auto');
    ecosport.style.display='';
    etios.style.display='none';
    passat.style.display='none';
    spin.style.display='none';
    btncorolla.classList.remove('seleccionado');
    btnecosport.classList.add('seleccionado');
    btnetios.classList.remove('seleccionado');
    btnpassat.classList.remove('seleccionado');
    btnspin.classList.remove('seleccionado');
});
btnetios.addEventListener('click', ()=>{
    corolla.style.display='none';
    ecosport.style.display='none';
    etios.classList.add('auto');
    etios.style.display='';
    passat.style.display='none';
    spin.style.display='none';
    btncorolla.classList.remove('seleccionado');
    btnecosport.classList.remove('seleccionado');
    btnetios.classList.add('seleccionado');
    btnpassat.classList.remove('seleccionado');
    btnspin.classList.remove('seleccionado');
});
btnpassat.addEventListener('click', ()=>{
    corolla.style.display='none';
    ecosport.style.display='none';
    etios.style.display='none';
    passat.classList.add('auto');
    passat.style.display='';
    spin.style.display='none';
    btncorolla.classList.remove('seleccionado');
    btnecosport.classList.remove('seleccionado');
    btnetios.classList.remove('seleccionado');
    btnpassat.classList.add('seleccionado');
    btnspin.classList.remove('seleccionado');
});
btnspin.addEventListener('click', ()=>{
    corolla.style.display='none';
    ecosport.style.display='none';
    etios.style.display='none';
    passat.style.display='none';
    spin.classList.add('auto');
    spin.style.display='';
    btncorolla.classList.remove('seleccionado');
    btnecosport.classList.remove('seleccionado');
    btnetios.classList.remove('seleccionado');
    btnpassat.classList.remove('seleccionado');
    btnspin.classList.add('seleccionado');
});