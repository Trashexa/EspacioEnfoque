const inputs = document.querySelectorAll('.control input');


	function hacerCambios() {
	  const cambios = this.dataset.sizing || '';
	  const value = this.value + cambios;
	  
	  if (this.name === 'desenfoque') {
	    document.querySelector('img').style.filter = `blur(${value})`;
		  } else {
		    document.documentElement.style.setProperty(`--${this.name}`, value);
		  }
		}

	inputs.forEach(input => input.addEventListener('change', hacerCambios));
	inputs.forEach(input => input.addEventListener('mousemove', hacerCambios));

