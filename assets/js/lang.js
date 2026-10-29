(function () {
	var root = document.documentElement;
	var meta = {
		en: {
			title: 'Aleksei Trofimov - Solutions Architect, Team Lead, Go Engineer',
			description: 'Solutions Architect, Team Lead and Go Engineer with 13 years in IT. Architecture governance, internal engineering platform, monolith decomposition, M&A integration.'
		},
		ru: {
			title: 'Алексей Трофимов - Solutions Architect, Team Lead, Go-разработчик',
			description: 'Solutions Architect, Team Lead и Go-разработчик, 13 лет в IT. Архитектурное управление, инженерная платформа, распил монолита, интеграция при M&A.'
		}
	};

	function setLang(lang) {
		root.setAttribute('lang', lang);
		root.setAttribute('data-lang', lang);
		document.title = meta[lang].title;
		document.querySelector('meta[name="description"]').setAttribute('content', meta[lang].description);
	}

	// EN by default. RU only if the visitor switched to it earlier.
	var saved = null;
	try { saved = localStorage.getItem('lang'); } catch (e) {}
	if (saved === 'ru') setLang('ru');

	var links = document.querySelectorAll('.lang-switch a');
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function (e) {
			// keep an open article open: the template closes it on outside clicks
			e.stopPropagation();
			var lang = this.getAttribute('data-set-lang');
			setLang(lang);
			try { localStorage.setItem('lang', lang); } catch (e) {}
		});
	}

	var year = document.getElementById('year');
	if (year) year.textContent = new Date().getFullYear();
})();
