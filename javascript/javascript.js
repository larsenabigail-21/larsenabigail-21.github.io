
document.addEventListener("DOMContentLoaded", () => {
	const button = document.getElementById("addImageBtn");
	const targetDiv = document.getElementById("mydiv100");
	
	button.addEventListener("click", () => {
			const img = document.createElement("img");
			
			img.src = "../images/background.jpg" + Math.random();
			
			img.style.display = "block";
			img.style.marginBottom = "10px";
			
			targetDiv.appendChild(img);
	});
	
});