
const executeOrder = () => {
	let orderId = document.getElementById('order-id-input-text').value
	if (orderId == "") {
		alert("give a valid order id")
		return
	}
	// if ((orderId == "") && orderId.length != 3) {
	// 	document.getElementById("order-id-input-text-valid").style.display = "block";
	// 	document.getElementById("order-id-input-text-invalid").style.display = "none";
	// 	return
	// } else {
	// 	document.getElementById("order-id-input-text-invalid").style.display = "block";
	// 	document.getElementById("order-id-input-text-valid").style.display = "none";
	// 	//   error = true;
	// }
	document.getElementById('order-id-input-text').value = ''
	document.getElementById('order-id-display').innerHTML = `Status for Order ID: <b>${orderId}</b>`
	document.getElementById('order-id-display').style.display = 'block'

	let orderStatusBlocks = document.getElementsByClassName('order-status-block')

	orderStatusBlocks[0].classList.replace('btn-light', 'btn-success')

	const chefReceivedOrder = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatusBlocks[1].classList.replace('btn-light', 'btn-success')
			resolve()
		}, 2000)
	})

	const pizzaSauceAdded = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatusBlocks[2].classList.replace('btn-light', 'btn-success')
			resolve()
		}, 10000)
	})

	const firstLayerOfCheezeAdded = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatusBlocks[3].classList.replace('btn-light', 'btn-success')
			resolve()
		}, 5000)
	})

	const toppingsAdded = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatusBlocks[4].classList.replace('btn-light', 'btn-success')
			resolve()
		}, 12000)
	})

	const secondLayerOfCheezeAdded = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatusBlocks[5].classList.replace('btn-light', 'btn-success')
			resolve()
		}, 5000)
	})

	const pizzaBaked = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatusBlocks[6].classList.replace('btn-light', 'btn-success')
			resolve()
		}, 15000)
	})

	const oreganoAddedAndPacked = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatusBlocks[7].classList.replace('btn-light', 'btn-success')
			resolve()
		}, 8000)
	})

	const packageReceivedAtCounter = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatusBlocks[8].classList.replace('btn-light', 'btn-success')
			resolve()
		}, 2000)
	})

	chefReceivedOrder()
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAddedAndPacked)
		.then(packageReceivedAtCounter)
		.then(() => {
			orderStatusBlocks[9].classList.replace('btn-light', 'btn-success')
		})
		.catch((error) => console.log(error))
}