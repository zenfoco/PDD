import urllib.request
import re
import json

urls = [
    "https://steamcommunity.com/profiles/76561198280601236/",
    "https://steamcommunity.com/id/milagre144/",
    "https://steamcommunity.com/profiles/76561198933475551/",
    "https://steamcommunity.com/id/zerocool25/",
    "https://steamcommunity.com/profiles/76561199474581458/",
    "https://steamcommunity.com/id/Ackros-Kleine-Koning-Munns/",
    "https://steamcommunity.com/profiles/76561199086804148/",
    "https://steamcommunity.com/profiles/76561198095736030/",
    "https://steamcommunity.com/profiles/76561198973941713/",
    "https://steamcommunity.com/profiles/76561198006837850/"
]

req_headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Accept-Language': 'en-US,en;q=0.9'
}

for base_url in urls:
    if not base_url.endswith('/'): base_url += '/'
    games_url = base_url + "games/?tab=all"
    try:
        req = urllib.request.Request(games_url, headers=req_headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8')
            match = re.search(r'var rgGames =\s*(\[.*?\]);', html)
            if match:
                games_json = match.group(1)
                games = json.loads(games_json)
                dota = next((g for g in games if g.get('appid') == 570), None)
                if dota:
                    hours = dota.get('hours_forever', '0')
                    print(f"{base_url}: {hours} horas")
                else:
                    print(f"{base_url}: Dota 2 Not Found")
            else:
                print(f"{base_url}: Privado (rgGames missing)")
    except Exception as e:
        print(f"{base_url}: Error - {e}")
