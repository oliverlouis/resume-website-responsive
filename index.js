const photon = document.querySelector('.photon');
const forkify = document.querySelector('.forkify');
const rawr = document.querySelector('.rawr');

const viewWorkImagePhoton = document.querySelector('.view-work-img-photon');
const viewWorkImageForkify = document.querySelector('.view-work-img-forkify');
const viewWorkImageRawr = document.querySelector('.view-work-img-rawr');

const photonDesc = document.querySelector('.photon-desc');
const forkifyDesc = document.querySelector('.forkify-desc');
const rawrDesc = document.querySelector('.rawr-desc');

//MOUSEOVER

photon.addEventListener('mouseover', function () {
	photonDesc.style.display = 'block';
	viewWorkImagePhoton.style.opacity = '0.4';
});

forkify.addEventListener('mouseover', function () {
	forkifyDesc.style.display = 'block';
	viewWorkImageForkify.style.opacity = '0.4';
});

rawr.addEventListener('mouseover', function () {
	rawrDesc.style.display = 'block';
	viewWorkImageRawr.style.opacity = '0.4';
});

//MOUSEOUT

photon.addEventListener('mouseout', function () {
	photonDesc.style.display = 'none';
	viewWorkImagePhoton.style.opacity = '1';
});

forkify.addEventListener('mouseout', function () {
	forkifyDesc.style.display = 'none';
	viewWorkImageForkify.style.opacity = '1';
});

rawr.addEventListener('mouseout', function () {
	rawrDesc.style.display = 'none';
	viewWorkImageRawr.style.opacity = '1';
});
