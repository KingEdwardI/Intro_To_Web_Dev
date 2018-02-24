function toggleShow() {
  const toggle = document.getElementById('toggleme');
  if (toggle.style.display === 'none') {
    toggle.style.display = 'block';
  } else {
    toggle.style.display = 'none';
  }
}

function uppercase() {
  document.getElementById('toggleme').style['text-transform'] = 'uppercase';
}

function lowercase() {
  document.getElementById('toggleme').style['text-transform'] = 'lowercase';
}

function capitalize() {
  document.getElementById('toggleme').style['text-transform'] = 'capitalize';
}
