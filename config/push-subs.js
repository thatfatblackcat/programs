const Highlight = (wrapper = "mark", selection = window.getSelection()) => {
	for (let i = 0; i < selection.rangeCount; i++) {
		const w = document.createElement(wrapper); w.tabIndex = 0;
		w.onclick = () => w.parentNode.innerText = w.parentNode.innerText;
		selection.getRangeAt(i).surroundContents(w);
	}
}

window.addEventListener("DOMContentLoaded", () => {
	window.scrollTo(0, localStorage.getItem('scrollY'));
});

window.addEventListener("beforeunload", () => {
	localStorage.setItem('scrollY', window.scrollY);
});

window.addEventListener("keydown", k => {
	if (k.shiftKey || k.ctrlKey) return;
	k.code === "KeyV" && Highlight();
});
