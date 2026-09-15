with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

prompt_start = '        const promptText = `'
prompt_end = '        `;'

s = html.find(prompt_start)
e = html.find(prompt_end, s)

if s != -1 and e != -1:
    old_prompt = html[s:e+len(prompt_end)]
    
    new_prompt = '''        const promptText = `
You are a master garage door engineering inspector with 25 years of field experience identifying doors across Canada and the US.
${referenceIntro}
You are receiving 1 or 2 photographs of an overhead garage door to identify.
- Image 1 is typically the Front Face (panel stamping, woodgrain/driftwood finish, window frame profiles).
- Image 2 (if provided) is the Side Profile, Joint Geometry, End Stile, or Factory Stamp/Sticker.

You have access to a structured JSON database of vision diagnostic features for all 10 major North American manufacturers. 
Use this data as a definitive diagnostic matrix to execute a process of elimination (cascading filter logic).

STAGE 1 -- JOINT GEOMETRY & END STILES FIRST (the real fingerprint):
Woodgrain and paint finishes are cosmetic and reused across brands -- never let finish color alone decide the manufacturer. 
If Image 2 (side profile / joint / end stile) is provided, use it FIRST to narrow the candidates by joint shape and end stile material.
Cross-reference the visual evidence in Image 2 against the 'joint_profile' and 'end_stiles_and_caps' attributes in the provided JSON schema.
- For example, if you see a pinch-resistant joint, eliminate Garaga, Haas, and Steel-Craft.
- If you see wood end blocks, eliminate manufacturers that use galvanized steel.

STAGE 2 -- MODEL & FINISH (only after the manufacturer is narrowed):
Once the manufacturer is confidently identified or narrowed down to a few candidates, use Image 1 (front face) and the 'panel_construction', 'face_texture_and_grooving', and 'factory_color_palette' attributes to pick the specific model/series.

Here is the JSON reference matrix of all models:
${JSON.stringify(DOOR_DATABASE.map(d => ({ id: d.id, manufacturer: d.manufacturer, model: d.model_name, vision_features: d.vision_diagnostic_features })), null, 2)}

Return your final answer in the requested format.
`;'''
    html = html[:s] + new_prompt + html[e+len(prompt_end):]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print('Replaced prompt successfully.')
else:
    print('Could not find prompt boundaries.')
