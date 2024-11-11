let tuit_select = "";
let tuit_url = "https://maximoospital.xyz/cornutron3000/";
let modo = 0;

function toggleMode() {
	// Switch modo between 0, 1, and 2 with each function call
	modo = (modo + 1) % 3;
	console.log(modo);
	// Bifurcacion de modos
	const modos = [
	  {
		nombre: "cornutron",
		usuario: "@cornutron3000",
		prefix: "img/cornuda/",
		default_texto: "tene tu propio tweet de cornuda ya mismo! apreta en \"Cornudear\", tuitea, genera likes.",
		tema: 'Dark',
		boton: "Cornudear"
	  },
	  {
		nombre: "futboltron",
		usuario: "@futboltron2011",
		prefix: "img/futbol/",
		default_texto: "tene tu propio tweet de futbolero ya mismo! apreta en \"Cuckear\", tuitea, genera likes.",
		tema: 'Dim',
		boton: "Cuckear"
	  },
	  {
		nombre: "hombretrolatron",
		usuario: "@hombretrolatron1989",
		prefix: "img/htrola/",
		default_texto: "tene tu propio tweet de cornuda ya mismo! apreta en \"Llorar Concha\", tuitea, genera likes.",
		tema: 'Light',
		boton: "Llorar Concha"
	  }
	];
	document.getElementById("nombre").innerText = modos[modo].nombre;
	document.getElementById("usuario").innerText = modos[modo].usuario;
	document.getElementById("generar").innerText = modos[modo].boton;
	document.getElementById("tuit_texto").innerText = modos[modo].default_texto;
	document.getElementById("imagen").classList.add('hidden');
	document.getElementById("profile-picture").setAttribute('src', '/cornutron3000/' + modos[modo].prefix + "pfp/pfp_1.jpg");
  }

function generate() {
	// Reset
	tuit_select = "";
	tuit_url = "https://maximoospital.xyz/cornutron3000/";
	document.getElementById("imagen").classList.add('hidden');
	// Crea likes y visitas random
	const likes = Math.floor(Math.random() * 90 + 10)
	document.getElementById("likes").innerText = likes + "K";
	const views = Math.floor(Math.random() * 90 + 10)
	document.getElementById("views").innerText = views + "K";
	function addZero(i) {
		if (i < 10) { i = "0" + i }
		return i;
	}
	// Fecha del tweet (hoy)
	const d = new Date();
	let h = addZero(d.getHours());
	let m = addZero(d.getMinutes());
	let time = h + ":" + m;
	const formattedDate = new Intl.DateTimeFormat('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	}).format(d);
	document.getElementById("hora").innerText = time;
	document.getElementById("fecha").innerText = formattedDate;
	document.getElementById("tuit_texto").innerText = tuit_select;

	// Elije una frase
	const indice = Math.floor(Math.random() * cornudaTuits.length);
	tuit_select = cornudaTuits[indice];

	// Elije una foto
	if (Math.random() < 0.5) {
		const indice_foto = Math.floor(Math.random() * (28 - 1) + 1);
		var urlnew = tuit_url + `tw/${indice_foto}.html`;

		document.getElementById("imagen").setAttribute('src', "/cornutron3000/img/imagen_" + indice_foto + ".jpeg");
		document.getElementById("imagen").classList.remove('hidden');
		document.getElementById("imagen").onload = () => {
			setTimeout(() => {
				document.getElementById("imagen").classList.replace('opacity-0', 'opacity-100');
			}, 10);
		}
		console.log(urlnew)
		tuit_url = urlnew;
	}
	// Foto de perfil aleatoria
	const randomNum = Math.floor(Math.random() * 10) + 1;

	const randomImagePath = `/cornutron3000/img/pfp/pfp_${randomNum}.jpg`;
	document.getElementById("profile-picture").src = randomImagePath;
}

function tweet() {
	if (tuit_select != "") {
		const frase_formateada = encodeURIComponent(tuit_select.trim());
		const url = "https://twitter.com/intent/tweet?text=" + frase_formateada + "&url=" + tuit_url;
		window.open(url, '_blank').focus();
	} else {
		const url = "https://twitter.com/intent/tweet?text=miren%20este%20sitio%20jijo&url=" + tuit_url;
		window.open(url, '_blank').focus();
	}
}