// EDIT THIS DATA TO UPDATE YOUR SITE
const newsData = [
    { title: "Tournament Live!", info: "Matches start this Friday. Be on time!" },
    { title: "Rules Update", info: "Each half is 15 minutes. No offsides." }
];

const teamData = [
    { 
        name: "ILYAS MATH AGAY", 
        wins: 3, 
        draws: 0,
        members: ["Erzat Abi", "Abzal 9A", "Nurarys 10B", "Abilmansur 8B", "Ghani 8B", "Sultanbi 10A", "Ermakhan 8B"] 
    },
    { 
        name: "ERNUR AGAY", 
        wins: 1, 
        draws: 0,
        members: ["Nurbek Abi", "Akzhigit", "Ernur 10A", "Nuraly 10A", "Elzhan 9A", "Erbolat 9A", "Adil 8A"] 
    },
    { 
        name: "ARZU AGAY", 
        wins: 2, 
        draws: 0,
        members: ["Almat Abi", "Batyrkhan 10B", "Elzhan 8A", "Shyngys 10A", "Bakdaulet 9B", "Adilzhan 9B", "Aidmukhamed 9A"] 
    },
    { 
        name: "DANIYAR FOOTBALL AGAY", 
        wins: 5, 
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
    }
];

// Fill Leaderboard (Highest Points First)
    const tableBody = document.getElementById('leaderboard-body');
    
    // This sorts by the total points calculation
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
                <td>${team.draws || 0}</td> <td>${totalPoints}</td>
            </tr>`;
    });
document.addEventListener('DOMContentLoaded', init);
