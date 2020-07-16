const photon = document.querySelector('.photon');
const forkify = document.querySelector('.forkify');
const rawr = document.querySelector('.rawr');

const photonDesc = document.querySelector('.photon-desc');
const forkifyDesc = document.querySelector('.forkify-desc');
const rawrDesc = document.querySelector('.rawr-desc');

//MOUSEOVER

photon.addEventListener('mouseover', function () {
	photonDesc.style.display = 'block';
});

forkify.addEventListener('mouseover', function () {
	forkifyDesc.style.display = 'block';
});

rawr.addEventListener('mouseover', function () {
	rawrDesc.style.display = 'block';
});

//MOUSEOUT

photon.addEventListener('mouseout', function () {
	photonDesc.style.display = 'none';
});

forkify.addEventListener('mouseout', function () {
	forkifyDesc.style.display = 'none';
});

rawr.addEventListener('mouseout', function () {
	rawrDesc.style.display = 'none';
});
