const products = [
  { title: "HB001", image: "static/images/Chair/HB001.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB002", image: "static/images/Chair/HB002.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB003", image: "static/images/Chair/HB003.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB004", image: "static/images/Chair/HB004.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB005", image: "static/images/Chair/HB005.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB006", image: "static/images/Chair/HB006.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB007", image: "static/images/Chair/HB007.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB008", image: "static/images/Chair/HB008.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB009", image: "static/images/Chair/HB009.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB010", image: "static/images/Chair/HB010.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB011", image: "static/images/Chair/HB011.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB012", image: "static/images/Chair/HB012.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB013", image: "static/images/Chair/HB013.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB014", image: "static/images/Chair/HB014.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB015", image: "static/images/Chair/HB015.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB016", image: "static/images/Chair/HB016.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB017", image: "static/images/Chair/HB017.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB018", image: "static/images/Chair/HB018.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB019", image: "static/images/Chair/HB019.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB020", image: "static/images/Chair/HB020.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB021", image: "static/images/Chair/HB021.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB022", image: "static/images/Chair/HB022.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB023", image: "static/images/Chair/HB023.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB024", image: "static/images/Chair/HB024.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB025", image: "static/images/Chair/HB025.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB026", image: "static/images/Chair/HB026.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB027", image: "static/images/Chair/HB027.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB028", image: "static/images/Chair/HB028.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB029", image: "static/images/Chair/HB029.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB030", image: "static/images/Chair/HB030.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB031", image: "static/images/Chair/HB031.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB032", image: "static/images/Chair/HB032.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB033", image: "static/images/Chair/HB033.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB034", image: "static/images/Chair/HB034.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB035", image: "static/images/Chair/HB035.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB036", image: "static/images/Chair/HB036.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB037", image: "static/images/Chair/HB037.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB038", image: "static/images/Chair/HB038.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB039", image: "static/images/Chair/HB039.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB040", image: "static/images/Chair/HB040.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB041", image: "static/images/Chair/HB041.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB042", image: "static/images/Chair/HB042.png", category: "Chairs", subcategory: "Executive Chair" },

  { title: "HB044", image: "static/images/Chair/HB044.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB045", image: "static/images/Chair/HB045.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB046", image: "static/images/Chair/HB046.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB047", image: "static/images/Chair/HB047.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB048", image: "static/images/Chair/HB048.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB049", image: "static/images/Chair/HB049.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB050", image: "static/images/Chair/HB050.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB051", image: "static/images/Chair/HB051.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB052", image: "static/images/Chair/HB052.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB053", image: "static/images/Chair/HB053.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB054", image: "static/images/Chair/HB054.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB055", image: "static/images/Chair/HB055.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB056", image: "static/images/Chair/HB056.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "HB057", image: "static/images/Chair/HB057.png", category: "Chairs", subcategory: "Executive Chair" },
  { title: "VC001", image: "static/images/Chair/VC001.png", category: "Chairs", subcategory: "Visitor Chair" },
  { title: "VC002", image: "static/images/Chair/VC002.png", category: "Chairs", subcategory: "Visitor Chair" },
  { title: "VC003", image: "static/images/Chair/VC003.png", category: "Chairs", subcategory: "Visitor Chair" },
  { title: "VC004", image: "static/images/Chair/VC004.png", category: "Chairs", subcategory: "Visitor Chair" },
  { title: "VC005", image: "static/images/Chair/VC005.png", category: "Chairs", subcategory: "Visitor Chair" },
  { title: "VC006", image: "static/images/Chair/VC006.png", category: "Chairs", subcategory: "Visitor Chair" },
  { title: "VC007", image: "static/images/Chair/VC007.png", category: "Chairs", subcategory: "Visitor Chair" },
  { title: "VC008", image: "static/images/Chair/VC008.png", category: "Chairs", subcategory: "Visitor Chair" },
  { title: "VC009", image: "static/images/Chair/VC009.png", category: "Chairs", subcategory: "Visitor Chair" },
  { title: "VC010", image: "static/images/Chair/VC010.png", category: "Chairs", subcategory: "Visitor Chair" },
  { title: "CT001", image: "static/images/Table/CT001.png", category: "Tables", subcategory: "Computer Table" },
  { title: "CT002", image: "static/images/Table/CT002.png", category: "Tables", subcategory: "Computer Table" },
  { title: "CT003", image: "static/images/Table/CT003.png", category: "Tables", subcategory: "Computer Table" },
  { title: "CT004", image: "static/images/Table/CT004.png", category: "Tables", subcategory: "Computer Table" },
  { title: "CT005", image: "static/images/Table/CT005.png", category: "Tables", subcategory: "Computer Table" },
  { title: "CT006", image: "static/images/Table/CT006.png", category: "Tables", subcategory: "Computer Table" },
  { title: "CT007", image: "static/images/Table/CT007.png", category: "Tables", subcategory: "Computer Table" },
  { title: "CT008", image: "static/images/Table/CT008.png", category: "Tables", subcategory: "Computer Table" },
  { title: "ET001", image: "static/images/Table/ET001.png", category: "Tables", subcategory: "Executive Table" },
  { title: "ET002", image: "static/images/Table/ET002.png", category: "Tables", subcategory: "Executive Table" },
  { title: "ET003", image: "static/images/Table/ET003.png", category: "Tables", subcategory: "Executive Table" },
  { title: "ET004", image: "static/images/Table/ET004.png", category: "Tables", subcategory: "Executive Table" },
  { title: "ET005", image: "static/images/Table/ET005.png", category: "Tables", subcategory: "Executive Table" },
  { title: "ET006", image: "static/images/Table/ET006.png", category: "Tables", subcategory: "Executive Table" },
  { title: "OT001", image: "static/images/Table/OT001.png", category: "Tables", subcategory: "Office Table" },
  { title: "OT002", image: "static/images/Table/OT002.png", category: "Tables", subcategory: "Office Table" },
  { title: "OT003", image: "static/images/Table/OT003.png", category: "Tables", subcategory: "Office Table" },
  { title: "OT004", image: "static/images/Table/OT004.png", category: "Tables", subcategory: "Office Table" },
  { title: "OT005", image: "static/images/Table/OT005.png", category: "Tables", subcategory: "Office Table" },
  { title: "OT006", image: "static/images/Table/OT006.png", category: "Tables", subcategory: "Office Table" },
  { title: "OT007", image: "static/images/Table/OT007.png", category: "Tables", subcategory: "Office Table" },
  { title: "OT008", image: "static/images/Table/OT008.png", category: "Tables", subcategory: "Office Table" },
  { title: "SF001", image: "static/images/Sofa/SF001.png", category: "Sofa", subcategory: "Sofa" },
  { title: "SF002", image: "static/images/Sofa/SF002.png", category: "Sofa", subcategory: "Sofa" },
  { title: "SF003", image: "static/images/Sofa/SF003.png", category: "Sofa", subcategory: "Sofa" },
  { title: "SF004", image: "static/images/Sofa/SF004.png", category: "Sofa", subcategory: "Sofa" },
  { title: "SF005", image: "static/images/Sofa/SF005.png", category: "Sofa", subcategory: "Sofa" },
  { title: "SF006", image: "static/images/Sofa/SF006.png", category: "Sofa", subcategory: "Sofa" },
  { title: "SF007", image: "static/images/Sofa/SF007.png", category: "Sofa", subcategory: "Sofa" },
  { title: "SF008", image: "static/images/Sofa/SF008.png", category: "Sofa", subcategory: "Sofa" },
  { title: "SB001", image: "static/images/Bench/SB001.png", category: "Bench", subcategory: "School Bench" },
  { title: "SB002", image: "static/images/Bench/SB002.png", category: "Bench", subcategory: "School Bench" },
  { title: "SB003", image: "static/images/Bench/SB003.png", category: "Bench", subcategory: "School Bench" },
  { title: "SB004", image: "static/images/Bench/SB004.png", category: "Bench", subcategory: "School Bench" },
  { title: "SB005", image: "static/images/Bench/SB005.png", category: "Bench", subcategory: "School Bench" },
  { title: "SB006", image: "static/images/Bench/SB006.png", category: "Bench", subcategory: "School Bench" },
  { title: "SB007", image: "static/images/Bench/SB007.png", category: "Bench", subcategory: "School Bench" },
  { title: "SB008", image: "static/images/Bench/SB008.png", category: "Bench", subcategory: "School Bench" },
  { title: "SB009", image: "static/images/Bench/SB009.png", category: "Bench", subcategory: "School Bench" },
  { title: "SB010", image: "static/images/Bench/SB010.png", category: "Bench", subcategory: "School Bench" },
  { title: "VB001", image: "static/images/Bench/VB001.png", category: "Bench", subcategory: "Visitor Bench" },
  { title: "VB002", image: "static/images/Bench/VB002.png", category: "Bench", subcategory: "Visitor Bench" },
  { title: "VB003", image: "static/images/Bench/VB003.png", category: "Bench", subcategory: "Visitor Bench" },
  { title: "VB004", image: "static/images/Bench/VB004.png", category: "Bench", subcategory: "Visitor Bench" },
  { title: "VB005", image: "static/images/Bench/VB005.png", category: "Bench", subcategory: "Visitor Bench" },
  { title: "VB006", image: "static/images/Bench/VB006.png", category: "Bench", subcategory: "Visitor Bench" },
  { title: "WB001", image: "static/images/Bed/WB001.png", category: "Bed", subcategory: "Wooden Bed" },
  { title: "WB002", image: "static/images/Bed/WB002.png", category: "Bed", subcategory: "Wooden Bed" },
  { title: "WB003", image: "static/images/Bed/WB003.png", category: "Bed", subcategory: "Wooden Bed" },
  { title: "WB004", image: "static/images/Bed/WB004.png", category: "Bed", subcategory: "Wooden Bed" },
  { title: "WB005", image: "static/images/Bed/WB005.png", category: "Bed", subcategory: "Wooden Bed" },
  { title: "WB006", image: "static/images/Bed/WB006.png", category: "Bed", subcategory: "Wooden Bed" },
  { title: "WB007", image: "static/images/Bed/WB007.png", category: "Bed", subcategory: "Wooden Bed" },
  { title: "WB008", image: "static/images/Bed/WB008.png", category: "Bed", subcategory: "Wooden Bed" },
  { title: "WB009", image: "static/images/Bed/WB009.png", category: "Bed", subcategory: "Wooden Bed" },

];

const productList = document.getElementById("product-list");
const categoryFilters = document.getElementById("category-filters");
const subcategoryFilters = document.getElementById("subcategory-filters");

let selectedCategory = "Chairs"; // Default category
let selectedSubcategory = "Executive Chair";

// =============== RENDER CATEGORY BUTTONS ===============
const categories = [...new Set(products.map(p => p.category))];

categories.forEach(category => {
  const btn = document.createElement("button");
  btn.className = "btn btn-outline-dark me-2 mb-2";
  btn.innerText = category;

  // Highlight default category (Chairs)
  if (category === selectedCategory) {
    btn.classList.add("active");
    btn.classList.replace("btn-outline-dark", "btn-dark");
  }

  btn.onclick = () => {
    selectedCategory = category;
    selectedSubcategory = null;
    updateActiveCategoryButton(category);
    renderSubcategories(category);
    renderProducts(category, null);
  };

  categoryFilters.appendChild(btn);
});

// =============== UPDATE ACTIVE CATEGORY BUTTON COLOR ===============
function updateActiveCategoryButton(category) {
  const buttons = categoryFilters.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.classList.remove("active", "btn-dark");
    btn.classList.add("btn-outline-dark");
    if (btn.innerText === category) {
      btn.classList.add("active");
      btn.classList.replace("btn-outline-dark", "btn-dark");
    }
  });
}

// =============== RENDER SUBCATEGORY BUTTONS ===============
function renderSubcategories(category) {
  subcategoryFilters.innerHTML = "";

  const subcategories = [...new Set(
    products.filter(p => p.category === category).map(p => p.subcategory)
  )];

  subcategories.forEach(sub => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-secondary me-2 mb-2";
    btn.innerText = sub;

    btn.onclick = () => {
      selectedSubcategory = sub;
      updateActiveSubcategoryButton(sub);
      renderProducts(selectedCategory, selectedSubcategory);
    };

    subcategoryFilters.appendChild(btn);
  });

  // Automatically highlight first subcategory on load
  if (subcategories.length > 0) {
    const firstSub = subcategories[0];
    selectedSubcategory = firstSub;
    updateActiveSubcategoryButton(firstSub);
    renderProducts(selectedCategory, firstSub);
  }
}

// =============== UPDATE ACTIVE SUBCATEGORY BUTTON COLOR ===============
function updateActiveSubcategoryButton(sub) {
  const buttons = subcategoryFilters.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.classList.remove("active", "btn-secondary");
    btn.classList.add("btn-outline-secondary");
    if (btn.innerText === sub) {
      btn.classList.add("active");
      btn.classList.replace("btn-outline-secondary", "btn-secondary");
    }
  });
}

// =============== RENDER PRODUCTS ===============
function renderProducts(category, subcategory) {
  productList.innerHTML = "";

  let filtered = products;

  if (category)
    filtered = filtered.filter(p => p.category === category);

  if (subcategory)
    filtered = filtered.filter(p => p.subcategory === subcategory);

  if (filtered.length === 0) {
    productList.innerHTML = `<div class="col-12"><p>No products found.</p></div>`;
    return;
  }

  filtered.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-4 col-lg-3 mb-5";

    col.innerHTML = `
      <a class="product-item" href="#${product.title}">
        <img src="${product.image}" class="img-fluid product-thumbnail">
        <h3 class="product-title">${product.title}</h3>
        <p class="text-muted">${product.subcategory}</p>
        <span class="icon-cross">
          <img src="static/images/cross.svg" class="img-fluid">
        </span>
      </a>
    `;
    productList.appendChild(col);
  });

}



// =============== INITIAL LOAD ===============
renderSubcategories(selectedCategory);
