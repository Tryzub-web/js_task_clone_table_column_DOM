"use strict";
const rows = document.querySelectorAll("tr");
for (const row of rows){
    const clone = row.cells[1].cloneNode(true);
    row.cells[row.cells.length - 1].before(clone);
}

//# sourceMappingURL=index.f75de5e1.js.map
