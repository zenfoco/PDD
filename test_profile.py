import urllib.request
import re

url = "https://steamcommunity.com/profiles/76561198006837850/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')
        
        # Procura por menções a horas na página e mostra os arredores
        # Principalmente o bloco de showcase "Dota 2"
        match = re.search(r'appid":570.*?"hours_forever":"?([\d\.]+)("|\b)', html, re.IGNORECASE)
        if match:
            print("FOUND IN JSON:", match.group(1))
            
        # Procure também por texto raw tipo "3.216 hrs on record" ou algo próximo a Dota 2
        matches = re.finditer(r'([\d\.,]+)\s*Horas? de jogo', html, re.IGNORECASE)
        for m in matches:
            print("FOUND IN TEXT:", m.group(1))

        # Check total games variable in scripts
        games_match = re.search(r'rgGames\s*=\s*(\[.*?\]);', html)
        if games_match:
            print("FOUND rgGames IN MAIN PAGE")
            
except Exception as e:
    print(e)
