// REPLACE THESE with your actual Supabase details
const SUPABASE_URL = 'https://nnqulzbcqsvjvkjpgitx.supabase.co';
const SUPABASE_KEY = 'sb_secret_AXjAC8ugUtx2vzUcqb7tFw_nKZmiFiC';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function fetchData() {
    // 1. Fetch News
    const { data: news, newsError } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false });

    if (news) {
        const container = document.getElementById('news-container');
        container.innerHTML = news.map(item => `
            <div class="news-card">
                <h3>${item.title}</h3>
                <p>${item.content}</p>
                <small>${new Date(item.created_at).toLocaleDateString()}</small>
            </div>
        `).join('');
    }

    // 2. Fetch Leaderboard
    const { data: teams, teamError } = await supabase
        .from('teams')
        .select('*')
        .order('points', { ascending: false });

    if (teams) {
        const tableBody = document.getElementById('leaderboard-body');
        tableBody.innerHTML = teams.map((team, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>**${team.name}**</td>
                <td>${team.wins}</td>
                <td>${team.draws}</td>
                <td>${team.losses}</td>
                <td>${(team.wins * 3) + (team.draws * 1)}</td>
            </tr>
        `).join('');
    }
}

// Run the function when the page loads
fetchData();
