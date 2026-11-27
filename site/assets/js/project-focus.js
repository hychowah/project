/* Field selection is carried in the URL; all content remains readable without JS. */
(() => {
  "use strict";
  const labels = {all: "All fields", mechanical: "Mechanical", software: "Software", electronics: "Electronics"};
  const controls = document.querySelector("[data-project-focus]");
  const overview = controls?.dataset.defaultView === "overview";
  const supported = controls ? controls.dataset.supportedFields.split(/\s+/) : Object.keys(labels);
  const cards = [...document.querySelectorAll(".project-card[data-project-fields]")];
  const summaries = [...document.querySelectorAll("[data-focus-summary]")];
  const sections = [...document.querySelectorAll(".page__content h2[data-project-fields]")];

  function updateLinks(field) {
    document.querySelectorAll("[data-project-link], [data-focus-link], .masthead a[href], .portfolio-actions a[href], .portfolio-section-heading a[href], .portfolio-hero__media a[href]").forEach(link => {
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin) return;
      if (field === "all") url.searchParams.delete("field");
      else url.searchParams.set("field", field);
      link.href = url.pathname + url.search + url.hash;
    });
  }

  function render(requested) {
    const field = Object.hasOwn(labels, requested) && (requested === "all" || supported.includes(requested)) ? requested : "all";
    let visible = 0;
    cards.forEach(card => {
      card.hidden = field !== "all" && !card.dataset.projectFields.split(/\s+/).includes(field);
      if (!card.hidden) visible += 1;
    });
    summaries.forEach(summary => { summary.hidden = summary.dataset.focusSummary !== field; });
    sections.forEach(heading => {
      const hidden = field === "all" ? overview : !heading.dataset.projectFields.split(/\s+/).includes(field);
      heading.hidden = hidden;
      for (let node = heading.nextElementSibling; node && node.tagName !== "H2"; node = node.nextElementSibling) node.hidden = hidden;
    });
    if (controls) {
      controls.hidden = false;
      controls.querySelectorAll("[data-field]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.field === field)));
      const count = controls.querySelector("[data-project-count]");
      if (count) count.textContent = `${visible} project${visible === 1 ? "" : "s"}${field === "all" ? "" : " · " + labels[field]}`;
    }
    updateLinks(field);
    return field;
  }

  function readURL() {
    const url = new URL(location.href);
    const field = render(url.searchParams.get("field") || "all");
    // Unknown fields and fields unsupported by this project fall back to its default view.
    if (field === "all" && url.searchParams.has("field")) {
      url.searchParams.delete("field");
      history.replaceState(null, "", url);
    }
  }

  if (controls) controls.addEventListener("click", event => {
    const button = event.target.closest("button[data-field]");
    if (!button) return;
    const field = render(button.dataset.field);
    const url = new URL(location.href);
    if (field === "all") url.searchParams.delete("field");
    else url.searchParams.set("field", field);
    if (url.href !== location.href) history.pushState(null, "", url);
  });
  window.addEventListener("popstate", readURL);
  readURL();
})();
