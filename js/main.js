/* ==========================================================
   MAIN - rendering and interactions. Reads data from CONFIG.
   ========================================================== */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Escape text before putting it in HTML
const esc = (text) =>
  String(text ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));


/* ---------- 1. DEVELOPER CREDIT (copy this block to client sites) ----------
   Usage: <developer-credit variant="footer" theme="light" compact></developer-credit> */
customElements.define("developer-credit", class extends HTMLElement {
  connectedCallback() {
    const variant = this.getAttribute("variant") || "";
    const theme = this.getAttribute("theme") === "light" ? "light" : "";
    const compact = this.hasAttribute("compact") ? "compact" : "";
    this.innerHTML = `
      <a class="credit ${variant} ${theme} ${compact}"
         href="${CONFIG.domain}/?ref=credit" target="_blank" rel="noopener">
        <span>Built by</span><b>Dev Isoo</b><i>↗</i>
      </a>`;
  }
});


/* ---------- 2. RENDER SECTIONS FROM CONFIG ---------- */
$("#pillars").innerHTML = CONFIG.pillars
  .map(([title, text]) => `<div><b>${title}</b><span>${text}</span></div>`)
  .join("");

$("#services-list").innerHTML = CONFIG.services
  .map(([title, text]) => `<div class="service reveal"><h3>${title}</h3><p>${text}</p></div>`)
  .join("");

$("#process").innerHTML = CONFIG.process
  .map(([title, text], i) => `
    <div class="step reveal">
      <span class="step-num">0${i + 1}</span>
      <h3>${title}</h3>
      <p>${text}</p>
    </div>`)
  .join("");

$("#stats").innerHTML = CONFIG.stats
  .map((s) => `
    <div class="stat">
      <b class="grad" ${s.value != null ? `data-count="${s.value}"` : ""}>${s.value != null ? 0 : "-"}</b>
      <span>${s.label}</span>
    </div>`)
  .join("");

$("#socials").innerHTML =
  Object.entries(CONFIG.social).map(([name, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${name}</a>`).join("") +
  `<a href="mailto:${CONFIG.email}">${CONFIG.email}</a>`;

$("#whatsapp").href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Hi Dev Isoo, I have a project idea.")}`;


/* ---------- 3. PROJECT CARDS + CASE STUDY MODAL ---------- */
function visualHTML(p) {
  if (p.image) return `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">`;
  return `<div class="visual-bg"></div><big aria-hidden="true">${esc(p.title.slice(0, 2))}</big>`;
}

$("#cards").innerHTML = CONFIG.projects
  .map((p, i) => `
    <article class="card reveal" tabindex="0" role="button" data-index="${i}" aria-label="Open ${esc(p.title)} case study">
      <div class="visual" style="--g:${p.gradient}">${visualHTML(p)}</div>
      <div class="card-info">
        <span class="category">${esc(p.category)}</span>
        <h3>${esc(p.title)}</h3>
        <div class="tags">${p.technologies.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        <p>${esc(p.description)}</p>
        <p class="problem"><b>Problem solved:</b> ${esc(p.problem)}</p>
        <div class="links">
          ${p.liveUrl ? `<a class="btn btn-grad small" href="${esc(p.liveUrl)}" target="_blank" rel="noopener">Live site ↗</a>` : ""}
          ${p.githubUrl ? `<a class="btn btn-ghost small" href="${esc(p.githubUrl)}" target="_blank" rel="noopener">GitHub</a>` : ""}
        </div>
      </div>
    </article>`)
  .join("");

const modal = $("#modal");

function openCaseStudy(index) {
  const p = CONFIG.projects[index];
  const c = p.caseStudy;
  const steps = [
    ["The idea", c.idea], ["The problem", c.problem], ["The approach", c.approach],
    ["The technology", c.technology], ["The build", c.build], ["The result", c.result]
  ];

  $("#modalBody").innerHTML = `
    <span class="category">${esc(p.category)}</span>
    <h2>${esc(p.title)}</h2>
    <div class="visual" style="--g:${p.gradient}; border-radius:14px; margin-top:24px">${visualHTML(p)}</div>
    ${c.stats.length ? `<div class="case-stats">${c.stats.map((s) => `<div><b>${s.value ?? "-"}</b><span>${esc(s.label)}</span></div>`).join("")}</div>` : ""}
    ${steps.map(([title, text], i) => `
      <div class="case-step">
        <span class="n">0${i + 1}</span>
        <div><h4>${title}</h4><p>${esc(text)}</p></div>
      </div>`).join("")}
    <div class="links" style="margin-top:20px">
      ${p.liveUrl ? `<a class="btn btn-grad" href="${esc(p.liveUrl)}" target="_blank" rel="noopener">Visit live site ↗</a>` : ""}
      ${p.githubUrl ? `<a class="btn btn-ghost" href="${esc(p.githubUrl)}" target="_blank" rel="noopener">View code</a>` : ""}
    </div>`;

  modal.showModal();
  modal.scrollTop = 0;
}

$("#cards").addEventListener("click", (e) => {
  if (e.target.closest("a")) return;            // let live/GitHub links work normally
  const card = e.target.closest(".card");
  if (card) openCaseStudy(card.dataset.index);
});
$("#cards").addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("card")) {
    e.preventDefault();
    openCaseStudy(e.target.dataset.index);
  }
});
$("#modalClose").onclick = () => modal.close();
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });


/* ---------- 4. INTERACTIVE TECH STACK ---------- */
$("#chips").innerHTML = CONFIG.tech
  .map(([name], i) => `<button class="chip" data-index="${i}">${name}</button>`)
  .join("");

function showTech(i) {
  const [name, label, usage] = CONFIG.tech[i];
  $$(".chip").forEach((chip, j) => chip.classList.toggle("active", i == j));
  $("#panel").innerHTML = `<small>HOW I USE IT</small><h3>${name}</h3><p><b>${label}</b></p><p>${usage}</p>`;
}
["mouseover", "click", "focusin"].forEach((type) =>
  $("#chips").addEventListener(type, (e) => {
    const chip = e.target.closest(".chip");
    if (chip) showTech(chip.dataset.index);
  })
);
showTech(4);


/* ---------- 5. HERO CODE TYPING ---------- */
const heroCode = `<span class="c">// the short version</span>
<span class="k">const</span> developer = {
  name: <span class="s">"${CONFIG.name}"</span>,
  alias: <span class="s">"${CONFIG.alias}"</span>,
  role: <span class="s">"Full-Stack Developer"</span>,
  location: <span class="s">"${CONFIG.location}"</span>,
  mission: <span class="s">"Build things that matter."</span>
};`;

const codeEl = $("#heroCode");
if (reduceMotion) {
  codeEl.innerHTML = heroCode;
} else {
  let i = 0, shown = "";
  (function type() {
    if (i >= heroCode.length) return;
    if (heroCode[i] === "<") {                  // write whole HTML tags at once
      const end = heroCode.indexOf(">", i);
      shown += heroCode.slice(i, end + 1);
      i = end + 1;
    } else {
      shown += heroCode[i++];
    }
    codeEl.innerHTML = shown;
    setTimeout(type, 22);
  })();
}


/* ---------- 6. MENU, SCROLL REVEAL, COUNTERS ---------- */
$("#menuBtn").onclick = () => {
  const open = $("#menu").classList.toggle("open");
  $("#menuBtn").textContent = open ? "Close" : "Menu";
};
$("#menu").addEventListener("click", (e) => {
  if (e.target.tagName === "A") { $("#menu").classList.remove("open"); $("#menuBtn").textContent = "Menu"; }
});

function countUp(el) {
  const target = +el.dataset.count;
  if (reduceMotion) { el.textContent = target; return; }
  const start = performance.now();
  (function frame(now) {
    const p = Math.min((now - start) / 1400, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(frame);
  })(start);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    entry.target.querySelectorAll("[data-count]").forEach(countUp);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.15 });
$$(".reveal, .stats").forEach((el) => observer.observe(el));


/* ---------- 7. CONTACT FORM (opens a pre-filled email) ---------- */
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const get = (key) => data.get(key) || "-";
  const body =
    `Name: ${get("name")}\nEmail: ${get("email")}\nCompany: ${get("company")}\n` +
    `Project type: ${get("type")}\nBudget: ${get("budget")}\n\n${get("message")}`;
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Project inquiry: " + get("type"))}&body=${encodeURIComponent(body)}`;
  $("#formNote").textContent = "Opening your email app with the inquiry filled in. Prefer chat? Use WhatsApp.";
});


/* ---------- 8. DEVELOPER CONSOLE MESSAGE ---------- */
console.log("%cDEV ISO0", "font:700 28px sans-serif;color:#7c5cff", `\nCurious how it works? ${CONFIG.domain}`);
