document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('smsForm');
	const input = document.getElementById('smsCodeInput');
	const errorWrapper = document.getElementById('errorWrapper');

	form.addEventListener('submit', evt => {
		evt.preventDefault(); // отменяем реальную отправку формы

		const code = input.value.trim();

		if (code === '15') {
			// если код == 15, показываем ошибку
			errorWrapper.classList.remove('hidden');
		} else {
			// иначе прячем ошибку
			errorWrapper.classList.add('hidden');
			// и переходим на другую страницу
			window.location.href = 'Menu.html';
		}
	});
});