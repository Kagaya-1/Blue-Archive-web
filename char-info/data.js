// Data JSON
fetch("data.json").then((response) => response.json()).then((data) => {
    console.log(data.students);

    let datum = data.students;
    // Fungsi untuk membuat bintang tergantung rarity
    function createStars(count) {
      let stars = "";
      for (let i = 0; i < count; i++) {
        stars += '<img src="../assets/stats-icon/rarity/stars.png" alt="Star" width="24" height="24">';
      }
      if (count <= 3)return stars;
      
    }

    function rarityLabel(x){
      let label = ""; 
      if(x === "limited"){
        label = "<h5>Limited</h5>";
      } 
      else if(x === "fest"){
        label = "<h5>Fest</h5>";
      }
      else if(x === "warfare"){
        label = "<h5>Warfare</h5>";
      }
      return label;
    }
  
    function positionImg(position){
      const backImg = "<img src='../assets/stats-icon/position/back.png' width='60px'></img>";
      const middleImg = "<img src='../assets/stats-icon/position/middle.png' width='60px'></img>";
      const frontImg = "<img src='../assets/stats-icon/position/front.png' width='60px'></img>";
      let img = "";
      switch (position) {
        case "back":
          img = backImg;
        break;
        case "middle":
          img = middleImg;
        break;
        case "front":
          img = frontImg;
        break;
        default: 
        break;
      }
      return img;
    }
  
    function firstCharCapitalize(str) {
      if (!str) return "";
      else if (str === "srt") return str.toUpperCase();
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    // Fungsi untuk membuat tabel campuran
    function createMixedTable(datum) {
      const table = document.createElement("table");
  
      // Header tabel
      const thead = document.createElement("thead");
      thead.innerHTML = `
        <tr>
          <th style='width: 1rem;'>Image</th>
          <th>Name</th>
          <th>School</th>
          <th style="text-align: center; width: 1px;">Rarity</th>
          <th>Role</th>
          <th>Class</th>
          <th>Position</th>
          <th>ATK Type</th>
        </tr>
      `;
      table.appendChild(thead);
  
      // Isi tabel
      const tbody = document.createElement("tbody");
      datum.forEach((item) => {
        const row = document.createElement("tr");
        row.classList.add(item.role.toLowerCase());
        row.classList.add(item.atkType.toLowerCase());
        row.innerHTML = `
          <td style="text-align: center;"><image src='${item.img}'style="border-radius: 5px; width: 3rem;" ></image></td>
          <td>${firstCharCapitalize(item.name)}</td>
          <td style="text-align: center;">${firstCharCapitalize(item.school)}</td>
          <td style="text-align: center; padding: 0.5rem ;">${createStars(item.rarity)} ${rarityLabel(item.gacha)}</td>
          <td class="role" style="text-align: center; padding: 1rem;">${firstCharCapitalize(item.role)}</td>
          <td>${firstCharCapitalize(item.class)}</td>
          <td style="text-align: center;">${positionImg(item.position)}</td>
          <td class="atk-type" style="text-align: center;">${firstCharCapitalize(item.atkType)}</td>
        `;
        tbody.appendChild(row);
      });
  
      table.appendChild(tbody);
      return table;
    }
  
    // Render tabel
    const tableContainer = document.getElementById("students-container");
    const mixedTable = createMixedTable(datum);
    tableContainer.appendChild(mixedTable);
  }).catch((error) => {
    console.error("Error:", error);
  });