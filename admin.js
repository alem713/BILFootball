const SUPABASE_URL = 'https://your-project-url.supabase.co';
const SUPABASE_KEY = 'sb_publishable_ChmcMuJbutCrEd0XTMMN8w_TRKsyl5x';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 1. Post News to the Brain
async function postNews() {
    const title = document.getElementById('news-title').value;
    const content = document.getElementById('news-content').value;

    const { error } = await supabase
        .from('news')
        .insert([{ title, content }]);

    if (error) alert("Error posting news!");
    else alert("News posted successfully!");
}

// 2. Load Teams into the dropdown
async function loadTeams() {
    const { data: teams } = await supabase.from('Teams').select('*');
    const select = document.getElementById('team-select');
    
    select.innerHTML = teams.map(t => `<option value="${t.Name}">${t.Name}</option>`).join('');
}

// 3. Update Team Stats
async function updateStats() {
    const teamName = document.getElementById('team-select').value;
    const wins = document.getElementById('edit-wins').value;
    const draws = document.getElementById('edit-draws').value;
    const losses = document.getElementById('edit-losses').value;

    const { error } = await supabase
        .from('Teams')
        .update({ Wins: wins, draws: draws, Losses: losses })
        .eq('Name', teamName);

    if (error) alert("Update failed!");
    else alert("Stats updated!");
}

loadTeams();
