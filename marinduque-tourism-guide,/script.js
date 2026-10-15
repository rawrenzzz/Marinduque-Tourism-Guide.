// Sample demonstration data (client-side only)
const destinations = [
  { name: "Poctoy White Beach", category: "beach", town: "Gasan", description: "Powdery sand and calm waters for relaxing swims.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80" },
  { name: "Balanacan Port View", category: "nature", town: "Boac", description: "Harbor viewpoints and coastal scenery.", img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80" },
  { name: "Santa Cruz Cathedral", category: "heritage", town: "Santa Cruz", description: "Historic church with local cultural significance.", img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80" },
  { name: "Tanduyong Beach", category: "beach", town: "Buenavista", description: "Laid-back beach good for picnics and coastal walks.", img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80" },
  { name: "Mount Malindig", category: "adventure", town: "Gasan", description: "Hiking with rewarding mountain views.", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80" },
  { name: "Mongpong Island", category: "adventure", town: "Torrijos", description: "Island hopping and snorkeling with clear waters.", img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=900&q=80" },
  { name: "Buyabod Beach", category: "beach", town: "Santa Cruz", description: "Accessible shore ideal for family trips.", img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80" },
  { name: "Marinduque Bell Tower", category: "heritage", town: "Boac", description: "Historic landmark with local significance.", img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80" }
];

// Additional demo entries added per user request
destinations.push(
  { name: "Malbog Hot Springs", category: "nature", town: "Marinduque", description: "Natural warm springs set in a peaceful riverside setting.", img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80" },
  { name: "Bathala Cave", category: "adventure", town: "Marinduque", description: "A small limestone cave offering a short, family-friendly exploration.", img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=900&q=80" },
  { name: "Poctoy Lookout", category: "scenic", town: "Marinduque", description: "A coastal vantage point with panoramic views of the sea.", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80" },
  { name: "Moriones Murals (Boac)", category: "heritage", town: "Boac", description: "Colorful local murals celebrating the Moriones festival and tradition.", img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80" }
);

const destinationList = document.getElementById('destinationList');
const searchInput = document.getElementById('searchInput');
const resultsSummary = document.getElementById('resultsSummary');

function renderDestinations(list) {
  if (!list.length) {
    destinationList.innerHTML = `<div class="card card-body"><p>No destinations found.</p></div>`;
  } else {
    destinationList.innerHTML = list.map(dest => `
      <article class="card">
        <img src="${dest.img}" alt="${escapeHtml(dest.name)}">
        <div class="card-body">
          <span class="badge">${escapeHtml(dest.category)}</span>
          <h3>${escapeHtml(dest.name)}</h3>
          <p class="muted">${escapeHtml(dest.town)}</p>
          <p>${escapeHtml(dest.description)}</p>
        </div>
      </article>
    `).join('');
  }
  resultsSummary.textContent = `Showing ${list.length} destination${list.length !== 1 ? 's' : ''}`;
}

// Filter by name only (requirement)
function applySearchFilter() {
  const term = (searchInput.value || '').trim().toLowerCase();
  const filtered = destinations.filter(d => d.name.toLowerCase().includes(term));
  renderDestinations(filtered);
}

// Basic HTML escaping for injected text
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

searchInput.addEventListener('input', applySearchFilter);

// initial render
renderDestinations(destinations);