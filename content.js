
(() => {
  if (window.__forbiddenKeysLoaded) return;
  window.__forbiddenKeysLoaded = true;

  let popupTimer;

  async function clearClipboard() {
    try {
      await navigator.clipboard.writeText("");
      return true;
    } catch (error) {
      console.warn(
        "[Forbidden Keys] Clipboard clearing failed.",
        error
      );
      return false;
    }
  }

  function showWarning() {
    let popup = document.getElementById(
      "forbidden-keys-warning"
    );

    if (!popup) {
      popup = document.createElement("div");
      popup.id = "forbidden-keys-warning";
      popup.setAttribute("role", "alert");
      document.documentElement.appendChild(popup);
    }

    popup.textContent =
      "Pasting is disabled. Type it yourself and learn!";
    popup.classList.add("visible");

    clearTimeout(popupTimer);

    popupTimer = setTimeout(() => {
      popup.classList.remove("visible");
    }, 2800);
  }

  function blockPaste(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    showWarning();
    void clearClipboard();
  }

  
  document.addEventListener(
    "keydown",
    (event) => {
      const key = event.key.toLowerCase();
      const modifier = event.ctrlKey || event.metaKey;

      if (
        (modifier && key === "v") ||
        (event.shiftKey && key === "insert")
      ) {
        event.preventDefault();
        event.stopImmediatePropagation();

        showWarning();
        void clearClipboard();
      }
    },
    true
  );

  document.addEventListener("paste", blockPaste, true);
})();
