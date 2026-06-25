/* Student Spoon - original client-side JavaScript for the Unit 15 prototype. */

// Student Spoon recipe data used across the Home, Recipes and Recipe Details pages.
const recipes = [
  { id: 'pasta-bowl', title: 'Pasta Bowl', price: 1.85, time: 15, difficulty: 'Easy', servings: 1, emoji: '🍝', colors: ['#e7af57', '#d96f4d'], tags: ['under5', 'quick', 'vegetarian', 'leftovers'], tagLabels: ['Under £5', 'Quick', 'Vegetarian', 'Use leftovers'], ingredients: ['90g dried pasta', '120g chopped tomatoes', 'A handful of spinach', '20g grated cheese', 'Salt, pepper and dried herbs'], method: ['Cook the pasta in boiling water until soft.', 'Warm the chopped tomatoes with herbs in a small pan.', 'Stir in the spinach until it has wilted.', 'Drain the pasta, mix with the sauce and finish with cheese.'], description: 'A quick tomato pasta that makes use of simple cupboard and freezer ingredients.', tip: 'Use frozen spinach or any leftover vegetables to avoid buying ingredients for one meal.' },
  { id: 'egg-fried-rice', title: 'Egg Fried Rice', price: 1.60, time: 20, difficulty: 'Easy', servings: 1, emoji: '🍳', colors: ['#f0c75e', '#df8a48'], tags: ['under5', 'quick', 'vegetarian', 'leftovers'], tagLabels: ['Under £5', 'Quick', 'Vegetarian', 'Use leftovers'], ingredients: ['150g cooked rice', '2 eggs', '80g frozen mixed vegetables', '1 spring onion or half an onion', '1 tbsp soy sauce', 'Oil for cooking'], method: ['Heat a small amount of oil in a frying pan.', 'Cook the vegetables and onion for a few minutes.', 'Move them to one side, scramble the eggs, then mix everything together.', 'Add the rice and soy sauce. Stir until hot all the way through.'], description: 'An affordable one-pan meal that turns leftover rice and frozen vegetables into dinner.', tip: 'Use cold leftover rice because it separates more easily and reduces food waste.' },
  { id: 'tuna-wrap', title: 'Tuna Wrap', price: 1.30, time: 10, difficulty: 'Easy', servings: 1, emoji: '🌯', colors: ['#7bb7d2', '#5c8fb3'], tags: ['under5', 'quick', 'no-oven', 'leftovers'], tagLabels: ['Under £5', 'Quick', 'No oven', 'Use leftovers'], ingredients: ['1 tortilla wrap', 'Half a tin of tuna', '1 tbsp yoghurt or mayonnaise', 'A handful of salad leaves', 'Sweetcorn or leftover vegetables'], method: ['Drain the tuna and mix it with yoghurt or mayonnaise.', 'Lay the wrap flat and add the salad leaves.', 'Add the tuna mixture and any vegetables.', 'Fold the sides in and roll the wrap tightly.'], description: 'A no-cook lunch that is useful when you only have a kettle, microwave or no oven access.', tip: 'Use half a tin of tuna today and save the rest in a covered container for another wrap.' },
  { id: 'one-pan-tomato-pasta', title: 'One-Pan Tomato Pasta', price: 1.55, time: 25, difficulty: 'Easy', servings: 2, emoji: '🍅', colors: ['#e36e58', '#c34d43'], tags: ['under5', 'vegetarian', 'meal-prep'], tagLabels: ['Under £5', 'Vegetarian', 'Meal prep'], ingredients: ['180g dried pasta', '1 tin chopped tomatoes', '1 small onion', '1 stock cube', '400ml water', 'Dried herbs'], method: ['Add all ingredients to a deep pan.', 'Bring to a boil and stir regularly.', 'Cook until the pasta is soft and the sauce has thickened.', 'Split into two portions or save one for tomorrow.'], description: 'A two-portion pasta recipe with fewer dishes to wash afterwards.', tip: 'Cook two portions and put one in the fridge for a cheaper next-day lunch.' },
  { id: 'microwave-mug-omelette', title: 'Microwave Mug Omelette', price: 0.95, time: 6, difficulty: 'Easy', servings: 1, emoji: '🥚', colors: ['#f4db90', '#cbb66c'], tags: ['under5', 'quick', 'no-oven', 'vegetarian'], tagLabels: ['Under £5', 'Quick', 'No oven', 'Vegetarian'], ingredients: ['2 eggs', 'A splash of milk', 'Handful of grated cheese', 'Any cooked vegetables', 'Salt and pepper'], method: ['Crack the eggs into a microwave-safe mug and beat them.', 'Add milk, cheese and small pieces of vegetables.', 'Microwave in short bursts, stirring between each burst.', 'Stop when the egg is fully set and hot.'], description: 'A fast breakfast or light meal for students with limited equipment.', tip: 'Only use a microwave-safe mug and heat in short bursts to stop the egg overflowing.' },
  { id: 'vegetable-noodles', title: 'Vegetable Noodles', price: 1.70, time: 15, difficulty: 'Easy', servings: 1, emoji: '🍜', colors: ['#b8d59d', '#5f9c73'], tags: ['under5', 'quick', 'vegetarian', 'leftovers'], tagLabels: ['Under £5', 'Quick', 'Vegetarian', 'Use leftovers'], ingredients: ['1 noodle nest', '150g frozen stir-fry vegetables', '1 tbsp soy sauce', 'Half an onion', 'Optional chilli flakes'], method: ['Cook the noodles following the packet instructions.', 'Stir-fry the vegetables and onion in a pan.', 'Add the cooked noodles and soy sauce.', 'Mix for one minute and serve.'], description: 'A flexible recipe for using frozen vegetables or small leftover portions.', tip: 'Frozen vegetables are often cheaper per portion and last longer than fresh vegetables.' },
  { id: 'chickpea-curry', title: 'Chickpea Curry', price: 1.45, time: 30, difficulty: 'Easy', servings: 2, emoji: '🍛', colors: ['#ddae55', '#a8703f'], tags: ['under5', 'vegetarian', 'meal-prep'], tagLabels: ['Under £5', 'Vegetarian', 'Meal prep'], ingredients: ['1 tin chickpeas', '1 tin chopped tomatoes', 'Half an onion', '1 tsp curry powder', '150g cooked rice', 'A splash of water'], method: ['Cook the onion in a pan until soft.', 'Add curry powder and cook for 30 seconds.', 'Add tomatoes and chickpeas, then simmer for 20 minutes.', 'Serve with rice and keep the second portion for later.'], description: 'A filling, low-cost curry with protein from chickpeas and two servings.', tip: 'Tinned chickpeas are a low-cost protein source and can be stored for months.' },
  { id: 'leftover-chicken-rice', title: 'Leftover Chicken Rice', price: 2.20, time: 18, difficulty: 'Easy', servings: 1, emoji: '🍗', colors: ['#e0a46d', '#b87047'], tags: ['under5', 'quick', 'leftovers'], tagLabels: ['Under £5', 'Quick', 'Use leftovers'], ingredients: ['120g cooked chicken', '150g cooked rice', '80g frozen vegetables', '1 tbsp soy sauce', '1 egg optional'], method: ['Warm the vegetables in a frying pan.', 'Add the cooked chicken and rice.', 'Stir in soy sauce and heat until steaming.', 'Add a cooked egg on top if you have one.'], description: 'A simple way to turn leftover roast or cooked chicken into a new meal.', tip: 'Only use leftover chicken that has been stored safely and is heated until piping hot.' },
  { id: 'jacket-potato-beans', title: 'Jacket Potato, Beans and Cheese', price: 1.40, time: 12, difficulty: 'Easy', servings: 1, emoji: '🥔', colors: ['#dbb267', '#a77a3f'], tags: ['under5', 'quick', 'no-oven', 'vegetarian'], tagLabels: ['Under £5', 'Quick', 'No oven', 'Vegetarian'], ingredients: ['1 baking potato', 'Half a tin baked beans', '20g grated cheese', 'Black pepper'], method: ['Pierce the potato with a fork.', 'Microwave it until soft, turning halfway through.', 'Heat the beans in a microwave-safe bowl.', 'Split the potato, add beans and cheese, then season.'], description: 'A comforting, low-cost meal that can be made in a microwave.', tip: 'Use the other half of the baked beans in tomorrow’s toast or pasta sauce.' },
  { id: 'meal-prep-chicken-pasta', title: 'Meal Prep Chicken Pasta', price: 2.90, time: 35, difficulty: 'Medium', servings: 3, emoji: '🍱', colors: ['#c8ac7a', '#a57a52'], tags: ['under5', 'meal-prep'], tagLabels: ['Under £5', 'Meal prep'], ingredients: ['250g dried pasta', '250g chicken breast', '1 jar tomato sauce', '200g frozen vegetables', 'Dried herbs'], method: ['Cook the pasta and drain it.', 'Cook the chicken pieces until fully cooked.', 'Add frozen vegetables and tomato sauce.', 'Mix in the pasta, then divide into three containers.'], description: 'A batch-cooking recipe for three lunches or dinners during a busy week.', tip: 'Cool portions before refrigerating and use suitable reusable containers.' },
  { id: 'overnight-oats', title: 'Overnight Oats', price: 0.85, time: 5, difficulty: 'Easy', servings: 1, emoji: '🥣', colors: ['#d5c4a6', '#a99c81'], tags: ['under5', 'quick', 'no-oven', 'vegetarian', 'meal-prep'], tagLabels: ['Under £5', 'Quick', 'No oven', 'Vegetarian', 'Meal prep'], ingredients: ['50g oats', '150ml milk or plant milk', '1 tsp honey or jam', 'Fruit if available'], method: ['Add the oats and milk to a jar or container.', 'Stir in honey, jam or fruit.', 'Cover and leave in the fridge overnight.', 'Eat cold in the morning or take it with you.'], description: 'A low-effort breakfast that can be prepared before a busy morning.', tip: 'Make two jars at once to save time and use fruit that needs eating first.' },
  { id: 'veggie-quesadilla', title: 'Vegetable Quesadilla', price: 1.90, time: 15, difficulty: 'Easy', servings: 1, emoji: '🫓', colors: ['#ead26b', '#c69c47'], tags: ['under5', 'quick', 'vegetarian', 'leftovers'], tagLabels: ['Under £5', 'Quick', 'Vegetarian', 'Use leftovers'], ingredients: ['2 tortilla wraps', '40g grated cheese', 'Leftover vegetables', 'Half a tin sweetcorn', 'Salsa optional'], method: ['Put cheese and vegetables on one wrap.', 'Place the second wrap on top.', 'Cook in a dry frying pan until both sides are golden.', 'Cut into wedges and serve.'], description: 'A crisp, quick meal that makes left over vegetables feel more interesting.', tip: 'Small amounts of cooked vegetables are perfect here, so this is useful near the end of the week.' }
];

// Labels used to display recipe category tags consistently.
const tagDisplay = {
  'under5': 'Under £5',
  'quick': 'Quick',
  'no-oven': 'No oven',
  'meal-prep': 'Meal prep',
  'vegetarian': 'Vegetarian',
  'leftovers': 'Use leftovers'
};

// Prevent user-entered text from being inserted into the page as HTML.
function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' })[character]);
}

// Build the reusable visual area for each recipe card or detail page.
function recipeVisual(recipe, detail = false) {
  const tag = detail ? 'div class="detail-visual"' : 'div class="recipe-visual"';
  return `<${tag} style="--card-start:${recipe.colors[0]}; --card-end:${recipe.colors[1]};" role="img" aria-label="Illustration representing ${escapeHTML(recipe.title)}"><span class="recipe-emoji" aria-hidden="true">${recipe.emoji}</span></div>`;
}

// Build a reusable recipe card that links to the matching detail page.
function recipeCard(recipe) {
  const tags = recipe.tags.slice(0, 3).map(tag => `<span class="recipe-tag">${tagDisplay[tag]}</span>`).join('');
  return `<article class="recipe-card"><a class="card-link" href="recipe-details.html?recipe=${encodeURIComponent(recipe.id)}">${recipeVisual(recipe)}<div class="recipe-card-body"><h3>${escapeHTML(recipe.title)}</h3><p class="recipe-description">${escapeHTML(recipe.description)}</p><div class="recipe-tags">${tags}</div><div class="recipe-meta"><span>🏷️ £${recipe.price.toFixed(2)} per serving</span><span>◷ ${recipe.time} mins</span><span>▥ ${escapeHTML(recipe.difficulty)}</span></div></div></a></article>`;
}

// Open and close the mobile navigation menu.
function setupNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Send homepage searches to the full Recipes page.
function setupHomeSearch() {
  const form = document.getElementById('homeSearchForm');
  const grid = document.getElementById('featuredRecipeGrid');
  if (grid) {
    grid.innerHTML = recipes.slice(0, 3).map(recipeCard).join('');
  }
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = document.getElementById('homeSearch').value.trim();
    window.location.href = `recipes.html${query ? `?q=${encodeURIComponent(query)}` : ''}`;
  });
}

// Check whether one recipe matches the current search text and all selected filters.
function recipeMatchesFilters(recipe, selectedFilters, query) {
  const searchableText = `${recipe.title} ${recipe.description} ${recipe.ingredients.join(' ')} ${recipe.tagLabels.join(' ')}`.toLowerCase();
  const matchesQuery = !query || searchableText.includes(query.toLowerCase());
  const matchesEveryFilter = [...selectedFilters].every((filter) => {
    if (filter === 'under5') return recipe.price < 5;
    if (filter === 'quick') return recipe.time <= 20;
    return recipe.tags.includes(filter);
  });
  return matchesQuery && matchesEveryFilter;
}

// Search, filter and redraw the Recipes page without reloading it.
function setupRecipeSearch() {
  const grid = document.getElementById('recipeGrid');
  if (!grid) return;
  const form = document.getElementById('recipeSearchForm');
  const input = document.getElementById('recipeSearch');
  const controls = document.getElementById('filterControls');
  const count = document.getElementById('recipeCount');
  const noResults = document.getElementById('noResults');
  const clearButton = document.getElementById('clearFilters');
  const emptyClearButton = document.getElementById('emptyStateClear');
  const selectedFilters = new Set();
  const parameters = new URLSearchParams(window.location.search);
  const incomingQuery = parameters.get('q') || '';
  const incomingFilter = parameters.get('filter');
  input.value = incomingQuery;
  if (incomingFilter && tagDisplay[incomingFilter]) selectedFilters.add(incomingFilter);

  function render() {
    const query = input.value.trim();
    const matchingRecipes = recipes.filter(recipe => recipeMatchesFilters(recipe, selectedFilters, query));
    grid.innerHTML = matchingRecipes.map(recipeCard).join('');
    count.textContent = `${matchingRecipes.length} recipe${matchingRecipes.length === 1 ? '' : 's'} found`;
    noResults.hidden = matchingRecipes.length !== 0;
    controls.querySelectorAll('[data-filter]').forEach((button) => {
      const active = selectedFilters.has(button.dataset.filter);
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  form.addEventListener('submit', (event) => { event.preventDefault(); render(); });
  input.addEventListener('input', render);
  controls.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    const filter = button.dataset.filter;
    selectedFilters.has(filter) ? selectedFilters.delete(filter) : selectedFilters.add(filter);
    render();
  });
  function clearAll() { selectedFilters.clear(); input.value = ''; render(); }
  clearButton.addEventListener('click', clearAll);
  emptyClearButton.addEventListener('click', clearAll);
  render();
}

// Read the selected recipe ID from the URL and use a safe default when needed.
function getCurrentRecipe() {
  const requestedId = new URLSearchParams(window.location.search).get('recipe');
  return recipes.find((recipe) => recipe.id === requestedId) || recipes.find((recipe) => recipe.id === 'egg-fried-rice');
}

// Display the selected recipe details using the shared recipe data.
function setupRecipeDetail() {
  const detail = document.getElementById('recipeDetail');
  if (!detail) return;
  const recipe = getCurrentRecipe();
  const ingredients = recipe.ingredients.map(item => `<li>${escapeHTML(item)}</li>`).join('');
  const method = recipe.method.map(item => `<li>${escapeHTML(item)}</li>`).join('');
  const tags = recipe.tags.map(tag => `<span class="recipe-tag">${tagDisplay[tag]}</span>`).join('');
  detail.innerHTML = `${recipeVisual(recipe, true)}<div><p class="eyebrow">Student Spoon recipe</p><h1 class="detail-heading">${escapeHTML(recipe.title)}</h1><p class="detail-description">${escapeHTML(recipe.description)}</p><div class="recipe-tags">${tags}</div><div class="detail-meta"><div class="detail-meta-item"><span>Estimated cost</span><strong>£${recipe.price.toFixed(2)} per serving</strong></div><div class="detail-meta-item"><span>Cooking time</span><strong>${recipe.time} minutes</strong></div><div class="detail-meta-item"><span>Difficulty</span><strong>${escapeHTML(recipe.difficulty)}</strong></div></div><div class="detail-content-grid"><section class="detail-panel"><h2>Ingredients</h2><ul class="ingredients-list">${ingredients}</ul></section><section class="detail-panel"><h2>Method</h2><ol class="method-list">${method}</ol></section></div><aside class="budget-callout"><strong>Budget tip:</strong> ${escapeHTML(recipe.tip)}</aside></div>`;
  document.title = `${recipe.title} | Student Spoon`;
  setupRatings(recipe.id);
  setupComments(recipe.id);
}

// Store one rating for each recipe in this browser only.
function setupRatings(recipeId) {
  const controls = document.getElementById('ratingControls');
  const message = document.getElementById('ratingMessage');
  if (!controls) return;
  const key = `studentSpoonRating_${recipeId}`;
  let rating = Number(localStorage.getItem(key) || 0);
  function render() {
    controls.innerHTML = [1, 2, 3, 4, 5].map(number => `<button class="star-button ${number <= rating ? 'active' : ''}" type="button" data-rating="${number}" aria-label="Give this recipe ${number} out of 5 stars" aria-pressed="${number === rating}">★</button>`).join('');
    message.textContent = rating ? `You rated this recipe ${rating} out of 5 stars.` : 'No rating selected yet.';
  }
  controls.addEventListener('click', (event) => {
    const button = event.target.closest('[data-rating]');
    if (!button) return;
    rating = Number(button.dataset.rating);
    localStorage.setItem(key, String(rating));
    render();
  });
  render();
}

// Validate and store recipe comments in localStorage for this prototype.
function setupComments(recipeId) {
  const form = document.getElementById('commentForm');
  const list = document.getElementById('commentList');
  if (!form || !list) return;
  const key = `studentSpoonComments_${recipeId}`;
  const status = document.getElementById('commentStatus');
  function getComments() { return JSON.parse(localStorage.getItem(key) || '[]'); }
  function render() {
    const comments = getComments();
    list.innerHTML = comments.length ? comments.map((comment) => `<article class="comment"><h3>${escapeHTML(comment.name)}</h3><p>${escapeHTML(comment.text)}</p></article>`).join('') : '<p class="form-hint">No comments have been added in this browser yet.</p>';
  }
  function showError(fieldName, message) { document.getElementById(`${fieldName}Error`).textContent = message; }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('commentName').value.trim();
    const text = document.getElementById('commentText').value.trim();
    showError('commentName', ''); showError('commentText', '');
    let valid = true;
    if (name.length < 2) { showError('commentName', 'Enter a name or nickname with at least two characters.'); valid = false; }
    if (text.length < 5) { showError('commentText', 'Write a comment with at least five characters.'); valid = false; }
    if (!valid) return;
    const comments = getComments();
    comments.unshift({ name, text });
    localStorage.setItem(key, JSON.stringify(comments));
    form.reset();
    status.textContent = 'Your comment has been saved in this browser.';
    render();
  });
  render();
}

// Reuse the same validation pattern for each recipe-submission input.
function validateSubmissionField(id, validationFunction) {
  const field = document.getElementById(id);
  const error = document.getElementById(`${id}Error`);
  const result = validationFunction(field.value.trim(), field);
  error.textContent = result;
  field.setAttribute('aria-invalid', String(Boolean(result)));
  return !result;
}

// Validate the recipe form, save valid submissions locally and show feedback.
function setupSubmitRecipeForm() {
  const form = document.getElementById('submitRecipeForm');
  if (!form) return;
  const status = document.getElementById('submitRecipeStatus');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = '';
    const results = [
      validateSubmissionField('recipeName', value => value.length >= 3 ? '' : 'Enter a recipe name with at least three characters.'),
      validateSubmissionField('recipeDifficulty', value => value ? '' : 'Choose a difficulty level.'),
      validateSubmissionField('recipeDescription', value => value.length >= 10 ? '' : 'Write a description with at least ten characters.'),
      validateSubmissionField('recipeCost', value => Number(value) > 0 && Number(value) <= 50 ? '' : 'Enter a realistic cost between £0.01 and £50.'),
      validateSubmissionField('recipeTime', value => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 480 ? '' : 'Enter a whole number between 1 and 480 minutes.'),
      validateSubmissionField('recipeServings', value => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 20 ? '' : 'Enter a whole number between 1 and 20.'),
      validateSubmissionField('recipeIngredients', value => value.length >= 10 ? '' : 'List the ingredients using at least ten characters.'),
      validateSubmissionField('recipeMethod', value => value.length >= 20 ? '' : 'Write a method using at least twenty characters.')
    ];
    if (!results.every(Boolean)) {
      status.textContent = 'Check the highlighted fields before submitting the recipe.';
      return;
    }
    const formData = new FormData(form);
    const submission = {
      name: formData.get('recipeName'), description: formData.get('recipeDescription'), difficulty: formData.get('recipeDifficulty'), cost: Number(formData.get('recipeCost')), time: Number(formData.get('recipeTime')), servings: Number(formData.get('recipeServings')), ingredients: formData.get('recipeIngredients'), method: formData.get('recipeMethod'), tags: formData.getAll('tags'), submittedAt: new Date().toISOString()
    };
    const submissions = JSON.parse(localStorage.getItem('studentSpoonSubmissions') || '[]');
    submissions.push(submission);
    localStorage.setItem('studentSpoonSubmissions', JSON.stringify(submissions));
    form.reset();
    form.querySelectorAll('[aria-invalid]').forEach(field => field.setAttribute('aria-invalid', 'false'));
    status.textContent = 'Your recipe has been submitted for review and saved in this browser for the prototype.';
  });
}

// Calculate an estimated cost per serving after validating both inputs.
function setupCalculator() {
  const form = document.getElementById('costCalculator');
  if (!form) return;
  const result = document.getElementById('calculatorResult');
  function setError(id, message) { document.getElementById(`${id}Error`).textContent = message; }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const cost = Number(document.getElementById('totalCost').value);
    const servings = Number(document.getElementById('servingCount').value);
    setError('totalCost', ''); setError('servingCount', '');
    let valid = true;
    if (!(cost > 0)) { setError('totalCost', 'Enter a total cost greater than £0.'); valid = false; }
    if (!Number.isInteger(servings) || servings < 1) { setError('servingCount', 'Enter at least one serving.'); valid = false; }
    if (!valid) { result.textContent = 'Correct the values above, then try again.'; return; }
    result.textContent = `Estimated cost per serving: £${(cost / servings).toFixed(2)}.`;
  });
}

function setupYear() { document.querySelectorAll('.current-year').forEach(element => { element.textContent = new Date().getFullYear(); }); }

// Start only the features needed by the current page after the HTML has loaded.
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupHomeSearch();
  setupRecipeSearch();
  setupRecipeDetail();
  setupSubmitRecipeForm();
  setupCalculator();
  setupYear();
});
