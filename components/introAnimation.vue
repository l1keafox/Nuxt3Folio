<template>
    <div id="tiles" class=""/>
</template>

<script setup>
  import anime from "animejs/lib/anime.es.js";
  const emit = defineEmits(['update:intro','startAnim'])

  onMounted(() => {
	let wrapper = document.getElementById("tiles");
	let columns = Math.floor(document.body.clientWidth / 50);
	let rows = Math.floor(document.body.clientWidth / 50);

	const handleOnClick = (index) => {
		let toggle = ref(false);
		let tiles = document.getElementsByClassName("tile");
		for (let tile of tiles) {
			tile.onclick = null;
            tile.classList.remove("cursor-pointer");
		}
		window.onresize = null;
		anime({
			targets: ".tile",
			opacity: toggle ? 0 : 1,
			delay: anime.stagger(50, {
				grid: [columns, rows],
				from: index,
			}),
		});
		emit("startAnim")
		setTimeout(() => {
			emit("update:intro",true)
		}, 1500);
	};

	const createTile = (index) => {
		//
		const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.classList.add("cursor-pointer");
         
		tile.onclick = () => handleOnClick(index);
		return tile;
	};

	const createTiles = (quantity) => {
		Array.from(Array(quantity)).map((tile, index) => {
			wrapper.appendChild(createTile(index));
		});
	};

	const createGrid = () => {
		wrapper.innerHTML = "";

		columns = Math.floor(document.body.clientWidth / 50);
		rows = Math.floor(document.body.clientHeight / 50);
		wrapper.style.setProperty("--columns", columns);
		wrapper.style.setProperty("--rows", rows);
		createTiles(columns * rows);
		console.log(
			columns,
			rows,
			document.body.clientWidth,
			document.body.clientHeight
		);
	};

	createGrid();
	window.onresize = () => createGrid();
  });

</script>

<style>

#tiles {
	height: 100vh;
	width: 100vw;
	display: grid;
	grid-template-columns: repeat(var(--columns), 1fr);
	grid-template-rows: repeat(var(--rows), 1fr);
}
.tile {
	position: relative;
}
.tile:hover {
	opacity: 0.95;
}
.tile:before {
	background-color: rgb(20, 20, 20);
	content: "";
	position: absolute;
	inset: 1px;
}
</style>