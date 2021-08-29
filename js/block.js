const sites = document.getElementById("sites");
const submit = document.getElementById("submit");
const chbx = document.getElementById("chbx");

submit.addEventListener("click", () => {
  const blocked = sites.value.split("\n").map(s => s.trim()).filter(Boolean);
  chrome.storage.local.set({ blocked });

  window.location.href="./../popup.html";
});

chbx.addEventListener("change", (event) => {
  const enabled = event.target.checked;
  chrome.storage.local.set({ enabled });
});

window.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["blocked", "enabled"], function (local) {
    const { blocked, enabled } = local;
    if (Array.isArray(blocked)) {
      sites.value = blocked.join("\n");
      chbx.checked = enabled;
    }
  });
});