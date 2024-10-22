pageViewRange.addEventListener('input', handlePageViewChange);

const fiyat = 0.00016;

function handlePageViewChange() {
	const views = Number(pageViewRange.value) * 1000;
	let earnings = Math.round(views * fiyat);
	if(discount.checked) {
		earnings = (earnings * 12) * 0.75;
	}
	pay.innerText = earnings + ' USD'
}

discount.addEventListener("click", handlePageViewChange)

handlePageViewChange();
