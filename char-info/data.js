// Data JSON
fetch("data.json").then((response) => response.json()).then((data) => {
    console.log(data);
    // Fungsi untuk membuat bintang tergantung rarity
    function createStars(count) {
      let stars = "";
      for (let i = 0; i < count; i++) {
        stars +=
          '<img src="../assets/stats-icon/rarity/stars.png" alt="Star" width="20" height="20"> ';
      }
      if (count <= 6)return stars;
      
    }

    function rarityLabel(count){
      let label = ""; 
      switch (count) {
        case 4:
          label = "<h5>Limited</h5>";
        break;
      
        default:
          break;
      }
      return label;
    }
  
    function positionImg(position){
      const backImg = "<img src='../assets/stats-icon/position/back.png'></img>";
      const middleImg = "<img src='../assets/stats-icon/position/middle.png'></img>";
      const frontImg = "<img src='../assets/stats-icon/position/front.png'></img>";
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
    function createMixedTable(data) {
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
      data.forEach((item) => {
        const row = document.createElement("tr");
        row.classList.add(item.role.toLowerCase());
        row.classList.add(item.atkType.toLowerCase());
        row.innerHTML = `
          <td style="text-align: center;"><image src='${item.img}'style="border-radius: 5px; width: 3rem;" ></image></td>
          <td>${firstCharCapitalize(item.name)}</td>
          <td style="text-align: center;">${firstCharCapitalize(item.school)}</td>
          <td style="text-align: center; padding: 0.5rem ;">${createStars(item.rarity)} <hr> ${rarityLabel(item.rarity)}</td>
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
    const mixedTable = createMixedTable(data);
    tableContainer.appendChild(mixedTable);
  }).catch((error) => {
    console.error("Error:", error);
  });