// EDIT THIS DATA TO UPDATE YOUR SITE
const newsData = [
    { title: "Tournament Live!", info: "Matches start 20.04.2026. After Etud. Be on time!" },
    { title: "Rules Update", info: "Each half is 6 minutes. No offsides. Tackles are permitted, but aggressive behaviour is not. Only the captain of a team can argue with the referee." }
];

const teamData = [
    { 
        name: "ILYAS MATH AGAY", 
        wins: 0, 
        draws: 0,
        members: ["Erzat Abi", "Abzal 9A", "Nurarys 10B", "Abilmansur 8B", "Ghani 8B", "Sultanbi 10A", "Ermakhan 8B"] 
    },
    { 
        name: "ERNUR AGAY", 
        wins: 0, 
        draws: 0,
        members: ["Nurbek Abi", "Akzhigit", "Ernur 10A", "Nuraly 10A", "Elzhan 9A", "Erbolat 9A", "Adil 8A"] 
    },
    { 
        name: "ARZU AGAY", 
        wins: 0, 
        draws: 0,
        members: ["Almat Abi", "Batyrkhan 10B", "Elzhan 8A", "Shyngys 10A", "Bakdaulet 9B", "Adilzhan 9B", "Aidmukhamed 9A"] 
    },
    { 
        name: "DANIYAR FOOTBALL AGAY", 
        wins: 0, 
        draws: 0,
        members: ["Rinat Abi", "Bibarys 9A", "Orazaly 9A", "Orynbasarov 10B", "Nuraly E 8A", "Olzhas 10B", "Bekzat 9A"] 
    },
    { 
        name: "NURALY AGAY", 
        wins: 0, 
        draws: 0,
        members: ["Birzhan Abi", "Maksat 9B", "Alikhan 8B", "Bekzat 8B", "Erasyl 8A", "Alisher 10A", "Bekarys 9A"] 
    },
    { 
        name: "ILYAS INFO AGAY", 
        wins: 0, 
        draws: 0,
        members: ["Aidar Abi", "Ersultan 10B", "Arnur 9B", "Aldiyar 9B", "Bekbolat 9B", "Mansur 9B", "Alikhan Talantuly 8A"] 
    },
     { 
        name: "BEKZAT AGAY", 
        wins: 0, 
        draws: 0,
        members: ["Nurbolat Abi", "Erzhan 10A", "Alikhan E 10B", "Eraly 8B", "Alikhan M 8A", "Bekbolat 10B", "Nurmukhamed 8A"] 
    },
     { 
        name: "DANIYAR CHEM AGAY", 
        wins: 0, 
        draws: 0,
        members: ["Erasyl abi", "Bekzhan 10B", "Sultanali 8A", "Nursultan 10A", "Alikhan T 8B", "Zhomart 8B", "Arnur 10A"] 
    }
];

function init() {
    // 1. Fill News
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = ''; // Clears the list first
    newsData.forEach(item => {
        newsList.innerHTML += `<div class="news-item"><strong>${item.title}</strong><p>${item.info}</p></div>`;
    });

    // 2. Fill Leaderboard
    const tableBody = document.getElementById('leaderboard-body');
    tableBody.innerHTML = ''; // Clears the table first

    const sortedTeams = [...teamData].sort((a, b) => {
        const pointsA = (a.wins * 3) + (a.draws || 0);
        const pointsB = (b.wins * 3) + (b.draws || 0);
        return pointsB - pointsA;
    });

    sortedTeams.forEach(team => {
        const totalPoints = (team.wins * 3) + (team.draws || 0);
        tableBody.innerHTML += `
            <tr>
                <td>${team.name}</td>
                <td>${team.wins}</td>
                <td>${team.draws || 0}</td> 
                <td>${totalPoints}</td>
            </tr>`;
    });

    // 3. Fill Team Rosters
    const teamGrid = document.getElementById('teams-grid');
    teamGrid.innerHTML = ''; // Clears the grid first
    teamData.forEach(team => {
        teamGrid.innerHTML += `
            <div class="team-card">
                <h3>${team.name}</h3>
                <div class="member-list">${team.members.join('<br>')}</div>
            </div>`;
    });
}

// This makes the whole thing run!
document.addEventListener('DOMContentLoaded', init);
