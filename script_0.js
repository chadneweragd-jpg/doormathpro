
    // Comprehensive Standard Garage Door Spring Wire Database (ASTM A229 / DASMA)
    const STANDARD_SPRING_WIRES = [
    {
        "wire": 0.192,
        "name": ".192",
        "color": "Orange",
        "coils20": 3.84,
        "dashes": "3-13/16\""
    },
    {
        "wire": 0.2,
        "name": ".200",
        "color": "Custom",
        "coils20": 4.0,
        "dashes": "4\""
    },
    {
        "wire": 0.207,
        "name": ".207",
        "color": "Yellow",
        "coils20": 4.14,
        "dashes": "4-1/8\""
    },
    {
        "wire": 0.2187,
        "name": ".218",
        "color": "White",
        "coils20": 4.375,
        "dashes": "4-3/8\""
    },
    {
        "wire": 0.2253,
        "name": ".225",
        "color": "Red",
        "coils20": 4.506,
        "dashes": "4-1/2\""
    },
    {
        "wire": 0.234,
        "name": ".234",
        "color": "Brown",
        "coils20": 4.68,
        "dashes": "4-11/16\""
    },
    {
        "wire": 0.2437,
        "name": ".243",
        "color": "Green",
        "coils20": 4.874,
        "dashes": "4-7/8\""
    },
    {
        "wire": 0.25,
        "name": ".250",
        "color": "Gold",
        "coils20": 5.0,
        "dashes": "5\""
    },
    {
        "wire": 0.2625,
        "name": ".262",
        "color": "Blue",
        "coils20": 5.25,
        "dashes": "5-1/4\""
    },
    {
        "wire": 0.273,
        "name": ".273",
        "color": "Black",
        "coils20": 5.46,
        "dashes": "5-7/16\""
    },
    {
        "wire": 0.283,
        "name": ".283",
        "color": "Orange",
        "coils20": 5.66,
        "dashes": "5-11/16\""
    },
    {
        "wire": 0.289,
        "name": ".289",
        "color": "Custom",
        "coils20": 5.78,
        "dashes": "5-3/4\""
    },
    {
        "wire": 0.295,
        "name": ".295",
        "color": "Yellow",
        "coils20": 5.9,
        "dashes": "5-7/8\""
    },
    {
        "wire": 0.3065,
        "name": ".306",
        "color": "White",
        "coils20": 6.13,
        "dashes": "6-1/8\""
    },
    {
        "wire": 0.3125,
        "name": ".312",
        "color": "Red",
        "coils20": 6.25,
        "dashes": "6-1/4\""
    },
    {
        "wire": 0.325,
        "name": ".325",
        "color": "Custom",
        "coils20": 6.5,
        "dashes": "6-1/2\""
    },
    {
        "wire": 0.331,
        "name": ".331",
        "color": "Green",
        "coils20": 6.62,
        "dashes": "6-5/8\""
    },
    {
        "wire": 0.3437,
        "name": ".343",
        "color": "Blue",
        "coils20": 6.874,
        "dashes": "6-7/8\""
    },
    {
        "wire": 0.3625,
        "name": ".362",
        "color": "Black",
        "coils20": 7.25,
        "dashes": "7-1/4\""
    },
    {
        "wire": 0.375,
        "name": ".375",
        "color": "Orange",
        "coils20": 7.5,
        "dashes": "7-1/2\""
    },
    {
        "wire": 0.39,
        "name": ".390",
        "color": "Yellow",
        "coils20": 7.8,
        "dashes": "7-13/16\""
    },
    {
        "wire": 0.3937,
        "name": ".393",
        "color": "Custom",
        "coils20": 7.874,
        "dashes": "7-7/8\""
    },
    {
        "wire": 0.4062,
        "name": ".406",
        "color": "White",
        "coils20": 8.124,
        "dashes": "8-1/8\""
    },
    {
        "wire": 0.4375,
        "name": ".437",
        "color": "Heavy",
        "coils20": 8.75,
        "dashes": "8-3/4\""
    },
    {
        "wire": 0.5,
        "name": ".500",
        "color": "Heavy",
        "coils20": 10.0,
        "dashes": "10\""
    }
];

    // ASTM A229 Modulus of Elasticity in Bending
    const E_MODULUS = 28500000.0;

    // Standard Wire Gauges and Colors
    //
    // BUGFIX (Sept 2026 audit): WIRE_SPECS used to be a second, hand-maintained
    // table that was built separately from STANDARD_SPRING_WIRES above. It had
    // drifted out of sync with it -- disagreeing on the 20-coil length for
    // several gauges (rounding), and missing SIX wire gauges entirely: .200,
    // .289, .325, .393, and critically the two heaviest gauges, .437" and
    // .500" ("Heavy"). Because this table backs the 20-Coil Wire Size
    // Identifier (now the app's only wire-ID method since Spring Scan was
    // removed), a real .437"/.500" spring would silently get identified as a
    // .406" -- an under-rated wire size feeding straight into the spring
    // engineering math. Fix: derive WIRE_SPECS directly from
    // STANDARD_SPRING_WIRES so there is exactly ONE source of truth for wire
    // gauge data and the two tables can never drift apart again.
    const WIRE_SPECS = STANDARD_SPRING_WIRES.map(w => ({
      wire: w.wire,
      name: w.name,
      color: w.color,
      coils20: w.coils20,
      dashes: w.dashes
    }));

    // Comprehensive Reverse-Engineered Drum Database
    const DRUM_SPECS = {
      "400-8": {
        name: "OMI 400-8 (Standard Lift)",
        type: "Standard Lift",
        radius: 1.95,
        circumference: 12.56,
        turnsPerFt: 1.0,
        deadTurns: 0.6,
        maxHt: '8ft 1in',
        cable: '1/8in',
        crossRef: "Apco 400-8, Canimex 400-8, DNS 400-8, SSC 400-8",
        desc: "Most widely installed residential standard lift drum"
      },
      "400-12": {
        name: "OMI 400-12 (Standard Lift 12ft)",
        type: "Standard Lift",
        radius: 1.95,
        circumference: 12.56,
        turnsPerFt: 1.0,
        deadTurns: 0.7,
        maxHt: '12ft 1in',
        cable: '1/8in or 5/32in',
        crossRef: "Apco 400-12, Canimex 400-12, DNS 400-12, SSC 400-12",
        desc: "Standard commercial & high residential doors up to 12ft"
      },
      "400-18": {
        name: "Canimex 400-18 (Standard Lift 18ft)",
        type: "Standard Lift",
        radius: 1.95,
        circumference: 12.56,
        turnsPerFt: 1.0,
        deadTurns: 0.8,
        maxHt: '18ft 1in',
        cable: '5/32in',
        crossRef: "Canimex TF 400-18, Apco 400-18",
        desc: "Tall commercial standard lift installations"
      },
      "5250": {
        name: "OMI 5250 (Commercial Heavy)",
        type: "Standard Lift",
        radius: 2.50,
        circumference: 16.50,
        turnsPerFt: 0.8,
        deadTurns: 0.8,
        maxHt: '18ft 1in',
        cable: '3/16in',
        crossRef: "Apco 5250, Canimex 5250, DNS 5250, SSC 5250",
        desc: "Heavy commercial doors exceeding 800-1000+ lbs"
      },
      "800-32": {
        name: "Industrial 800-32 (Large Bay)",
        type: "Standard Lift",
        radius: 3.85,
        circumference: 25.12,
        turnsPerFt: 0.5,
        deadTurns: 1.0,
        maxHt: '32ft 0in',
        cable: '1/4in',
        crossRef: "Apco 800-32, OMI 800-32",
        desc: "Massive industrial warehouse doors"
      },
      "54-HL": {
        name: 'High Lift 54 (Up to 54in HL)',
        type: "High Lift",
        radius: 2.10,
        circumference: 13.20,
        turnsPerFt: 1.05,
        deadTurns: 0.7,
        maxHt: '14ft (54in HL)',
        cable: '1/8in or 5/32in',
        crossRef: "Apco 5250-54, DNS 54, OMI 54, SSC 54-HL",
        desc: "Common residential & shop car-lift ceiling conversion"
      },
      "120-HL": {
        name: 'High Lift 120 (Up to 120in HL)',
        type: "High Lift",
        radius: 2.75,
        circumference: 17.20,
        turnsPerFt: 0.9,
        deadTurns: 0.8,
        maxHt: '16ft (120in HL)',
        cable: '3/16in',
        crossRef: "Apco 5750-120, OMI 120, DNS 120, SSC 120-HL, M146-3050",
        desc: "Commercial high lift buildings with ceiling heights up to 22ft"
      },
      "164-HL": {
        name: 'High Lift 164 (Up to 164in HL)',
        type: "High Lift",
        radius: 3.20,
        circumference: 19.50,
        turnsPerFt: 0.85,
        deadTurns: 0.9,
        maxHt: '18ft (164in HL)',
        cable: '3/16in',
        crossRef: "Apco 164, OMI 164, DNS 164",
        desc: "Extreme high clearance agricultural & industrial shops"
      },
      "220-HL": {
        name: 'High Lift 220 (Up to 220in HL)',
        type: "High Lift",
        radius: 3.60,
        circumference: 22.00,
        turnsPerFt: 0.8,
        deadTurns: 1.0,
        maxHt: '22ft (220in HL)',
        cable: '1/4in',
        crossRef: "Apco 220, OMI 220, SSC 220-HL",
        desc: "Heavy manufacturing and truck repair bays"
      },
      "VL-11": {
        name: "Vertical Lift 11 (Full Vertical 11ft)",
        type: "Vertical Lift",
        radius: 2.30,
        circumference: 14.50,
        turnsPerFt: 1.1,
        deadTurns: 0.5,
        maxHt: '11ft 0in',
        cable: '3/16in',
        crossRef: "OMI VL-11, Canimex VL-11, Apco 850-11, SSC VL-11",
        desc: "Tapered spiral drum for straight vertical wall track"
      },
      "VL-18": {
        name: "Vertical Lift 18 (Full Vertical 18ft)",
        type: "Vertical Lift",
        radius: 2.85,
        circumference: 18.00,
        turnsPerFt: 0.95,
        deadTurns: 0.6,
        maxHt: '18ft 0in',
        cable: '3/16in or 1/4in',
        crossRef: "OMI VL-18, Canimex VL-18, Apco 1100-18, SSC VL-18",
        desc: "Commercial loading docks with straight vertical wall rise"
      },
      "VL-28": {
        name: "Vertical Lift 28 (Full Vertical 28ft)",
        type: "Vertical Lift",
        radius: 3.50,
        circumference: 22.50,
        turnsPerFt: 0.8,
        deadTurns: 0.8,
        maxHt: '28ft 0in',
        cable: '1/4in',
        crossRef: "OMI VL-28, Canimex VL-28, Apco 1400-28",
        desc: "Overhead crane bays and heavy industrial aircraft doors"
      }
    };

    // State Variables
    let oldSpringCount = 1;
    let targetSpringCount = 2;
    let selectedReplacement = null;

    // Calculate Single Spring IPPT
    function calcSingleIPPT(wire, id, length) {
      const meanDiameter = id + wire;
      return (E_MODULUS * Math.pow(wire, 5)) / (10.8 * meanDiameter * length);
    }

    // Estimate Cycle Life
    function estimateCycles(wire, id, length, ippt, turns = 7.5) {
      const maxMoment = ippt * turns;
      const bendingStress = (32 * maxMoment) / (Math.PI * Math.pow(wire, 3));
      const tensileStrength = 275000 - 280000 * wire;
      const ratio = bendingStress / tensileStrength;
      
      if (ratio < 0.65) return 50000;
      if (ratio < 0.73) return 25000;
      if (ratio < 0.82) return 15000;
      if (ratio < 0.90) return 10000;
      return 7500;
    }

    // TAB 1: Run Truck Stock Matcher
    function runTruckMatch() {
      const wire = parseFloat(document.getElementById('oldWireSelect').value);
      const id = parseFloat(document.getElementById('oldIDSelect').value);
      const length = parseFloat(document.getElementById('oldLengthInput').value);

      document.getElementById('oldLengthDisplay').innerText = length.toFixed(1) + '"';
      const wireObj = WIRE_SPECS.find(w => Math.abs(w.wire - wire) < 0.001);
      document.getElementById('oldWireColorBadge').innerText = wireObj ? wireObj.color : '';

      const singleIPPT = calcSingleIPPT(wire, id, length);
      const totalSystemIPPT = singleIPPT * oldSpringCount;

      document.getElementById('oldSingleIPPT').innerText = singleIPPT.toFixed(1);
      document.getElementById('oldTotalIPPT').innerText = totalSystemIPPT.toFixed(1);
      
      const oldCycleEst = estimateCycles(wire, id, length, singleIPPT);
      document.getElementById('oldCycles').innerText = "~" + oldCycleEst.toLocaleString();

      // FEATURE: Compute Rated Lifting Capacity live with clear assumptions
      const truckHeight = parseFloat(document.getElementById('truckDoorHeight') ? document.getElementById('truckDoorHeight').value : 7) || 7;
      const truckDrum = document.getElementById('truckDrumModel') ? document.getElementById('truckDrumModel').value : "400-8";
      const drumInfo = DRUM_SPECS[truckDrum] || DRUM_SPECS["400-8"];
      const turns = (truckHeight * drumInfo.turnsPerFt) + drumInfo.deadTurns;
      const equivalentWeight = Math.round((totalSystemIPPT * turns) / drumInfo.radius);

      const capEl = document.getElementById('ratedLiftingCapacity');
      const capAssumpEl = document.getElementById('ratedCapacityAssumption');
      if (capEl) capEl.innerText = `~${equivalentWeight} lbs`;
      if (capAssumpEl) capAssumpEl.innerText = `(at ${truckHeight}'0" height, ${truckDrum} drum)`;

      // Required IPPT per replacement spring
      const targetIPPTPerSpring = totalSystemIPPT / targetSpringCount;

      // Filter settings
      const show175 = document.getElementById('filterID175').checked;
      const show200 = document.getElementById('filterID200').checked;
      const show262 = document.getElementById('filterID262').checked;
      const highCycleOnly = document.getElementById('filterHighCycleOnly').checked;

      const show375 = document.getElementById('filterID375') ? document.getElementById('filterID375').checked : false;
      const targetIDs = [];
      if (show175) targetIDs.push(1.75);
      if (show200) targetIDs.push(2.00);
      if (show262) targetIDs.push(2.625);
      if (show375) targetIDs.push(3.75);

      const matches = [];

      WIRE_SPECS.forEach(w => {
        targetIDs.forEach(tid => {
          // Calculate length required to hit targetIPPTPerSpring
          // L = (E * d^5) / (10.8 * (ID + d) * IPPT)
          const targetL = (E_MODULUS * Math.pow(w.wire, 5)) / (10.8 * (tid + w.wire) * targetIPPTPerSpring);

          // Only keep practical spring lengths between 18" and 60"
          if (targetL >= 18.0 && targetL <= 58.0) {
            const cycles = estimateCycles(w.wire, tid, targetL, targetIPPTPerSpring);
            if (!highCycleOnly || cycles >= 25000) {
              matches.push({
                wire: w.wire,
                name: w.name,
                color: w.color,
                id: tid,
                length: targetL,
                ippt: targetIPPTPerSpring,
                cycles: cycles
              });
            }
          }
        });
      });

      // Sort by practicality (closest to standard 28-36 inch length)
      matches.sort((a, b) => Math.abs(a.length - 32) - Math.abs(b.length - 32));

      document.getElementById('matchCountBadge').innerText = matches.length + " Matches";

      const tbody = document.getElementById('truckMatrixBody');
      tbody.innerHTML = '';

      if (matches.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 20px; color: var(--text-dim);">No truck stock configurations fit this exact window. Try adjusting filters or ID options.</td></tr>';
        return;
      }

      matches.forEach((m, idx) => {
        const tr = document.createElement('tr');
        if (idx === 0) tr.classList.add('selected');

        let cycleBadge = '<span class="badge gray">10k Std</span>';
        if (m.cycles >= 50000) {
          cycleBadge = '<span class="badge purple">50k+ Com</span>';
        } else if (m.cycles >= 25000) {
          cycleBadge = '<span class="badge green">25k High</span>';
        } else if (m.cycles >= 15000) {
          cycleBadge = '<span class="badge amber">15k Plus</span>';
        }

        tr.innerHTML = `
          <td><span class="mono font-bold">${m.name}</span> <span style="font-size:11px; color:var(--text-muted);">(${m.color})</span></td>
          <td>${m.id === 2.625 ? '2-5/8"' : m.id === 1.75 ? '1-3/4"' : '2.0"'}</td>
          <td class="mono font-bold" style="color:var(--accent);">${m.length.toFixed(1)}"</td>
          <td class="mono">${m.ippt.toFixed(1)}</td>
          <td>${cycleBadge}</td>
          <td><button class="btn-action" style="padding:4px 8px; font-size:11px;" onclick="selectReplacement(${m.wire}, ${m.id}, ${m.length.toFixed(1)}, ${m.cycles}, '${m.name}', ${targetSpringCount}, this)">Select</button></td>
        `;
        tbody.appendChild(tr);
      });

      // Default select the first row
      if (matches.length > 0 && !selectedReplacement) {
        const first = matches[0];
        selectReplacement(first.wire, first.id, first.length.toFixed(1), first.cycles, first.name, targetSpringCount);
      }
    }


    function selectDuplexSpec(outerWire, outerID, innerWire, innerID, length, totalIPPT) {
      document.getElementById('printSpringSpecs').innerHTML = `
        (2) Duplex Assemblies: Outer ${outerWire} x 3-3/4" ID + Inner ${innerWire} x 2-5/8" ID x ${length}" Cut Length (Opposite Hand Wound)
      `;
      document.getElementById('printSpringCycle').innerText = `Rated Cycles: ~25,000+ cycles | Combined Duplex IPPT: ${totalIPPT} per assembly`;
    }

    function selectReplacement(wire, id, len, cycles, name, count, btnEl) {
      selectedReplacement = { wire, id, len, cycles, name, count };
      const idStr = id === 2.625 ? '2-5/8"' : id === 3.75 ? '3-3/4"' : id === 1.75 ? '1-3/4"' : '2.0"';
      
      // Update print spec sheet preview
      document.getElementById('printSpringSpecs').innerText = `(${count}) Springs: ${name} Wire x ${idStr} ID x ${len}" Cut Length`;
      document.getElementById('printSpringCycle').innerText = `Rated Cycles: ~${cycles.toLocaleString()} cycles | Total Balanced System`;

      // Update Rated Lifting Capacity tile for this replacement candidate
      const truckHeight = parseFloat(document.getElementById('truckDoorHeight') ? document.getElementById('truckDoorHeight').value : 7) || 7;
      const truckDrum = document.getElementById('truckDrumModel') ? document.getElementById('truckDrumModel').value : "400-8";
      const drumInfo = DRUM_SPECS[truckDrum] || DRUM_SPECS["400-8"];
      const turns = (truckHeight * drumInfo.turnsPerFt) + drumInfo.deadTurns;
      const candSingleIPPT = calcSingleIPPT(wire, id, len);
      const candTotalIPPT = candSingleIPPT * count;
      const candWeight = Math.round((candTotalIPPT * turns) / drumInfo.radius);

      const capEl = document.getElementById('ratedLiftingCapacity');
      const capAssumpEl = document.getElementById('ratedCapacityAssumption');
      if (capEl) capEl.innerText = `~${candWeight} lbs`;
      if (capAssumpEl) capAssumpEl.innerText = `(candidate: (${count}) ${name} at ${truckHeight}'0", ${truckDrum})`;

      // Visual row selection in table
      document.querySelectorAll('#truckMatrixBody tr').forEach(tr => tr.classList.remove('selected'));
      document.querySelectorAll('#truckMatrixBody button').forEach(b => {
        b.innerText = 'Select';
        b.style.background = '';
        b.style.color = '';
      });

      if (btnEl) {
        const row = btnEl.closest('tr');
        if (row) row.classList.add('selected');
        btnEl.innerText = 'Selected ✓';
        btnEl.style.background = '#10b981';
        btnEl.style.color = '#000';
      }

      // Show alert confirmation banner
      const banner = document.getElementById('selectedNotificationBanner');
      if (banner) {
        banner.style.display = 'flex';
        document.getElementById('bannerSelectedText').innerText = `(${count}) ${name} x ${idStr} x ${len}" (~${cycles.toLocaleString()} cycles) → ~${candWeight} lbs lift`;
      }
    }

    function setOldSpringCount(cnt) {
      oldSpringCount = cnt;
      const btns = document.getElementById('oldSpringCountGroup').querySelectorAll('.segment-btn');
      btns[0].classList.toggle('active', cnt === 1);
      btns[1].classList.toggle('active', cnt === 2);
      runTruckMatch();
    }

    function setTargetSpringCount(cnt) {
      targetSpringCount = cnt;
      const btns = document.getElementById('targetSpringCountGroup').querySelectorAll('.segment-btn');
      btns[0].classList.toggle('active', cnt === 2);
      btns[1].classList.toggle('active', cnt === 1);
      runTruckMatch();
    }

    function stepLength(delta) {
      const input = document.getElementById('oldLengthInput');
      let val = Math.max(12, Math.min(72, parseFloat(input.value) + delta));
      input.value = val.toFixed(1);
      runTruckMatch();
    }

    // TAB 2: Spring Sizer Logic
    function runSpringSizer() {
      const height = parseFloat(document.getElementById('doorHeight').value);
      const width = parseFloat(document.getElementById('doorWidth').value);
      const weight = parseFloat(document.getElementById('doorWeight').value);
      const drum = document.getElementById('drumModel').value;
      const trackRadiusEl = document.getElementById('trackRadius');
      const trackRadiusVal = trackRadiusEl ? trackRadiusEl.value : '15';

      const drumInfo = DRUM_SPECS[drum] || DRUM_SPECS["400-8"];

      // BUGFIX (field report, Sept 2026): total cable travel is door height
      // PLUS any additional High Lift distance. The "High Lift Distance"
      // field was already being collected from the tech but was never
      // actually used anywhere -- turns (and therefore IPPT) were silently
      // calculated as if every High Lift door were a Standard Lift door of
      // the same height, undercounting the extra travel entirely.
      let effectiveHeightIn = height * 12;
      if (drumInfo.type === 'High Lift') {
        const hlEl = document.getElementById('highLiftInches');
        const hlExtra = hlEl ? (parseFloat(hlEl.value) || 0) : 0;
        effectiveHeightIn += hlExtra;
      }

      // BUGFIX: track curve radius has a small but real effect on total cable
      // travel. A tighter 12in radius curve needs about 3in less vertical
      // travel than the 15in standard curve (consistent with the ~3in of
      // headroom a 12in radius is widely documented to save vs. 15in). The
      // drum constants above already assume the 15in standard baseline (the
      // dropdown's default), so only 12in gets an adjustment here.
      // Low Headroom (LHR-F/LHR-R) mounts are NOT simply "an even smaller
      // radius" -- they're a different mechanical system (a separate
      // jackshaft/pulley arrangement per most low-headroom conversion kits),
      // so this calculator deliberately does not invent a numeric adjustment
      // for them; see the advisory note wired to the LHR options below.
      let trackAdjustIn = 0;
      if (trackRadiusVal === '12') trackAdjustIn = -3;

      const effectiveHeightFt = (effectiveHeightIn + trackAdjustIn) / 12;
      const turns = (effectiveHeightFt * drumInfo.turnsPerFt) + drumInfo.deadTurns;

      // BUGFIX (v40): guard division-by-zero. turns can only reach 0 if
      // turnsPerFt = 0 AND deadTurns = 0 (no real drum does this, but bad
      // data from a future drum entry would silently produce Infinity IPPT).
      if (!turns || turns <= 0) {
        document.getElementById('sizerTurns').innerText = '—';
        document.getElementById('sizerTurnsSub').innerText = 'Invalid drum configuration';
        document.getElementById('sizerTotalIPPT').innerText = '—';
        document.getElementById('sizerEachIPPT').innerText = '—';
        return;
      }

      const totalIPPT = (weight * drumInfo.radius) / turns;
      const eachIPPT = totalIPPT / 2.0;

      // Low Headroom mounts use a genuinely different mechanical system --
      // flag it rather than silently presenting a number as if it were fully
      // engineered for that configuration.
      const lhrWarning = document.getElementById('lhrAdvisory');
      if (lhrWarning) {
        lhrWarning.style.display = (trackRadiusVal === 'LHR-F' || trackRadiusVal === 'LHR-R') ? 'block' : 'none';
      }

      document.getElementById('sizerTurns').innerText = turns.toFixed(1);
      const fullTurns = Math.floor(turns);
      const quarterTurns = Math.round((turns - fullTurns) * 4);
      document.getElementById('sizerTurnsSub').innerText = `${fullTurns} turns + ${quarterTurns} quarter turns (${Math.round(turns * 4)} total)`;
      document.getElementById('sizerTotalIPPT').innerText = totalIPPT.toFixed(1);
      document.getElementById('sizerEachIPPT').innerText = eachIPPT.toFixed(1);

      // Populate spec sheet defaults
      document.getElementById('printDoorSize').innerText = `${width}'0" W x ${height}'0" H`;
      document.getElementById('printDoorWeight').innerText = `${weight} lbs`;
      document.getElementById('printDrum').innerText = drum;
      document.getElementById('printTotalIPPT').innerText = totalIPPT.toFixed(1);
      document.getElementById('printTurns').innerText = `${turns.toFixed(1)} turns (${Math.round(turns * 4)} quarter turns)`;

      // BUGFIX (field report, Sept 2026): #printTrack was a static "15"
      // Standard" placeholder that never updated -- the printed spec sheet
      // always showed the default track config no matter what the tech
      // actually selected. Now it reflects the real selection.
      const trackSel = document.getElementById('trackRadius');
      const printTrackEl = document.getElementById('printTrack');
      if (trackSel && printTrackEl) {
        printTrackEl.innerText = trackSel.options[trackSel.selectedIndex].text;
      }

      // Dynamically select realistic, field-practical spring wire sizes
      const container = document.getElementById('engineeredOptionsContainer');
      container.innerHTML = '';

      // Find all realistic pair options (lengths between 22" and 42")
      const candidatePairs = [];
      [2.0, 1.75, 2.625].forEach(tid => {
        WIRE_SPECS.forEach(w => {
          const len = (E_MODULUS * Math.pow(w.wire, 5)) / (10.8 * (tid + w.wire) * eachIPPT);
          if (len >= 22.0 && len <= 44.0) {
            const cycles = estimateCycles(w.wire, tid, len, eachIPPT, turns);
            candidatePairs.push({
              wire: w.wire,
              name: w.name,
              color: w.color,
              id: tid,
              len: len,
              cycles: cycles,
              diffFromStandard: Math.abs(len - 31.0)
            });
          }
        });
      });

      // Sort by closest to standard 30-32 inch residential length
      candidatePairs.sort((a, b) => a.diffFromStandard - b.diffFromStandard);

      // Pick Standard (10k-15k) and High-Cycle (25k+)
      const standardPair = candidatePairs.find(c => c.cycles <= 15000 && c.id === 2.0) || candidatePairs.find(c => c.cycles <= 20000) || candidatePairs[0];
      const highCyclePair = candidatePairs.find(c => c.cycles >= 25000 && c.wire > (standardPair ? standardPair.wire : 0)) || candidatePairs.find(c => c.cycles >= 25000) || candidatePairs[1];

      // Also find Single Spring alternative (lengths 26" to 38")
      let singleOption = null;
      if (weight <= 190) {
        const candidateSingles = [];
        [2.0, 1.75].forEach(tid => {
          WIRE_SPECS.forEach(w => {
            const len = (E_MODULUS * Math.pow(w.wire, 5)) / (10.8 * (tid + w.wire) * totalIPPT);
            if (len >= 25.0 && len <= 40.0) {
              const cycles = estimateCycles(w.wire, tid, len, totalIPPT, turns);
              candidateSingles.push({
                wire: w.wire,
                name: w.name,
                color: w.color,
                id: tid,
                len: len,
                cycles: cycles,
                diffFromStandard: Math.abs(len - 32.0)
              });
            }
          });
        });
        candidateSingles.sort((a, b) => a.diffFromStandard - b.diffFromStandard);
        if (candidateSingles.length > 0) singleOption = candidateSingles[0];
      }

      const displayCards = [];
      if (standardPair) {
        displayCards.push({
          title: "Standard Residential Pair (Recommended)",
          badge: standardPair.cycles >= 25000 ? "25k High" : standardPair.cycles >= 15000 ? "15k Std" : "10k Std",
          badgeClass: standardPair.cycles >= 25000 ? "green" : "gray",
          count: 2,
          wire: standardPair.wire,
          name: standardPair.name,
          color: standardPair.color,
          id: standardPair.id,
          len: standardPair.len,
          cycles: standardPair.cycles
        });
      }

      if (highCyclePair && highCyclePair !== standardPair) {
        displayCards.push({
          title: "High-Cycle Extended Life Pair",
          badge: highCyclePair.cycles >= 50000 ? "50k+ Com" : "25k High",
          badgeClass: highCyclePair.cycles >= 50000 ? "purple" : "green",
          count: 2,
          wire: highCyclePair.wire,
          name: highCyclePair.name,
          color: highCyclePair.color,
          id: highCyclePair.id,
          len: highCyclePair.len,
          cycles: highCyclePair.cycles
        });
      }

      if (singleOption) {
        displayCards.push({
          title: "Single Spring Alternative (Economy)",
          badge: singleOption.cycles >= 15000 ? "15k Std" : "10k Std",
          badgeClass: "gray",
          count: 1,
          wire: singleOption.wire,
          name: singleOption.name,
          color: singleOption.color,
          id: singleOption.id,
          len: singleOption.len,
          cycles: singleOption.cycles
        });
      }

      // Commercial Duplex Option (Nested Inner 2-5/8" + Outer 3-3/4" Spring)
      const duplexOption = calculateDuplexPair(eachIPPT, 36.0);
      if (duplexOption) {
        displayCards.push({
          title: "Commercial Duplex Assembly (Nested Inner + Outer)",
          badge: "Duplex 25k+",
          badgeClass: "purple",
          count: 2,
          isDuplex: true,
          duplexData: duplexOption
        });
      }

      displayCards.forEach(opt => {
        const idLabel = opt.id === 2.625 ? "2-5/8\" ID" : opt.id === 1.75 ? "1-3/4\" ID" : "2.0\" ID";
        const card = document.createElement('div');
        card.style.background = 'var(--bg-card-sub)';
        card.style.border = '1px solid var(--border-color)';
        card.style.borderRadius = '10px';
        card.style.padding = '14px';
        card.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <div style="font-weight:700; font-size:14px;">${opt.title}</div>
            <span class="badge ${opt.badgeClass}">~${opt.cycles.toLocaleString()} Cycles</span>
          </div>
          <div style="font-size:16px; font-weight:800; color:var(--accent); font-family:ui-monospace, monospace; margin: 4px 0;">
            (${opt.count}) Spring${opt.count > 1 ? 's' : ''}: ${opt.name} (${opt.color}) x ${idLabel} ID x ${opt.len.toFixed(1)}" Cut Length
          </div>
          <div style="font-size:12px; color:var(--text-muted); display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
            <span>IPPT: ${(opt.count === 2 ? eachIPPT : totalIPPT).toFixed(1)} ${opt.count === 2 ? 'each' : 'total'} | Turns: ${turns.toFixed(1)}</span>
            <button class="btn-action" style="padding:4px 8px; font-size:11px;" onclick="selectReplacement(${opt.wire}, ${opt.id}, ${opt.len.toFixed(1)}, ${opt.cycles}, '${opt.name}', ${opt.count}); openSpecSheet();">Use on Spec Sheet →</button>
          </div>
        `;
        container.appendChild(card);
      });
    }

    function stepVal(id, delta) {
      const el = document.getElementById(id);
      let val = Math.max(1, parseFloat(el.value) + delta);
      el.value = val;
      runSpringSizer();
    }

    // TAB 3: Door Weight Estimator Logic
    function calculateDoorWeight(calledFromConstruction) {
      const w = parseFloat(document.getElementById('estWidth').value) || 16;
      const h = parseFloat(document.getElementById('estHeight').value) || 7;
      const sections = parseInt(document.getElementById('estSections').value) || 4;
      const construction = document.getElementById('estConstruction').value;
      const glass = document.getElementById('estGlass').value;
      const struts = parseInt(document.getElementById('estStruts').value) || 0;

      // BUGFIX (v40): if the tech manually changes the Construction dropdown,
      // clear any AI density override so the dropdown value takes effect.
      // Without this, switching from e.g. poly-vinyl to foamed-3layer after a
      // scan had no effect -- the AI's number silently stayed in control.
      if (calledFromConstruction === 'manual') {
        if (customDensityOverride !== null) {
          customDensityOverride = null;
          const badge = document.getElementById('badgeDensity');
          if (badge) badge.innerHTML = '';
          const aiOverrideNote = document.getElementById('aiDensityOverrideNote');
          if (aiOverrideNote) aiOverrideNote.style.display = 'none';
        }
      }

      const sqft = w * h;
      let density = 1.65;
      if (customDensityOverride !== null) {
        density = customDensityOverride;
      } else {
        if (construction === 'pan-25') density = 1.25;
        else if (construction === 'pan-24') density = 1.40;
        else if (construction === 'poly-vinyl') density = 1.65;
        else if (construction === 'foamed-3layer') density = 2.20;
        else if (construction === 'commercial-heavy') density = 2.85;
        else if (construction === 'fullview-glass') density = 3.40;
        else if (construction === 'wood-solid') density = 4.50;
        else if (construction === 'vinyl-solid') density = 1.50;
      }

      const basePanels = sqft * density;
      const hardwareWeight = 14 + (sections * 2) + (w > 12 ? 6 : 0);

      // BUGFIX (v40): glass weight for a full-width glass row should scale with
      // door width -- a 20ft door has far more glass than an 8ft door.
      // Single/heavy pane rows (4 lites across one section) are fixed absolute
      // weights and do not change with width.
      let glassWeight = 0;
      if (glass === '4-single') glassWeight = 20;
      else if (glass === '4-heavy') glassWeight = 35;
      else if (glass === 'full-glass-row') glassWeight = Math.round(w * 3.75); // ~3.75 lbs/ft of width

      // BUGFIX (v40): strut weight formula uses a fixed 0.85 lbs/ft factor
      // which only applies to standard 2-1/4" U-bar. The struts dropdown has
      // "heavy commercial truss" options (3+ struts) which weigh ~1.45 lbs/ft.
      // Use 0.85 for 1-2 struts (standard U-bar), 1.45 for 3-4 struts (truss).
      const strutLbsPerFt = struts >= 3 ? 1.45 : 0.85;
      const strutWeight = struts * (w * strutLbsPerFt);

      const totalWeight = Math.round(basePanels + hardwareWeight + glassWeight + strutWeight);

      document.getElementById('estTotalWeight').innerText = totalWeight + " lbs";
      document.getElementById('estSectionWeight').innerText = Math.round(totalWeight / sections) + " lbs";

      document.getElementById('breakdownPanels').innerText = Math.round(basePanels) + " lbs";
      document.getElementById('breakdownHardware').innerText = Math.round(hardwareWeight) + " lbs";
      document.getElementById('breakdownGlass').innerText = Math.round(glassWeight) + " lbs";
      document.getElementById('breakdownStruts').innerText = Math.round(strutWeight) + " lbs";
      document.getElementById('breakdownTotal').innerText = totalWeight + " lbs";

      // Section-count sanity: warn if sections produce panel height < 14" (impossible
      // for standard steel sections; means the user entered a bad section count).
      const panelHeightIn = (h * 12) / sections;
      const sectionWarnEl = document.getElementById('sectionCountWarning');
      if (sectionWarnEl) {
        sectionWarnEl.style.display = panelHeightIn < 14 ? 'block' : 'none';
      }

      // Warn if AI density override is still active (so tech knows the
      // construction dropdown is not controlling the calculation).
      const aiOverrideNote = document.getElementById('aiDensityOverrideNote');
      if (aiOverrideNote) {
        aiOverrideNote.style.display = customDensityOverride !== null ? 'block' : 'none';
      }

      // BUG 4 FIX: Live update on Apply Weight button
      const applyBtnNum = document.getElementById('applyWeightNum');
      if (applyBtnNum) {
        applyBtnNum.innerText = totalWeight + " lbs";
      }
      const applyBtn = document.getElementById('applyEstWeightBtn');
      if (applyBtn) {
        applyBtn.innerHTML = `✅ Apply this ${totalWeight} lbs Weight to Spring Sizer →`;
      }
    }

    function applyEstimatedWeightToSizer() {
      const weightText = document.getElementById('estTotalWeight').innerText;
      const weight = parseInt(weightText);
      const w = document.getElementById('estWidth').value;
      const h = document.getElementById('estHeight').value;

      document.getElementById('doorWeight').value = weight;
      document.getElementById('doorWidth').value = w;
      document.getElementById('doorHeight').value = h;

      switchTab('spring-sizer');
      runSpringSizer();
    }

    // TAB 4: Quick Tools Logic
    function calcTwentyCoil() {
      const val = parseFloat(document.getElementById('twentyCoilInput').value);
      document.getElementById('twentyCoilDisplay').innerText = val.toFixed(4) + '"';

      // Find closest wire
      let closest = WIRE_SPECS[0];
      let minDiff = 999;
      WIRE_SPECS.forEach(w => {
        const diff = Math.abs(w.coils20 - val);
        if (diff < minDiff) {
          minDiff = diff;
          closest = w;
        }
      });

      document.getElementById('coilWireResult').innerText = closest.name;
      document.getElementById('coilColorResult').innerText = closest.color;
      const fractionEl = document.getElementById('coilFractionResult');
      if (fractionEl) fractionEl.innerText = closest.dashes || '';

      // BUGFIX (Sept 2026 audit): flag measurements that fall well outside
      // the wire gauges this tool actually supports (.192"-.500"), instead of
      // silently returning the closest match as if it were a confident read.
      const warningEl = document.getElementById('coilRangeWarning');
      if (warningEl) {
        const smallest = WIRE_SPECS[0].coils20;
        const largest = WIRE_SPECS[WIRE_SPECS.length - 1].coils20;
        const outOfRange = (val < smallest - 0.15) || (val > largest + 0.15) || (minDiff > 0.2);
        warningEl.style.display = outOfRange ? 'block' : 'none';
      }
    }

    function stepTwentyCoil(delta) {
      const el = document.getElementById('twentyCoilInput');
      // BUGFIX (Sept 2026 audit): old max of 8.0" silently capped this
      // stepper below the .437"/.500" "Heavy" gauges (8.75"/10.00" per 20
      // coils) that are now supported in WIRE_SPECS. Raised to give full
      // range plus a little headroom for the out-of-range warning to trigger.
      let val = Math.max(3.5, Math.min(10.5, parseFloat(el.value) + delta));
      el.value = val.toFixed(4);
      calcTwentyCoil();
    }

    function calcODtoID() {
      const od = parseFloat(document.getElementById('measuredOD').value);
      const wire = parseFloat(document.getElementById('odWireSelect').value);
      const id = od - (2 * wire);
      document.getElementById('calculatedIDResult').innerText = id.toFixed(3) + '" (Approx. ' + (Math.abs(id - 2.0) < 0.1 ? 'Standard 2.0 in ID' : Math.abs(id - 1.75) < 0.1 ? 'Standard 1-3/4 in ID' : id.toFixed(2) + '" ID') + ')';
    }


    function scrollToTools() {
      const anchor = document.getElementById('tools-anchor');
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Tab Navigation
    function switchTab(tabId) {
      document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.tab) {
          btn.classList.toggle('active', btn.dataset.tab === tabId);
        }
      });
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

      const activePane = document.getElementById(`pane-${tabId}`);
      if (activePane) activePane.classList.add('active');

      if (tabId === 'spring-sizer') {
        runSpringSizer();
      } else if (tabId === 'weight-est') {
        calculateDoorWeight();
      } else if (tabId === 'truck-stock') {
        runTruckMatch();
      } else if (tabId === 'quick-tools') {
        // Bug H Fix: Ensure tables are populated immediately on tab switch
        runDirectIPPT();
        calcTwentyCoil();
        calcODtoID();
      }
    }

    // Modal Control

    function openWaiverModal() {
      document.getElementById('waiverModal').classList.add('open');
    }
    function closeWaiverModal() {
      document.getElementById('waiverModal').classList.remove('open');
    }

    function openSpecSheet() {
      document.getElementById('printDate').innerText = new Date().toISOString().split('T')[0];
      document.getElementById('specModal').classList.add('open');
    }
    function closeSpecSheet() {
      document.getElementById('specModal').classList.remove('open');
    }

    // Offline / Online Status
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    function updateOnlineStatus() {
      const dot = document.getElementById('onlineDot');
      const text = document.getElementById('onlineText');
      if (navigator.onLine) {
        dot.classList.remove('offline');
        text.innerText = "Field Ready";
      } else {
        dot.classList.add('offline');
        text.innerText = "Offline (Cached)";
      }
    }

    // Register PWA Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration skipped', err));
      });
    }


    function handleDrumChange() {
      const drumKey = document.getElementById('drumModel').value;
      const d = DRUM_SPECS[drumKey] || DRUM_SPECS["400-8"];
      
      // Update info pill
      document.getElementById('pillCable').innerText = d.cable;
      document.getElementById('pillCircum').innerText = d.circumference + '"';
      document.getElementById('pillCrossRef').innerText = d.crossRef;

      // Show/hide High Lift input
      const hlGroup = document.getElementById('highLiftFieldGroup');
      if (d.type === 'High Lift') {
        hlGroup.style.display = 'block';
      } else {
        hlGroup.style.display = 'none';
      }

      runSpringSizer();
    }

    function populateDrumTable() {
      const tbody = document.getElementById('drumTableBody');
      if (!tbody) return;
      tbody.innerHTML = '';

      Object.keys(DRUM_SPECS).forEach(k => {
        const d = DRUM_SPECS[k];
        const tr = document.createElement('tr');
        tr.dataset.search = (d.name + ' ' + d.type + ' ' + d.crossRef + ' ' + k).toLowerCase();
        tr.innerHTML = `
          <td><strong style="color:var(--accent);">${k}</strong> <span style="font-size:11px; color:var(--text-muted);">(${d.name.split(' ')[0]})</span></td>
          <td><span class="badge ${d.type === 'Standard Lift' ? 'gray' : d.type === 'High Lift' ? 'amber' : 'purple'}">${d.type}</span></td>
          <td class="mono">${d.maxHt}</td>
          <td class="mono">${d.cable}</td>
          <td class="mono">${d.radius.toFixed(2)}"</td>
          <td class="mono">${d.circumference.toFixed(2)}"</td>
          <td style="font-size:11px; color:var(--text-muted);">${d.crossRef}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    function filterDrumTable() {
      const query = (document.getElementById('drumSearchInput').value || '').toLowerCase();
      const rows = document.querySelectorAll('#drumTableBody tr');
      rows.forEach(r => {
        const text = r.dataset.search || '';
        r.style.display = text.includes(query) ? '' : 'none';
      });
    }

    // Springs by Direct IPPT Lookup (SSC Style)
    function runDirectIPPT() {
      const targetIPPT = parseFloat(document.getElementById('directIPPTInput').value) || 18.5;
      const targetID = parseFloat(document.getElementById('directIDSelect').value) || 2.0;
      const tbody = document.getElementById('directIPPTBody');
      if (!tbody) return;
      tbody.innerHTML = '';

      const results = [];
      WIRE_SPECS.forEach(w => {
        // L = (E * d^5) / (10.8 * (ID + d) * IPPT)
        const L = (E_MODULUS * Math.pow(w.wire, 5)) / (10.8 * (targetID + w.wire) * targetIPPT);
        if (L >= 18.0 && L <= 58.0) {
          const cycles = estimateCycles(w.wire, targetID, L, targetIPPT, 7.6);
          results.push({
            wire: w.wire,
            name: w.name,
            color: w.color,
            id: targetID,
            length: L,
            cycles: cycles
          });
        }
      });

      results.sort((a, b) => Math.abs(a.length - 32) - Math.abs(b.length - 32));

      if (results.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:15px; color:var(--text-dim);">No wire size produces a realistic cut length for this IPPT and ID. Try changing ID.</td></tr>';
        return;
      }

      results.forEach(r => {
        const tr = document.createElement('tr');
        let cycleBadge = '<span class="badge gray">10k Std</span>';
        if (r.cycles >= 50000) cycleBadge = '<span class="badge purple">50k+ Com</span>';
        else if (r.cycles >= 25000) cycleBadge = '<span class="badge green">25k High</span>';
        else if (r.cycles >= 15000) cycleBadge = '<span class="badge amber">15k Plus</span>';

        tr.innerHTML = `
          <td><span class="mono font-bold">${r.name}</span> <span style="font-size:11px; color:var(--text-muted);">(${r.color})</span></td>
          <td>${r.id === 2.625 ? '2-5/8"' : r.id === 1.75 ? '1-3/4"' : r.id === 3.75 ? '3-3/4"' : '2.0"'}</td>
          <td class="mono font-bold" style="color:var(--accent);">${r.length.toFixed(1)}"</td>
          <td class="mono">${targetIPPT.toFixed(1)}</td>
          <td>${cycleBadge}</td>
          <td><button class="btn-action" style="padding:4px 8px; font-size:11px;" onclick="selectReplacement(${r.wire}, ${r.id}, ${r.length.toFixed(1)}, ${r.cycles}, '${r.name}', 2); openSpecSheet();">Use on Spec Sheet →</button></td>
        `;
        tbody.appendChild(tr);
      });
    }


    // Comprehensive Manufacturer Door Model Weights Database
    //
    // NOTE (Sept 2026 audit): door_database.json (shipped alongside this file)
    // is a mirror of this exact array for offline reference/editing -- the
    // app itself only reads the inline array below, it does not fetch the
    // .json file at runtime. If you edit one, regenerate the other from it
    // (they were previously allowed to silently drift; keep them identical
    // going forward, the same way WIRE_SPECS/STANDARD_SPRING_WIRES do now).
    const DOOR_DATABASE = [
  {
    "id": "garaga-standard-plus",
    "manufacturer": "Garaga",
    "series": "Standard+ Collection",
    "model_name": "Standard+ (R-16)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-16.0",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.2,
    "weight_confidence": "verified",
    "data_source": "Garaga Technical Architectural Binder (St-Georges QC)",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "10x7",
      "16x7",
      "16x8",
      "18x7",
      "18x8"
    ],
    "window_options": "Standard 21x13 insulated lite (+6.5 lbs/lite); 40x13 executive (+11.0 lbs/lite); panoramic (+45 lbs/section)",
    "strut_options": "2-1/4in 20ga galvanized U-bar (+0.85 lbs/ft); 3in 16ga commercial truss (+1.45 lbs/ft)",
    "stamp_location": "Inside surface of section #2, ink-stenciled near left/right end stile with serial and Julian date code",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Signature dual-seal Interlocking thermal break with continuous PVC weatherstrip. Most common R-16 door across Canada.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": "tongue_and_groove",
        "thermal_break_material": "pvc_strip"
      },
      "end_stiles_and_caps": {
        "material": "wood_block",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "garaga-acadia-138",
    "manufacturer": "Garaga",
    "series": "Acadia Collection",
    "model_name": "Acadia 138 (R-12)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-12.0",
    "thickness_in": 1.375,
    "density_lbs_sqft": 1.85,
    "weight_confidence": "verified",
    "data_source": "Garaga Technical Specifications Spec Sheet 138",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Standard 21x13 insulated lite (+6.0 lbs/lite); 40x13 executive (+10.5 lbs/lite)",
    "strut_options": "2-1/4in 20ga U-bar (+0.85 lbs/ft)",
    "stamp_location": "Inside surface of section #2 near end stile",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "1-3/8in core popular in British Columbia tract home developments.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": "tongue_and_groove",
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "wood_block",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "garaga-triforce",
    "manufacturer": "Garaga",
    "series": "Triforce Collection",
    "model_name": "Triforce (R-10)",
    "category": "residential",
    "construction_type": "three-layer polystyrene",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-10.0",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.7,
    "weight_confidence": "verified",
    "data_source": "Garaga Architectural Product Guide",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Standard 21x13 insulated lite (+6.0 lbs/lite)",
    "strut_options": "2-1/4in 20ga U-bar (+0.85 lbs/ft)",
    "stamp_location": "Stenciled on inside skin near top edge of section #2",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "2in expanded polystyrene sandwich with steel interior backing.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": "tongue_and_groove",
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "wood_block",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polystyrene",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "garaga-h-tech",
    "manufacturer": "Garaga",
    "series": "H-Tech Collection",
    "model_name": "H-Tech (Aluminum R-16)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "Aluminum 0.050in skin",
    "r_value": "R-16.0",
    "thickness_in": 1.75,
    "density_lbs_sqft": 1.65,
    "weight_confidence": "verified",
    "data_source": "Garaga Residential Catalog (Rust-Proof Line)",
    "last_verified": "2026-06",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Insulated aluminum-framed lites (+6.0 lbs/lite)",
    "strut_options": "Aluminum reinforcement strut (+0.70 lbs/ft)",
    "stamp_location": "Inside section #2 right end stile",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Extremely light due to aluminum skin. High R-value without steel weight; requires precision lighter spring sizing.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": "tongue_and_groove",
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "wood_block",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "Aluminum 0.050in skin",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "garaga-g5000",
    "manufacturer": "Garaga",
    "series": "Commercial Steel",
    "model_name": "G-5000 (Commercial R-16)",
    "category": "commercial",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge / 20-gauge options",
    "r_value": "R-16.0",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.65,
    "weight_confidence": "verified",
    "data_source": "Garaga Commercial Sectional Manual G-5000",
    "last_verified": "2026-08",
    "common_sizes": [
      "10x10",
      "12x12",
      "12x14",
      "14x14",
      "16x14",
      "16x16"
    ],
    "window_options": "Full-vision sealed double-pane glass sections (+55 lbs/section); 24x12 lites (+8 lbs/ea)",
    "strut_options": "3in 16ga galvanized hat truss (+1.45 lbs/ft); 4in heavy commercial truss (+2.10 lbs/ft)",
    "stamp_location": "Inside end stile tag on section #1 and section #3",
    "status": "current",
    "constructionVal": "commercial-heavy",
    "notes": "Equipped with continuous 14ga commercial steel backup plates and heavy end stiles.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": "tongue_and_groove",
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "wood_block",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge / 20-gauge options",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "garaga-california",
    "manufacturer": "Garaga",
    "series": "Full-View",
    "model_name": "California (Aluminum Full-View)",
    "category": "residential",
    "construction_type": "aluminum full-view",
    "panel_gauge": "Extruded Aluminum 0.075in frame",
    "r_value": "N/A",
    "thickness_in": 1.75,
    "density_lbs_sqft": 3.35,
    "weight_confidence": "verified",
    "data_source": "Garaga California Technical Specifications",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8",
      "18x8"
    ],
    "window_options": "Glazed sections standard: 1/8in clear glass (3.35 lb/sqft); 1/4in laminated (4.10 lb/sqft); 1/2in sealed insulated unit (4.50 lb/sqft)",
    "strut_options": "Integral tubular horizontal members; external struts for 16ft+ (+1.10 lbs/ft)",
    "stamp_location": "Bottom rail interior stenciled tag",
    "status": "current",
    "constructionVal": "fullview-glass",
    "notes": "Dead weight varies sharply based on single vs double pane insulated glass units.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": "tongue_and_groove",
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "wood_block",
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Extruded Aluminum 0.075in frame",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "garaga-alterna-legacy",
    "manufacturer": "Garaga",
    "series": "Alterna (Legacy)",
    "model_name": "Alterna / Alterna II (Legacy R-9)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-9.2",
    "thickness_in": 1.125,
    "density_lbs_sqft": 1.6,
    "weight_confidence": "estimated",
    "data_source": "Estimated from historical 1-1/8in polyurethane core construction standards",
    "last_verified": "2026-05",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Standard 21x13 single/insulated lites (+5.5 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Inside metal tag on section #2 or bottom bracket warning label",
    "status": "legacy",
    "constructionVal": "poly-vinyl",
    "notes": "1-1/8in polyurethane core door manufactured widely in late 1990s through 2000s; frequent broken spring service target.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": "tongue_and_groove",
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "wood_block",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "steelcraft-thermocraft-t16",
    "manufacturer": "Steel-Craft",
    "series": "ThermoCraft Series",
    "model_name": "ThermoCraft T-16 (R-16)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-16.04",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.2,
    "weight_confidence": "verified",
    "data_source": "Steel-Craft Door Products Engineering Spec Sheet T-16",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "10x7",
      "16x7",
      "16x8",
      "18x7",
      "18x8"
    ],
    "window_options": "Deco-Lite frames 24x12 (+6.5 lbs/lite); sunrise/sunburst arch (+7.0 lbs/lite)",
    "strut_options": "2-1/4in 20ga galvanized U-strut (+0.85 lbs/ft); 3in 18ga truss (+1.25 lbs/ft)",
    "stamp_location": "Interior bottom right corner or bottom section end stile stenciled 'STEEL-CRAFT EDMONTON'",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Features patented WeatherLock interlock tongue-and-groove joint. Dominant overhead door throughout Western Canada.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "galvanized_steel",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "steelcraft-thermocraft-t12",
    "manufacturer": "Steel-Craft",
    "series": "ThermoCraft Series",
    "model_name": "ThermoCraft T-12 (R-10)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-10.40",
    "thickness_in": 1.125,
    "density_lbs_sqft": 1.8,
    "weight_confidence": "verified",
    "data_source": "Steel-Craft Door Products Technical Specs T-12",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Standard 24x12 insulated lites (+6.0 lbs/lite)",
    "strut_options": "2-1/4in U-strut (+0.85 lbs/ft)",
    "stamp_location": "Interior bottom section or end stile stamp",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "1-1/8in polyurethane core sandwich with WeatherLock system.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "galvanized_steel",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "steelcraft-ranchcraft-rc16",
    "manufacturer": "Steel-Craft",
    "series": "RanchCraft / CarriageCraft",
    "model_name": "RanchCraft RC-16 / CarriageCraft (R-16)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-16.04",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.25,
    "weight_confidence": "verified",
    "data_source": "Steel-Craft Residential Brochure & Architectural Binder",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Decorative mullion windows (+7.5 lbs/lite); seeded glass (+9.0 lbs/lite)",
    "strut_options": "2-1/4in galvanized U-strut (+0.85 lbs/ft)",
    "stamp_location": "Inside face of section #2, stenciled stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Long embossed carriage panels on T-16 polyurethane core.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "galvanized_steel",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "steelcraft-flush-contemporary",
    "manufacturer": "Steel-Craft",
    "series": "Contemporary Series",
    "model_name": "Contemporary Flush / Woodtone (R-16)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-16.04",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.2,
    "weight_confidence": "verified",
    "data_source": "Steel-Craft Contemporary Product Line Specifications",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8",
      "18x8"
    ],
    "window_options": "Narrow horizontal full-length aluminum-framed window lites (+14 lbs/lite)",
    "strut_options": "2-1/4in galvanized U-bar (+0.85 lbs/ft)",
    "stamp_location": "Inside end stile stenciled stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Flush exterior steel sheet with Dark Oak, Walnut, or Cedar woodgrain sublimation prints.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "galvanized_steel",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "steelcraft-td134-industrial",
    "manufacturer": "Steel-Craft",
    "series": "Commercial Sectional",
    "model_name": "Therm-O-Dor TD-134 / SC-Industrial (R-16)",
    "category": "commercial",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge exterior / 26-gauge interior",
    "r_value": "R-16.04",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.7,
    "weight_confidence": "verified",
    "data_source": "Steel-Craft Commercial Sectional Specifications TD-134",
    "last_verified": "2026-08",
    "common_sizes": [
      "10x10",
      "12x12",
      "12x14",
      "14x14",
      "16x14",
      "16x16",
      "20x16"
    ],
    "window_options": "24x12 insulated double-acrylic sealed units (+7 lbs/ea); full-vision sections (+55 lbs/sec)",
    "strut_options": "3in 18ga hat truss (+1.25 lbs/ft); 3in 16ga heavy truss (+1.45 lbs/ft); 4in structural truss (+2.20 lbs/ft)",
    "stamp_location": "Metal DASMA serial tag riveted to bottom corner bracket and section #3 end stile",
    "status": "current",
    "constructionVal": "commercial-heavy",
    "notes": "Standard commercial overhead door for fire halls, bays, and warehouses across BC and Alberta.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "galvanized_steel",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge exterior / 26-gauge interior",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "steelcraft-sa6000",
    "manufacturer": "Steel-Craft",
    "series": "Commercial Aluminum",
    "model_name": "SA-6000 (Commercial Aluminum Full-View)",
    "category": "commercial",
    "construction_type": "aluminum full-view",
    "panel_gauge": "Extruded 6063-T6 Aluminum",
    "r_value": "N/A",
    "thickness_in": 1.75,
    "density_lbs_sqft": 3.3,
    "weight_confidence": "verified",
    "data_source": "Steel-Craft SA-6000 Product Data Sheet",
    "last_verified": "2026-08",
    "common_sizes": [
      "10x10",
      "12x12",
      "14x12",
      "16x14"
    ],
    "window_options": "1/8in clear glass (3.30 lb/sqft); 1/4in tempered (3.80 lb/sqft); 1/2in insulated glass (4.40 lb/sqft)",
    "strut_options": "Integral tubular rails; external hat truss for wide spans (+1.45 lbs/ft)",
    "stamp_location": "Stenciled on inside of bottom rail",
    "status": "current",
    "constructionVal": "fullview-glass",
    "notes": "Heavy extruded aluminum full-view door for car dealerships and commercial showrooms.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "galvanized_steel",
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Extruded 6063-T6 Aluminum",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "steelcraft-k134-legacy",
    "manufacturer": "Steel-Craft",
    "series": "K-Series (Legacy)",
    "model_name": "K-134 (Legacy Polystyrene Sandwich)",
    "category": "commercial",
    "construction_type": "three-layer polystyrene",
    "panel_gauge": "24-gauge steel",
    "r_value": "R-8.5",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.15,
    "weight_confidence": "estimated",
    "data_source": "Estimated from manufacturer nominal 24ga steel sandwich construction benchmark",
    "last_verified": "2026-04",
    "common_sizes": [
      "10x10",
      "12x12",
      "14x14",
      "16x14"
    ],
    "window_options": "Standard 24x12 lites (+6 lbs/ea)",
    "strut_options": "2in angle iron / U-bars (+1.10 lbs/ft)",
    "stamp_location": "Metal riveted plate on end stile",
    "status": "legacy",
    "constructionVal": "commercial-heavy",
    "notes": "Extensively installed in older commercial bays across Canada; frequent spring failure replacement target.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "galvanized_steel",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polystyrene",
        "exterior_skin_gauge": "24-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "rw-landmark-premium",
    "manufacturer": "Richards-Wilcox",
    "series": "Landmark Collection",
    "model_name": "Landmark Premium (2in Neufoam, R-18)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-18.0",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.25,
    "weight_confidence": "verified",
    "data_source": "Richards-Wilcox Canada Residential Engineering Binder",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "10x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Standard 24x12 double-pane insulated lites (+7.0 lbs/lite); aluminum panoramic (+45 lbs/sec)",
    "strut_options": "2-1/4in galvanized U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior ink stamp on section #2 near left hinge line stating 'RW CANADA NEUFOAM'",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Features Neufoam continuous closed-cell polyurethane core and patented WeatherLock joint profile.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "rw-landmark-classic",
    "manufacturer": "Richards-Wilcox",
    "series": "Landmark Collection",
    "model_name": "Landmark Classic (1-3/8in Neufoam, R-12)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-12.0",
    "thickness_in": 1.375,
    "density_lbs_sqft": 1.95,
    "weight_confidence": "verified",
    "data_source": "Richards-Wilcox Product Specifications Sheet L-138",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Standard 24x12 insulated lites (+6.5 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior stenciled stamp on section #2",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "1-3/8in Neufoam core; common residential spec across Ontario, Alberta, and BC.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "rw-echo-ridge",
    "manufacturer": "Richards-Wilcox",
    "series": "Carriage House",
    "model_name": "Echo Ridge / Grandview (R-18)",
    "category": "residential",
    "construction_type": "composite overlay",
    "panel_gauge": "26-gauge steel base + Cellular PVC composite overlays",
    "r_value": "R-18.0",
    "thickness_in": 2.5,
    "density_lbs_sqft": 2.85,
    "weight_confidence": "verified",
    "data_source": "Richards-Wilcox Architectural Design Guide Echo Ridge",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Architectural grid arched window section (+15 lbs/section over standard)",
    "strut_options": "Standard U-bars integrated into composite overlay back",
    "stamp_location": "Inside section #2 right end stile",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Heavy composite exterior overlay on 2in Neufoam steel door; requires high-torque spring sizing.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "26-gauge steel base + Cellular PVC composite overlays",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "rw-thermatite-t175",
    "manufacturer": "Richards-Wilcox",
    "series": "Thermatite Commercial",
    "model_name": "Thermatite T-175 (Commercial R-16)",
    "category": "commercial",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge exterior / 26-gauge interior",
    "r_value": "R-16.0",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.5,
    "weight_confidence": "verified",
    "data_source": "Richards-Wilcox Commercial Sectional Specs T-175",
    "last_verified": "2026-08",
    "common_sizes": [
      "10x10",
      "12x12",
      "12x14",
      "14x14",
      "16x14",
      "16x16"
    ],
    "window_options": "24x12 insulated sealed dual-acrylic windows (+7.5 lbs/ea); full-view glass panels (+55 lbs/sec)",
    "strut_options": "3in 16ga galvanized hat truss (+1.45 lbs/ft); 4in heavy truss (+2.20 lbs/ft)",
    "stamp_location": "Metal riveted certification plate on bottom section and serial sticker on section #3",
    "status": "current",
    "constructionVal": "commercial-heavy",
    "notes": "Continuous zero-ozone-depleting Neufoam core with dual vinyl bulb weatherstripping.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge exterior / 26-gauge interior",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "rw-thermatite-t200",
    "manufacturer": "Richards-Wilcox",
    "series": "Thermatite Commercial",
    "model_name": "Thermatite T-200 (Heavy Commercial R-18)",
    "category": "commercial",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge / 20-gauge options",
    "r_value": "R-18.0",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.85,
    "weight_confidence": "verified",
    "data_source": "Richards-Wilcox Technical Manual T-200",
    "last_verified": "2026-08",
    "common_sizes": [
      "12x12",
      "14x14",
      "16x14",
      "16x16",
      "18x16",
      "20x16"
    ],
    "window_options": "Thermal break glass sections (+60 lbs/sec)",
    "strut_options": "3in and 4in heavy commercial trusses (+1.45 to +2.20 lbs/ft)",
    "stamp_location": "Metal plate on interior end stile",
    "status": "current",
    "constructionVal": "commercial-heavy",
    "notes": "2in thick heavy commercial model with full steel thermal break.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge / 20-gauge options",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "rw-alumatite",
    "manufacturer": "Richards-Wilcox",
    "series": "Commercial Aluminum",
    "model_name": "Alumatite (Commercial Aluminum Full-View)",
    "category": "commercial",
    "construction_type": "aluminum full-view",
    "panel_gauge": "Extruded 6063-T6 Aluminum (0.075in rails)",
    "r_value": "N/A",
    "thickness_in": 1.75,
    "density_lbs_sqft": 3.4,
    "weight_confidence": "verified",
    "data_source": "Richards-Wilcox Alumatite Product Brochure",
    "last_verified": "2026-08",
    "common_sizes": [
      "10x10",
      "12x12",
      "14x14",
      "16x14"
    ],
    "window_options": "1/8in tempered glass (3.40 lb/sqft); 1/4in tempered (4.00 lb/sqft); 1/2in insulated (4.60 lb/sqft)",
    "strut_options": "Integrated tubular aluminum horizontal rails",
    "stamp_location": "Bottom rail stamped label",
    "status": "current",
    "constructionVal": "fullview-glass",
    "notes": "Commercial service station and auto dealership full-view door.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Extruded 6063-T6 Aluminum (0.075in rails)",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "amarr-designers-choice",
    "manufacturer": "Amarr",
    "series": "Designer's Choice / Olympus",
    "model_name": "Designer's Choice / Olympus (2in Polyurethane, R-19.4)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "27-gauge steel",
    "r_value": "R-19.4",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.3,
    "weight_confidence": "verified",
    "data_source": "Amarr Residential Technical Specifications Manual (Entrematic)",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "10x7",
      "16x7",
      "16x8",
      "18x8"
    ],
    "window_options": "DecraGlass & Mosaic windows (+7.0 lbs/lite); vertical stacking options (+28 lbs/section)",
    "strut_options": "2-1/4in 20ga galvanized U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior bottom section or section #2 end stile ink stencil with plant code (NC or KS)",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Features Amarr SafeGuard pinch-protection joint contour and low-profile flush hinges. Commonly finished in woodtone prints (Weathered Gray, Dark Oak, Walnut).",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "27-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "amarr-heritage-flush",
    "manufacturer": "Amarr",
    "series": "Heritage Collection",
    "model_name": "Heritage Flush / Plank (Heavy 24ga Steel)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "Heavy 24-gauge steel",
    "r_value": "R-9.05",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.75,
    "weight_confidence": "verified",
    "data_source": "Amarr Heritage Technical Product Data",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "DecraTrim / DecraGlass insulated lites (+7.0 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile or bottom rail stencil",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "Heavy 24-gauge exterior steel with SafeGuard pinch-resistant joints and polystyrene insulation.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Heavy 24-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "amarr-classica",
    "manufacturer": "Amarr",
    "series": "Classica Collection",
    "model_name": "Classica (3-Section Carriage, R-13.3)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "24-gauge steel exterior",
    "r_value": "R-13.3",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.15,
    "weight_confidence": "verified",
    "data_source": "Amarr Classica Engineering Specifications",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Tall arched top section windows (+18 lbs across top section)",
    "strut_options": "2-1/4in U-bar standard on 16ft wide (+0.85 lbs/ft)",
    "stamp_location": "Interior middle section stencil",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Unique 3-section tall panel design (sections are 28in tall instead of 21in); requires taller lift radius calculation.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "24-gauge steel exterior",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "amarr-lincoln-1000",
    "manufacturer": "Amarr",
    "series": "Lincoln Collection",
    "model_name": "Lincoln 1000 (Single-Layer Pan 25ga)",
    "category": "residential",
    "construction_type": "single-layer steel",
    "panel_gauge": "25-gauge steel",
    "r_value": "None",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.25,
    "weight_confidence": "verified",
    "data_source": "Amarr Builder Series Product Spec",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Single-pane glass lites (+5.0 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior skin stencil near center stile",
    "status": "current",
    "constructionVal": "pan-25",
    "notes": "Single-layer hollow steel pan door with SafeGuard pinch-protection.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "25-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "amarr-lincoln-2000",
    "manufacturer": "Amarr",
    "series": "Lincoln Collection",
    "model_name": "Lincoln 2000 (Double-Layer Polystyrene Vinyl-Back)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "25-gauge steel",
    "r_value": "R-6.6",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.6,
    "weight_confidence": "verified",
    "data_source": "Amarr Builder Series Product Spec",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Standard insulated lites (+6.0 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior vinyl backing stencil",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "Polystyrene board insulation with vinyl backing.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "25-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "amarr-commercial-2700",
    "manufacturer": "Amarr",
    "series": "Commercial Sectional",
    "model_name": "Model 2700 / 2742 (Commercial 2in Polyurethane R-19.4)",
    "category": "commercial",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "27-gauge exterior / 27-gauge interior steel",
    "r_value": "R-19.4",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.75,
    "weight_confidence": "verified",
    "data_source": "Amarr Commercial Sectional 2700 Technical Data",
    "last_verified": "2026-08",
    "common_sizes": [
      "10x10",
      "12x12",
      "14x14",
      "16x14",
      "16x16"
    ],
    "window_options": "24x12 dual insulated lites (+7.5 lbs/ea); full-view glass sections (+55 lbs/sec)",
    "strut_options": "3in 16ga commercial hat truss (+1.45 lbs/ft); 4in heavy truss (+2.10 lbs/ft)",
    "stamp_location": "Metal certification plate riveted to end stile of section #2",
    "status": "current",
    "constructionVal": "commercial-heavy",
    "notes": "High-thermal commercial door with foamed-in-place polyurethane.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "27-gauge exterior / 27-gauge interior steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "amarr-commercial-2400",
    "manufacturer": "Amarr",
    "series": "Commercial Ribbed",
    "model_name": "Model 2400 (Heavy 24ga Steel Commercial Pan)",
    "category": "commercial",
    "construction_type": "single-layer steel",
    "panel_gauge": "Heavy 24-gauge steel",
    "r_value": "None (R-6.6 optional)",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.65,
    "weight_confidence": "estimated",
    "data_source": "Estimated from nominal 24ga commercial ribbed pan steel construction",
    "last_verified": "2026-08",
    "common_sizes": [
      "10x10",
      "12x12",
      "14x14",
      "16x14"
    ],
    "window_options": "24x12 DSB acrylic lites (+6.0 lbs/ea)",
    "strut_options": "2-1/4in commercial U-bar (+0.85 lbs/ft); 3in truss (+1.45 lbs/ft)",
    "stamp_location": "Stenciled on inside center stile",
    "status": "current",
    "constructionVal": "commercial-heavy",
    "notes": "Deeply ribbed 24ga commercial steel pan door.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Heavy 24-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "amarr-horizon",
    "manufacturer": "Amarr",
    "series": "Horizon Modern",
    "model_name": "Horizon / Vista (Full-View Glass)",
    "category": "residential",
    "construction_type": "aluminum full-view",
    "panel_gauge": "Extruded Aluminum 2in frame",
    "r_value": "N/A",
    "thickness_in": 2.0,
    "density_lbs_sqft": 3.3,
    "weight_confidence": "verified",
    "data_source": "Amarr Vista & Horizon Architectural Specifications",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "1/8in tempered glass (3.30 lb/sqft); 1/4in tempered (3.90 lb/sqft); insulated laminated (4.50 lb/sqft)",
    "strut_options": "Integrated tubular aluminum horizontal members",
    "stamp_location": "Bottom rail stamped label",
    "status": "current",
    "constructionVal": "fullview-glass",
    "notes": "Modern aluminum garage door with full glass lites.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Extruded Aluminum 2in frame",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "chi-planks-2283",
    "manufacturer": "C.H.I.",
    "series": "Planks Collection",
    "model_name": "Model 2283 / 4283 Planks (Accent Woodtones, Polystyrene R-9.65)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "27-gauge steel (2-sided)",
    "r_value": "R-9.65",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.75,
    "weight_confidence": "verified",
    "data_source": "C.H.I. Overhead Doors Model 2283/4283 spec sheet (chiohd.com, 2025-02 revision)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "10x7",
      "16x7",
      "16x8",
      "18x8"
    ],
    "window_options": "Oversized contemporary glass lites (+12.0 lbs/lite); vertical stack (+40 lbs/sec)",
    "strut_options": "2-1/4in 20ga galvanized U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior stenciled stamp on section #2 or inside left end stile",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "CORRECTED Sept 2026: previously listed as R-17.54 three-layer polyurethane, which does not match C.H.I.'s published spec for this model (that R-value belongs to a different C.H.I. line). Verified spec: 2\" thick, 1-13/16\" CFC-free polystyrene glued both sides, 27ga steel skins, R-9.65. A polyurethane-insulated Planks-style option exists under C.H.I.'s Sterling line at higher R-value -- see chi-sterling-2717.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "27-gauge steel (2-sided)",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "chi-flush-2284",
    "manufacturer": "C.H.I.",
    "series": "Skyline Flush",
    "model_name": "Model 2284 / 2214 Skyline Flush (R-17.5)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "27-gauge steel",
    "r_value": "R-17.54",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.25,
    "weight_confidence": "verified",
    "data_source": "C.H.I. Skyline Flush Technical Product Data",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Contemporary side-stacked window inserts (+11 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior section #2 stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Completely flush modern exterior panel with continuous polyurethane foam.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "27-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "chi-raised-panel-2250",
    "manufacturer": "C.H.I.",
    "series": "Raised Panel",
    "model_name": "Model 2250 (Single-Layer Pan 25ga)",
    "category": "residential",
    "construction_type": "single-layer steel",
    "panel_gauge": "25-gauge steel",
    "r_value": "None",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.25,
    "weight_confidence": "estimated",
    "data_source": "Estimated from standard 25ga embossed pan steel construction",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Single-pane colonial or ranch window lites (+5.0 lbs/lite)",
    "strut_options": "2-1/4in U-bar standard on 16ft (+0.85 lbs/ft)",
    "stamp_location": "Stenciled on inside center stile",
    "status": "current",
    "constructionVal": "pan-25",
    "notes": "Classic uninsulated single-layer pan steel door.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "25-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "chi-carriage-5283",
    "manufacturer": "C.H.I.",
    "series": "Carriage House",
    "model_name": "Model 5283 / 5983 Carriage House Stamped (Polystyrene R-9.65)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "27-gauge steel with composite overlays (2-sided)",
    "r_value": "R-9.65",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.05,
    "weight_confidence": "verified",
    "data_source": "C.H.I. Overhead Doors Model 5283/5983 spec sheet (gdsomaha.com hosted PDF)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Arched carriage top windows (+15 lbs across top section)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior stencil on section #2",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "CORRECTED Sept 2026: previously listed as R-17.54 three-layer polyurethane; verified spec sheet confirms 1-13/16\" CFC-free polystyrene glued both sides, R-9.65, same insulation tier as Planks 2283/4283. Density estimated slightly above plain Planks to account for the applied composite carriage-house overlay boards.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "27-gauge steel with composite overlays (2-sided)",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "chi-commercial-3285",
    "manufacturer": "C.H.I.",
    "series": "Commercial Micro-Grooved",
    "model_name": "Model 3285 / 3216 (Commercial 2in Polyurethane R-17.5)",
    "category": "commercial",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge exterior / 27-gauge interior",
    "r_value": "R-17.54",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.75,
    "weight_confidence": "verified",
    "data_source": "C.H.I. Commercial Engineering Specifications 3285",
    "last_verified": "2026-08",
    "common_sizes": [
      "10x10",
      "12x12",
      "14x14",
      "16x14",
      "16x16"
    ],
    "window_options": "24x12 insulated glass (+7.5 lbs/ea); full-vision aluminum section (+55 lbs/sec)",
    "strut_options": "3in 16ga galvanized hat truss (+1.45 lbs/ft); 4in heavy truss (+2.20 lbs/ft)",
    "stamp_location": "Metal plate riveted to interior end stile",
    "status": "current",
    "constructionVal": "commercial-heavy",
    "notes": "Micro-grooved commercial steel sandwich door for high-thermal requirements.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge exterior / 27-gauge interior",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "clopay-classic-3000",
    "manufacturer": "Clopay",
    "series": "Classic Steel / Premium",
    "model_name": "Classic Steel 3000 (Intellicore R-18.4)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "27-gauge steel",
    "r_value": "R-18.4",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.25,
    "weight_confidence": "verified",
    "data_source": "Clopay Building Products Technical Data Sheet TDS-101",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "10x7",
      "16x7",
      "16x8",
      "18x7",
      "18x8"
    ],
    "window_options": "Colonial / Ranch insulated lites (+6.5 lbs/lite); frosted / tinted architectural (+8.5 lbs/lite)",
    "strut_options": "2-1/4in 20ga galvanized T-strut (+0.85 lbs/ft); 3in truss for high-wind (+1.35 lbs/ft)",
    "stamp_location": "Inside bottom corner sticker and stenciled serial on section #2 end stile with Clopay logo",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Features Clopay proprietary Intellicore injected polyurethane foam with thermal break.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "27-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "clopay-modern-steel",
    "manufacturer": "Clopay",
    "series": "Modern Steel Collection",
    "model_name": "Modern Steel (Intellicore R-18.4)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "27-gauge steel",
    "r_value": "R-18.4",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.25,
    "weight_confidence": "verified",
    "data_source": "Clopay Modern Steel Architectural Spec Sheet",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Contemporary side-aligned insulated glass lites (+12.0 lbs/lite)",
    "strut_options": "2-1/4in T-strut (+0.85 lbs/ft)",
    "stamp_location": "Inside end stile ink stencil",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Flush or grooved exterior panel with Ultra-Grain woodtone finishes (Cypress, Walnut, Cherry).",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "27-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "clopay-canyon-ridge",
    "manufacturer": "Clopay",
    "series": "Canyon Ridge Collection",
    "model_name": "Canyon Ridge (Ultra-Custom R-20.4)",
    "category": "residential",
    "construction_type": "composite overlay",
    "panel_gauge": "27-gauge steel base + 1/2in Composite cladding",
    "r_value": "R-20.4",
    "thickness_in": 2.5,
    "density_lbs_sqft": 3.85,
    "weight_confidence": "verified",
    "data_source": "Clopay Canyon Ridge Technical Manual TDS-150",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Heavy leaded / insulated seeded glass windows (+22 lbs/section)",
    "strut_options": "Heavy-duty 3in structural reinforcement struts factory mounted (+1.45 lbs/ft)",
    "stamp_location": "Riveted metal tag on bottom section end stile",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Extremely heavy high-end faux-wood composite cladding door. A 16x7 weighs ~430 lbs; requires heavy 2-5/8in or duplex commercial spring configurations.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "27-gauge steel base + 1/2in Composite cladding",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "clopay-classic-1000",
    "manufacturer": "Clopay",
    "series": "Classic Steel",
    "model_name": "Classic Steel 1000 (Single-Layer Pan 25ga)",
    "category": "residential",
    "construction_type": "single-layer steel",
    "panel_gauge": "25-gauge steel",
    "r_value": "None",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.25,
    "weight_confidence": "verified",
    "data_source": "Clopay TDS-100 Classic Steel Spec Sheet",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Standard uninsulated glass inserts (+5.0 lbs/lite)",
    "strut_options": "2-1/4in T-strut (+0.85 lbs/ft)",
    "stamp_location": "Stenciled on inside center stile",
    "status": "current",
    "constructionVal": "pan-25",
    "notes": "Single-layer uninsulated steel pan door.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "25-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "clopay-classic-2000",
    "manufacturer": "Clopay",
    "series": "Classic Steel",
    "model_name": "Classic Steel 2000 (Double-Layer Polystyrene)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "25-gauge steel",
    "r_value": "R-6.5",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.65,
    "weight_confidence": "verified",
    "data_source": "Clopay TDS-100 Classic Steel Spec Sheet",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Insulated glass lites (+6.0 lbs/lite)",
    "strut_options": "2-1/4in T-strut (+0.85 lbs/ft)",
    "stamp_location": "Interior vinyl backing stencil",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "25ga steel pan with expanded polystyrene and vinyl backer.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "25-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "clopay-commercial-3720",
    "manufacturer": "Clopay",
    "series": "Commercial Sectional",
    "model_name": "Model 3720 / 3724 (Commercial 2in Intellicore R-18.4)",
    "category": "commercial",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "27-gauge exterior / 27-gauge interior",
    "r_value": "R-18.4",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.8,
    "weight_confidence": "verified",
    "data_source": "Clopay Commercial Architectural Spec Binder 3720",
    "last_verified": "2026-08",
    "common_sizes": [
      "10x10",
      "12x12",
      "14x14",
      "16x14",
      "16x16",
      "20x16"
    ],
    "window_options": "24x12 double-pane insulated windows (+8 lbs/ea); full-vision section (+55 lbs/sec)",
    "strut_options": "3in 16ga galvanized hat truss (+1.45 lbs/ft); 4in heavy truss (+2.20 lbs/ft)",
    "stamp_location": "Metal plate riveted to bottom end stile and certification sticker on section #3",
    "status": "current",
    "constructionVal": "commercial-heavy",
    "notes": "Heavy commercial door with thermal break and continuous backing plates.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "27-gauge exterior / 27-gauge interior",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "clopay-avante",
    "manufacturer": "Clopay",
    "series": "Avante Collection",
    "model_name": "Avante Model AX / 904 (Aluminum Full-View)",
    "category": "residential",
    "construction_type": "aluminum full-view",
    "panel_gauge": "Extruded Aluminum 2-1/8in frame",
    "r_value": "N/A",
    "thickness_in": 2.125,
    "density_lbs_sqft": 3.4,
    "weight_confidence": "verified",
    "data_source": "Clopay Avante Technical Specifications",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "1/8in tempered (3.40 lb/sqft); 1/4in laminated (4.10 lb/sqft); 1/2in insulated (4.60 lb/sqft)",
    "strut_options": "Built-in integral tubular aluminum horizontal supports",
    "stamp_location": "Stenciled on bottom rail inside face",
    "status": "current",
    "constructionVal": "fullview-glass",
    "notes": "Heavy architectural aluminum full-view glass door.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Extruded Aluminum 2-1/8in frame",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "hormann-taurus-4250",
    "manufacturer": "Hormann",
    "series": "Taurus Series",
    "model_name": "Taurus 4250 (1-3/4in Polyurethane, R-16.1)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-16.1",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.2,
    "weight_confidence": "verified",
    "data_source": "Hormann LLC Technical Product Specifications Taurus 4250",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Standard 24x12 insulated lites (+6.5 lbs/lite); cross-mullion inserts (+7.5 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior label on end stile of section #2 with German/US serial code",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "German engineered steel sandwich door with thermal break and between-section seals.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "hormann-orion-4200",
    "manufacturer": "Hormann",
    "series": "Orion Series",
    "model_name": "Orion 4200 (Double-Layer Polystyrene R-8.9)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "25-gauge steel",
    "r_value": "R-8.9",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.65,
    "weight_confidence": "verified",
    "data_source": "Hormann Orion 4200 Product Data Sheet",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Standard lites (+6.0 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior vinyl back stencil",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "25-gauge steel pan with CFC-free polystyrene insulation and vinyl backing.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "25-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "hormann-gemini-2100",
    "manufacturer": "Hormann",
    "series": "Gemini Series",
    "model_name": "Gemini 2100 (Single-Layer Pan 25ga)",
    "category": "residential",
    "construction_type": "single-layer steel",
    "panel_gauge": "25-gauge steel",
    "r_value": "None",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.25,
    "weight_confidence": "verified",
    "data_source": "Hormann Gemini 2100 Product Spec",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Single-pane lites (+5.0 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Stenciled on inside center stile",
    "status": "current",
    "constructionVal": "pan-25",
    "notes": "Uninsulated 25-gauge embossed steel pan door.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "25-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "hormann-sr9000",
    "manufacturer": "Hormann",
    "series": "Commercial Heavy",
    "model_name": "SR 9000 (Commercial Heavy Duty R-17.5)",
    "category": "commercial",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "24-gauge exterior / 26-gauge interior",
    "r_value": "R-17.5",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.85,
    "weight_confidence": "verified",
    "data_source": "Hormann Commercial Sectional Manual SR 9000",
    "last_verified": "2026-08",
    "common_sizes": [
      "10x10",
      "12x12",
      "14x14",
      "16x14",
      "16x16"
    ],
    "window_options": "Insulated double-acrylic windows (+8 lbs/ea); full-vision aluminum section (+55 lbs/sec)",
    "strut_options": "3in 16ga hat truss (+1.45 lbs/ft); 4in heavy commercial truss (+2.20 lbs/ft)",
    "stamp_location": "Metal serial tag on end stile",
    "status": "current",
    "constructionVal": "commercial-heavy",
    "notes": "Heavy commercial sectional door with reinforced hardware and dual weatherseals.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "24-gauge exterior / 26-gauge interior",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "wd-classic-8300",
    "manufacturer": "Wayne Dalton",
    "series": "Classic Steel 8300",
    "model_name": "Classic Steel 8300 (1-3/8in Polyurethane, R-12.12)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-12.12",
    "thickness_in": 1.375,
    "density_lbs_sqft": 1.85,
    "weight_confidence": "verified",
    "data_source": "Wayne Dalton Technical Data Sheet 8300/8500",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Colonial / Ranch insulated lites (+6.0 lbs/lite); contemporary vertical (+10 lbs/lite)",
    "strut_options": "Wayne Dalton integral top strut or 2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior ink stamp on top edge of section #2 with serial code and Julian date",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "Features Wayne Dalton integral pinch-resistant tongue-and-groove joint profile.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "wd-classic-8500",
    "manufacturer": "Wayne Dalton",
    "series": "Classic Steel 8500",
    "model_name": "Classic Steel 8500 (2in Polyurethane, R-16.22)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-16.22",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.3,
    "weight_confidence": "verified",
    "data_source": "Wayne Dalton Technical Data Sheet 8300/8500",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Insulated designer glass lites (+7.0 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Inside end stile or section #2 face stencil",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "2in thick foamed-in-place polyurethane core with thermal break.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "wd-model-9100",
    "manufacturer": "Wayne Dalton",
    "series": "Model 9100",
    "model_name": "Model 9100 (Toughgard Vinyl-Back R-9.0)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "25-gauge steel + Vinyl Back",
    "r_value": "R-9.0",
    "thickness_in": 1.25,
    "density_lbs_sqft": 1.6,
    "weight_confidence": "verified",
    "data_source": "Wayne Dalton Model 9100 Spec Sheet",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Snap-in window inserts (+5.5 lbs/lite)",
    "strut_options": "Integral patented top strut",
    "stamp_location": "Toughgard backing printed label and TorqueMaster counter label",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "Famous for patented teardrop pinch-resistant joint profile. Often originally installed with TorqueMaster springs; frequently converted to torsion.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "25-gauge steel + Vinyl Back",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "wd-classic-8000",
    "manufacturer": "Wayne Dalton",
    "series": "Classic Steel 8000",
    "model_name": "Classic Steel 8000 / 8100 (Single-Layer Pan 25ga)",
    "category": "residential",
    "construction_type": "single-layer steel",
    "panel_gauge": "25-gauge steel",
    "r_value": "None",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.2,
    "weight_confidence": "estimated",
    "data_source": "Estimated from nominal 25ga residential pan construction",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Standard glass inserts (+5.0 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Stenciled on inside center stile",
    "status": "current",
    "constructionVal": "pan-25",
    "notes": "Lightweight uninsulated 25-gauge pan door.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "25-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "wd-thermospan-200",
    "manufacturer": "Wayne Dalton",
    "series": "Thermospan Commercial",
    "model_name": "Thermospan 200 (Commercial 2in Polyurethane R-17.5)",
    "category": "commercial",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge exterior / 26-gauge interior",
    "r_value": "R-17.5",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.85,
    "weight_confidence": "verified",
    "data_source": "Wayne Dalton Thermospan 200 Commercial Manual",
    "last_verified": "2026-08",
    "common_sizes": [
      "10x10",
      "12x12",
      "14x14",
      "16x14",
      "16x16"
    ],
    "window_options": "24x12 insulated DSB windows (+8 lbs/ea); aluminum full-view section (+55 lbs/sec)",
    "strut_options": "3in 16ga commercial hat truss (+1.45 lbs/ft); 4in heavy truss (+2.20 lbs/ft)",
    "stamp_location": "Metal plate on interior end stile",
    "status": "current",
    "constructionVal": "commercial-heavy",
    "notes": "Patented continuous thermal break with interlock joint for heavy commercial facilities.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge exterior / 26-gauge interior",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "haas-700-series",
    "manufacturer": "Haas",
    "series": "700 Series",
    "model_name": "Haas 700 Series (1-3/4in Polyurethane, R-16.18)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge galvanized steel",
    "r_value": "R-16.18",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.2,
    "weight_confidence": "verified",
    "data_source": "Haas Door Technical Specifications Catalog 700",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Standard insulated window lites (+6.5 lbs/lite); decorative wrought iron (+9.0 lbs/lite)",
    "strut_options": "2-1/4in galvanized U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior stenciled date & model code on section #2 left end stile",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Injected polyurethane foam with vinyl thermal break between skins.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge galvanized steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "haas-600-series",
    "manufacturer": "Haas",
    "series": "600 Series",
    "model_name": "Haas 600 Series (1-3/8in Polyurethane, R-13.45)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-13.45",
    "thickness_in": 1.375,
    "density_lbs_sqft": 2.0,
    "weight_confidence": "verified",
    "data_source": "Haas Door 600 Series Spec Sheet",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Insulated lites (+6.0 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stencil",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "1-3/8in polyurethane core residential model.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "haas-2000-commercial",
    "manufacturer": "Haas",
    "series": "2000 Series Commercial",
    "model_name": "Haas 2000 Series (Commercial 2in Polyurethane R-17.66)",
    "category": "commercial",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge exterior / 26-gauge interior",
    "r_value": "R-17.66",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.75,
    "weight_confidence": "verified",
    "data_source": "Haas Commercial Sectional Specifications 2000",
    "last_verified": "2026-08",
    "common_sizes": [
      "10x10",
      "12x12",
      "14x14",
      "16x14",
      "16x16"
    ],
    "window_options": "24x12 insulated windows (+7.5 lbs/ea); full-vision aluminum section (+55 lbs/sec)",
    "strut_options": "3in 16ga galvanized hat truss (+1.45 lbs/ft); 4in heavy truss (+2.20 lbs/ft)",
    "stamp_location": "Metal plate riveted to end stile of section #2",
    "status": "current",
    "constructionVal": "commercial-heavy",
    "notes": "High-density commercial sectional door with heavy-duty internal hinge backup plates.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge exterior / 26-gauge interior",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "haas-240-pan",
    "manufacturer": "Haas",
    "series": "240 / 250 Series",
    "model_name": "Haas 240 / 250 (Steel Pan 24/25ga)",
    "category": "residential",
    "construction_type": "single-layer steel",
    "panel_gauge": "24-gauge / 25-gauge steel options",
    "r_value": "None (R-7.45 optional)",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.3,
    "weight_confidence": "estimated",
    "data_source": "Estimated from 24/25ga residential steel pan construction benchmark",
    "last_verified": "2026-07",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Standard single-pane lites (+5.0 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior center stile stencil",
    "status": "current",
    "constructionVal": "pan-25",
    "notes": "Economy residential steel pan door.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "24-gauge / 25-gauge steel options",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "nwd-therma-tech",
    "manufacturer": "Northwest",
    "series": "Therma Tech Series",
    "model_name": "Therma Tech (1-1/2in Polystyrene R-9.0)",
    "category": "residential",
    "construction_type": "three-layer polystyrene",
    "panel_gauge": "26-gauge galvanized steel",
    "r_value": "R-9.0",
    "thickness_in": 1.5,
    "density_lbs_sqft": 1.7,
    "weight_confidence": "verified",
    "data_source": "Northwest Door Engineering Specifications Therma Tech",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Colonial / Ranch insulated lites (+6.0 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior stenciled stamp on section #2 near left end stile",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "Popular builder model throughout the Pacific Northwest and Western Canada.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polystyrene",
        "exterior_skin_gauge": "26-gauge galvanized steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "nwd-therma-tech-2",
    "manufacturer": "Northwest",
    "series": "Therma Tech Series",
    "model_name": "Therma Tech II (2in Polystyrene R-10.4)",
    "category": "residential",
    "construction_type": "three-layer polystyrene",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-10.4",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.85,
    "weight_confidence": "verified",
    "data_source": "Northwest Door Product Manual Therma Tech II",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Insulated lites (+6.5 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stencil",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "2in polystyrene insulated sandwich construction.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polystyrene",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "nwd-therma-max",
    "manufacturer": "Northwest",
    "series": "Therma Max",
    "model_name": "Therma Max (2in Polyurethane R-16.0)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "26-gauge steel",
    "r_value": "R-16.0",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.2,
    "weight_confidence": "verified",
    "data_source": "Northwest Door High Thermal Specification",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Thermal break insulated window inserts (+7.0 lbs/lite)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior section #2 stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Continuous polyurethane foam with flexible thermal break.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "26-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "nwd-500-commercial",
    "manufacturer": "Northwest",
    "series": "500 Series Commercial",
    "model_name": "500 Series (24ga Commercial Steel Ribbed)",
    "category": "commercial",
    "construction_type": "single-layer steel",
    "panel_gauge": "Heavy 24-gauge steel",
    "r_value": "None (R-7 optional)",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.5,
    "weight_confidence": "estimated",
    "data_source": "Estimated from 24ga industrial ribbed pan steel benchmark",
    "last_verified": "2026-08",
    "common_sizes": [
      "10x10",
      "12x12",
      "14x14",
      "16x14"
    ],
    "window_options": "24x12 DSB acrylic lites (+6.0 lbs/ea)",
    "strut_options": "2-1/4in commercial U-bar (+0.85 lbs/ft); 3in truss (+1.45 lbs/ft)",
    "stamp_location": "Metal plate on interior end stile",
    "status": "current",
    "constructionVal": "commercial-heavy",
    "notes": "Standard commercial ribbed pan door for warehouses and light industrial shops.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Heavy 24-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "nwd-modern-classic",
    "manufacturer": "Northwest",
    "series": "Modern Classic",
    "model_name": "Modern Classic (Aluminum Full-View)",
    "category": "residential",
    "construction_type": "aluminum full-view",
    "panel_gauge": "Extruded 6063-T6 Aluminum (0.075in)",
    "r_value": "N/A",
    "thickness_in": 1.75,
    "density_lbs_sqft": 3.35,
    "weight_confidence": "verified",
    "data_source": "Northwest Door Modern Classic Architecture Guide",
    "last_verified": "2026-08",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "1/8in clear glass (3.35 lb/sqft); 1/4in laminated (4.00 lb/sqft); 1/2in insulated (4.50 lb/sqft)",
    "strut_options": "Integral tubular horizontal rails",
    "stamp_location": "Bottom rail stamped label",
    "status": "current",
    "constructionVal": "fullview-glass",
    "notes": "Extruded aluminum residential and commercial full-view door.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Extruded 6063-T6 Aluminum (0.075in)",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "clopay-gallery-steel",
    "manufacturer": "Clopay",
    "series": "Gallery Steel Collection",
    "model_name": "Gallery Steel (Intellicore Polyurethane R-18.4)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "24-gauge steel",
    "r_value": "R-18.4",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.3,
    "weight_confidence": "estimated",
    "data_source": "Clopay product pages (clopaydoor.com); density estimated from same Intellicore construction tier as Classic Steel 3000 / Modern Steel",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Grooved-panel arch/rectangle lites (+8.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile ID label",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Carriage-style grooved-panel design on Clopay's standard Intellicore polyurethane platform -- same insulation tier as Classic Steel 3000/Modern Steel, different panel styling.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "24-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "clopay-bridgeport",
    "manufacturer": "Clopay",
    "series": "Bridgeport Collection",
    "model_name": "Bridgeport Steel (Intellicore Polyurethane R-18.4)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "24-gauge steel",
    "r_value": "R-18.4",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.3,
    "weight_confidence": "estimated",
    "data_source": "Clopay product pages (clopaydoor.com); density estimated from same Intellicore construction tier as Classic Steel 3000",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Shaker recessed-panel arch lites (+8.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile ID label",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Shaker-style recessed-panel design (also sold as Bridgeport Inlay); same Intellicore R-18.4 construction tier as Classic Steel 3000.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "24-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "clopay-coachman-grandharbor",
    "manufacturer": "Clopay",
    "series": "Coachman / Grand Harbor Collection",
    "model_name": "Coachman / Grand Harbor (Steel + Composite Overlay, ~R-6.3)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "25-gauge steel with applied composite overlay",
    "r_value": "R-6.3",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.1,
    "weight_confidence": "estimated",
    "data_source": "doorservpro.com Clopay brand guide (R-6.3 for polystyrene-backed overlay tier); density estimated from steel+overlay construction",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Arched carriage-top windows (+10 lbs across top section)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile ID label",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "Steel carriage-house door with applied composite overlay boards on a polystyrene-insulated base -- lighter insulation tier than Canyon Ridge's 4/5-layer composite doors.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "25-gauge steel with applied composite overlay",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "clopay-reserve-wood",
    "manufacturer": "Clopay",
    "series": "Reserve Wood / Classic Wood Collection",
    "model_name": "Reserve Wood (Custom Hardwood, Species-Dependent)",
    "category": "residential",
    "construction_type": "wood - custom",
    "panel_gauge": "N/A (solid/veneered wood panel)",
    "r_value": "None (uninsulated unless custom-ordered)",
    "thickness_in": 1.75,
    "density_lbs_sqft": 3.0,
    "weight_confidence": "estimated",
    "data_source": "Clopay product pages; weight is a rough midpoint estimate only -- real wood door weight varies significantly by species, panel thickness and finish and is normally quoted per-order",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Custom true-divided-lite wood windows (weight varies by species/size)",
    "strut_options": "Wood cross-bracing or steel reinforcement per manufacturer spec",
    "stamp_location": "No standard factory stamp -- custom order tag",
    "status": "current",
    "constructionVal": "wood-solid",
    "notes": "Custom hardwood door (cedar, hemlock, redwood, etc). Weight varies far more than steel doors -- treat this density as a rough planning estimate only, not a substitute for the actual order spec.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "N/A (solid/veneered wood panel)",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "clopay-avante-sleek-vertistack",
    "manufacturer": "Clopay",
    "series": "Avante Sleek / VertiStack Avante",
    "model_name": "Avante Sleek / VertiStack (Aluminum Full-View)",
    "category": "residential",
    "construction_type": "aluminum full-view",
    "panel_gauge": "Extruded aluminum frame",
    "r_value": "N/A",
    "thickness_in": 2.0,
    "density_lbs_sqft": 3.4,
    "weight_confidence": "estimated",
    "data_source": "Clopay product pages; density carried over from Avante Model AX/904 (same aluminum-glass construction, styling variant only)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Full-height glass infill standard; frosted/tinted options similar weight",
    "strut_options": "Integral aluminum horizontal rails",
    "stamp_location": "Bottom rail ID label",
    "status": "current",
    "constructionVal": "fullview-glass",
    "notes": "Styling/track variants of the Avante aluminum-glass platform (Sleek = narrower stile, VertiStack = compact vertical stacking for low headroom) -- same frame construction and weight class as Avante Model AX.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Extruded aluminum frame",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "amarr-stratford",
    "manufacturer": "Amarr",
    "series": "Stratford Collection",
    "model_name": "Stratford (Standard-Gauge Steel, R-6.5)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "Standard-gauge steel",
    "r_value": "R-6.5",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.6,
    "weight_confidence": "estimated",
    "data_source": "commonwealthgaragedoors.com Amarr collection summary (R-6.48-6.64); density estimated from same 2-layer tier as Lincoln 2000",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Standard ranch window inserts (+5.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "Value-tier insulated steel door, similar construction class to Lincoln 2000 but standard (lighter) gauge steel.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Standard-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "amarr-coastal-vinyl",
    "manufacturer": "Amarr",
    "series": "Coastal Collection",
    "model_name": "Coastal (Solid Vinyl, R-8.16)",
    "category": "residential",
    "construction_type": "vinyl",
    "panel_gauge": "N/A (solid vinyl panel)",
    "r_value": "R-8.16",
    "thickness_in": 1.75,
    "density_lbs_sqft": 1.5,
    "weight_confidence": "estimated",
    "data_source": "commonwealthgaragedoors.com Amarr collection summary; density estimated -- vinyl is lighter than steel-and-foam construction of similar thickness, no manufacturer weight published",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Vinyl-framed lites (+4.0 lbs/ea)",
    "strut_options": "Steel reinforcement struts standard (manufacturer-installed)",
    "stamp_location": "Interior stamped ID tag",
    "status": "current",
    "constructionVal": "vinyl-solid",
    "notes": "Solid vinyl panel construction -- resists denting/corrosion in coastal climates. Genuinely different material from Amarr's steel lines, so treat this weight as a distinct construction category, not a steel-tier estimate.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "N/A (solid vinyl panel)",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "amarr-hillcrest",
    "manufacturer": "Amarr",
    "series": "Hillcrest Collection",
    "model_name": "Hillcrest (Value Steel Carriage House, R-6.5)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "25-gauge steel",
    "r_value": "R-6.5",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.65,
    "weight_confidence": "estimated",
    "data_source": "amarr.com collection pages; density estimated from same 2-layer construction tier as Stratford/Lincoln 2000",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Carriage-style arch lites (+7.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "Value-positioned steel carriage-house design -- same construction class as Stratford, styled with faux carriage hardware.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "25-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "wd-9405-carriage",
    "manufacturer": "Wayne Dalton",
    "series": "Model 9405 Carriage House",
    "model_name": "Model 9405 Carriage House Steel (Insulated, ~R-16 est.)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "25-gauge steel",
    "r_value": "R-16 (est.)",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.3,
    "weight_confidence": "estimated",
    "data_source": "kaisergarage.com Wayne Dalton residential listing (model number/construction only -- R-value not published on source page, estimated from Classic Steel 8500 construction tier)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Carriage-style arch lites (+8.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Low-maintenance steel carriage-house design; same general insulation tier assumed as Classic Steel 8500 pending a published R-value.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "25-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "wd-8800-modern-glass",
    "manufacturer": "Wayne Dalton",
    "series": "Model 8800 Modern Glass",
    "model_name": "Model 8800 Modern Glass (Aluminum Full-View)",
    "category": "residential",
    "construction_type": "aluminum full-view",
    "panel_gauge": "Extruded aluminum frame",
    "r_value": "N/A",
    "thickness_in": 1.75,
    "density_lbs_sqft": 3.3,
    "weight_confidence": "estimated",
    "data_source": "kaisergarage.com Wayne Dalton residential listing; density estimated from other manufacturers' aluminum full-view construction",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Full-height glass infill standard",
    "strut_options": "Integral aluminum horizontal rails",
    "stamp_location": "Bottom rail ID label",
    "status": "current",
    "constructionVal": "fullview-glass",
    "notes": "Aluminum-and-glass contemporary door, Wayne Dalton's equivalent to other manufacturers' full-view aluminum lines.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Extruded aluminum frame",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "chi-sterling-2717",
    "manufacturer": "C.H.I.",
    "series": "Sterling Collection",
    "model_name": "Model 2717 Sterling (Polyurethane R-15.07)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "24-gauge steel (2-sided)",
    "r_value": "R-15.07",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.25,
    "weight_confidence": "verified",
    "data_source": "chiohd.com Sterling collection page (2026-09 pull)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Minimalist linear lites (+7.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior section #2 stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Sterling's higher-R polyurethane variant. A lower-cost polystyrene variant (Model 2783, R-10.29) is also sold under the same collection name -- see notes on chi-planks-2283 for the equivalent lower tier.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "24-gauge steel (2-sided)",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "chi-shoreline-2717",
    "manufacturer": "C.H.I.",
    "series": "Shoreline Collection",
    "model_name": "Shoreline (2-1/2in Polyurethane, R-17.54)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "27-gauge steel (2-sided)",
    "r_value": "R-17.54",
    "thickness_in": 2.5,
    "density_lbs_sqft": 2.6,
    "weight_confidence": "verified",
    "data_source": "chiohd.com Shoreline collection page (2026-09 pull)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Coastal-style vertical lites (+8.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior section #2 stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "C.H.I.'s thickest standard residential door (2-1/2in) and the collection that actually carries the R-17.54 rating previously mis-assigned to Planks/Carriage House Stamped.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "27-gauge steel (2-sided)",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "chi-recessed-panel",
    "manufacturer": "C.H.I.",
    "series": "Recessed Panel",
    "model_name": "Recessed Panel (Polystyrene, ~R-9.65 est.)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "25-gauge steel",
    "r_value": "R-9.65 (est.)",
    "thickness_in": 2.0,
    "density_lbs_sqft": 1.75,
    "weight_confidence": "estimated",
    "data_source": "chiohd.com Recessed Panel collection listing (construction family only; R-value assumed same as other C.H.I. polystyrene-tier doors pending a model-specific spec sheet)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Recessed-panel arch lites (+6.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior section #2 stamp",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "Timeless-collection recessed-panel steel door on C.H.I.'s standard polystyrene platform.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "25-gauge steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "chi-full-view-aluminum",
    "manufacturer": "C.H.I.",
    "series": "Full-View Aluminum",
    "model_name": "Full-View Aluminum (Aluminum Full-View)",
    "category": "residential",
    "construction_type": "aluminum full-view",
    "panel_gauge": "Extruded aluminum frame",
    "r_value": "N/A",
    "thickness_in": 2.0,
    "density_lbs_sqft": 3.35,
    "weight_confidence": "estimated",
    "data_source": "chiohd.com Full-View collection listing; density estimated from other manufacturers' aluminum full-view construction",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Full-height glass infill standard",
    "strut_options": "Integral aluminum horizontal rails",
    "stamp_location": "Bottom rail ID label",
    "status": "current",
    "constructionVal": "fullview-glass",
    "notes": "C.H.I. previously had no full-view aluminum entry in this database despite it being a standard collection -- added for completeness.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Extruded aluminum frame",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "chi-overlay-carriage",
    "manufacturer": "C.H.I.",
    "series": "Overlay Carriage House",
    "model_name": "Overlay Carriage House (Steel + Composite Overlay, ~R-9.65 est.)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "25-gauge steel with composite overlay",
    "r_value": "R-9.65 (est.)",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.05,
    "weight_confidence": "estimated",
    "data_source": "chiohd.com Carriage collection listing; R-value/density estimated from same insulation tier as Carriage House Stamped 5283",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Arched carriage-top windows (+10 lbs across top section)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior section #2 stamp",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "Distinct from the all-steel Stamped Carriage House line -- uses applied wood/composite overlay boards, available in steel, wood or fiberglass per C.H.I.'s site.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "25-gauge steel with composite overlay",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "garaga-vantage",
    "manufacturer": "Garaga",
    "series": "Vantage Collection",
    "model_name": "Vantage (3-Layer Steel, R-15.1)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "3-layer steel",
    "r_value": "R-15.1",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.2,
    "weight_confidence": "verified",
    "data_source": "garaga.com selection guide (2026-09 pull)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Vantage window inserts (+7.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Also sold in 1-1/2in and 3in thickness variants (R-7 to R-15.1 depending on thickness); this entry represents the common 2in / R-15.1 configuration.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": "tongue_and_groove",
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "wood_block",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "3-layer steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "garaga-regal",
    "manufacturer": "Garaga",
    "series": "Regal Collection",
    "model_name": "Regal (2-Layer Polystyrene, R-7.2)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "Open-back steel",
    "r_value": "R-7.2",
    "thickness_in": 1.75,
    "density_lbs_sqft": 1.6,
    "weight_confidence": "verified",
    "data_source": "garaga.com selection guide + aaagaragedoorswa.com Regal brochure (2026-09 pull)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Standard ranch window inserts (+5.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "Value-tier door, also available fully non-insulated (open-back).",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": "tongue_and_groove",
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "wood_block",
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Open-back steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "garaga-top-tech",
    "manufacturer": "Garaga",
    "series": "Top Tech Collection",
    "model_name": "Top Tech (Textured Steel, Polyurethane R-16)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "Textured steel",
    "r_value": "R-16.0",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.2,
    "weight_confidence": "verified",
    "data_source": "garaga.com selection guide (2026-09 pull)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Top Tech window inserts (+7.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Textured-steel finish on Garaga's standard R-16 polyurethane platform -- same insulation tier as Standard+.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": "tongue_and_groove",
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "wood_block",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "Textured steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "garaga-special-reserve",
    "manufacturer": "Garaga",
    "series": "Special Reserve Collection",
    "model_name": "Special Reserve (4-Layer Steel, Polystyrene R-8.9)",
    "category": "residential",
    "construction_type": "two-layer sandwich",
    "panel_gauge": "4-layer steel",
    "r_value": "R-8.9",
    "thickness_in": 1.75,
    "density_lbs_sqft": 1.8,
    "weight_confidence": "verified",
    "data_source": "garaga.com selection guide (2026-09 pull)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Special Reserve window inserts (+6.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "Also available in a non-insulated (R-7) open-back version at the same weight class.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": "tongue_and_groove",
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "wood_block",
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "4-layer steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "steelcraft-artisan",
    "manufacturer": "Steel-Craft",
    "series": "Artisan Collection",
    "model_name": "Artisan (Carriage House, Polyurethane ~R-16 est.)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "Standard steel",
    "r_value": "R-16 (est.)",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.25,
    "weight_confidence": "estimated",
    "data_source": "titangaragedoors.ca Steel-Craft residential collection listing (name/construction family only -- R-value not published on source page, estimated from ThermoCraft T-16 tier)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Carriage-style arch lites (+8.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Premium carriage-house styling on Steel-Craft's standard ThermoCraft insulation platform.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "galvanized_steel",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "Standard steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "steelcraft-esteem",
    "manufacturer": "Steel-Craft",
    "series": "Esteem Collection",
    "model_name": "Esteem (Carriage House, Polyurethane ~R-16 est.)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "Standard steel",
    "r_value": "R-16 (est.)",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.25,
    "weight_confidence": "estimated",
    "data_source": "titangaragedoors.ca Steel-Craft residential collection listing (name/construction family only, R-value estimated from ThermoCraft T-16 tier)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Carriage-style arch lites (+8.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Another carriage-house styling line on the same ThermoCraft-tier construction -- treat weight identically to Artisan/RanchCraft pending manufacturer-specific data.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "galvanized_steel",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "Standard steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "steelcraft-prairie-ridge",
    "manufacturer": "Steel-Craft",
    "series": "Prairie Ridge / Mid-Century Modern Collection",
    "model_name": "Prairie Ridge / Mid-Century Modern (Flush Steel, Polyurethane ~R-16 est.)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "Standard steel",
    "r_value": "R-16 (est.)",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.2,
    "weight_confidence": "estimated",
    "data_source": "titangaragedoors.ca Steel-Craft residential collection listing (name/construction family only, R-value estimated from same insulation platform as Contemporary Flush)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Horizontal linear lites (+7.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Modern flush/grooved-panel styling variants on the same ThermoCraft-tier construction as Contemporary Flush/Woodtone.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": "galvanized_steel",
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "Standard steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "rw-briarcrest",
    "manufacturer": "Richards-Wilcox",
    "series": "Briarcrest (L200BC)",
    "model_name": "Briarcrest L200BC (2in Neufoam Polyurethane, R-18)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "2in Neufoam polyurethane core",
    "r_value": "R-18.0",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.25,
    "weight_confidence": "verified",
    "data_source": "rwdoors.com US garage door series listing (2026-09 pull)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Carriage-style arch lites (+8.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Carriage-house door on the same Premium L200 (R-18) construction platform as Landmark Premium.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "2in Neufoam polyurethane core",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "rw-echo-ridge-xl",
    "manufacturer": "Richards-Wilcox",
    "series": "Echo Ridge XL (L200ERX)",
    "model_name": "Echo Ridge XL L200ERX (2in Neufoam + Fibrex Overlay, R-18)",
    "category": "residential",
    "construction_type": "composite overlay",
    "panel_gauge": "2in Neufoam core with Fibrex overlay",
    "r_value": "R-18.0",
    "thickness_in": 2.0,
    "density_lbs_sqft": 2.9,
    "weight_confidence": "verified",
    "data_source": "rwdoors.com US garage door series listing (2026-09 pull)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Carriage-style arch lites (+8.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Fibrex composite overlay on the Premium (R-18) core, a step up from the entry-level Echo Ridge (L138ER).",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "2in Neufoam core with Fibrex overlay",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "rw-rockwood",
    "manufacturer": "Richards-Wilcox",
    "series": "Rockwood (L200RW / L200RWC)",
    "model_name": "Rockwood L200RW (2in Core + Applied Cedar Board, R-19)",
    "category": "residential",
    "construction_type": "composite overlay",
    "panel_gauge": "2in core with 1in applied cedar board",
    "r_value": "R-19.0",
    "thickness_in": 3.0,
    "density_lbs_sqft": 3.1,
    "weight_confidence": "verified",
    "data_source": "rwdoors.com US garage door series listing (2026-09 pull)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Custom carriage-style lites (+10 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Real 1in cedar board applied over the insulated core -- heaviest Richards-Wilcox residential door in this database due to the solid wood overlay.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "2in core with 1in applied cedar board",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "hormann-carriage-style",
    "manufacturer": "Hormann",
    "series": "Carriage House Style",
    "model_name": "Carriage House Style (Steel or Aluminum, Polyurethane ~R-16 est.)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "Steel (aluminum variant also offered)",
    "r_value": "R-16 (est.)",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.2,
    "weight_confidence": "estimated",
    "data_source": "hormann.us residential Carriage House Style page (construction family only; R-value estimated from same tier as Taurus 4250)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Carriage-style arch lites (+8.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Steel version is on the same insulation tier as the Taurus line; an aluminum full-view carriage variant is also offered (see hormann-carriage-alum for that construction).",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "Steel (aluminum variant also offered)",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "hormann-carriage-alum",
    "manufacturer": "Hormann",
    "series": "Carriage House Style (Aluminum)",
    "model_name": "Carriage House Style Aluminum (Full-View)",
    "category": "residential",
    "construction_type": "aluminum full-view",
    "panel_gauge": "Extruded aluminum frame",
    "r_value": "N/A",
    "thickness_in": 1.75,
    "density_lbs_sqft": 3.3,
    "weight_confidence": "estimated",
    "data_source": "hormann.us residential Carriage House Style page; density estimated from other manufacturers' aluminum full-view construction",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Full-height glass infill standard",
    "strut_options": "Integral aluminum horizontal rails",
    "stamp_location": "Bottom rail ID label",
    "status": "current",
    "constructionVal": "fullview-glass",
    "notes": "Hormann previously had no full-view aluminum entry in this database -- added for completeness.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": null,
        "exterior_skin_gauge": "Extruded aluminum frame",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "haas-6300-carriage",
    "manufacturer": "Haas",
    "series": "6300 Series Carriage House",
    "model_name": "Haas 6300 Series Carriage House (Polyurethane ~R-16 est.)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "Standard steel",
    "r_value": "R-16 (est.)",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.2,
    "weight_confidence": "estimated",
    "data_source": "haasdoor.com residential product family; R-value estimated from same insulation tier as Haas 700 Series",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Carriage-style arch lites (+8.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Carriage-house styling on the same polyurethane platform as the 700 Series.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "Standard steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "nwd-heritage-classic",
    "manufacturer": "Northwest",
    "series": "Heritage Classic Collection",
    "model_name": "Heritage Classic (Carriage House, Polyurethane ~R-16 est.)",
    "category": "residential",
    "construction_type": "three-layer polyurethane",
    "panel_gauge": "Standard steel",
    "r_value": "R-16 (est.)",
    "thickness_in": 1.75,
    "density_lbs_sqft": 2.2,
    "weight_confidence": "estimated",
    "data_source": "nwdusa.com Heritage Classic collection listing (construction family only; R-value estimated from same tier as Therma Max)",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7",
      "16x8"
    ],
    "window_options": "Carriage-style arch lites (+8.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "foamed-3layer",
    "notes": "Carriage-house styling line (C-Series/E-Series variants) on the same polyurethane platform as Therma Max. Northwest Door's site now operates under the Hormann-Northwest Door brand.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polyurethane",
        "exterior_skin_gauge": "Standard steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  },
  {
    "id": "nwd-protech-2500",
    "manufacturer": "Northwest",
    "series": "Pro Tech 2500 Collection",
    "model_name": "Pro Tech 2500 (Standard Steel, ~R-9 est.)",
    "category": "residential",
    "construction_type": "three-layer polystyrene",
    "panel_gauge": "Standard steel",
    "r_value": "R-9 (est.)",
    "thickness_in": 1.5,
    "density_lbs_sqft": 1.7,
    "weight_confidence": "estimated",
    "data_source": "nwdusa.com 500-series/Pro Tech collection listing; R-value estimated from same tier as Therma Tech",
    "last_verified": "2026-09",
    "common_sizes": [
      "8x7",
      "9x7",
      "16x7"
    ],
    "window_options": "Standard ranch window inserts (+5.0 lbs/ea)",
    "strut_options": "2-1/4in U-bar (+0.85 lbs/ft)",
    "stamp_location": "Interior end stile stamp",
    "status": "current",
    "constructionVal": "poly-vinyl",
    "notes": "Entry/value-tier residential line, same construction class as Therma Tech.",
    "vision_diagnostic_features": {
      "joint_profile": {
        "joint_type": null,
        "thermal_break_material": null
      },
      "end_stiles_and_caps": {
        "material": null,
        "fastening_method": null
      },
      "panel_construction": {
        "core": "polystyrene",
        "exterior_skin_gauge": "Standard steel",
        "interior_skin_gauge": null
      },
      "face_texture_and_grooving": {
        "texture": null,
        "rib_patterns": null
      },
      "factory_color_palette": {
        "available_finishes": []
      },
      "hardware_geometry": {
        "center_hinge_footprint": null,
        "end_roller_carrier_shape": null
      }
    }
  }
];

    const DOOR_MODELS = DOOR_DATABASE;

    // =====================================================================
    // END CAP PROFILE REFERENCES
    // Housed right on the manufacturer/model database (not a separate
    // library) per manufacturer, since the app's own AI disambiguation
    // rules already group joint/end-stile characteristics at the
    // manufacturer level. MFG_ENDCAP_DEFAULTS below are seeded from each
    // manufacturer's own published materials (a real photo where one could
    // be found, an official spec/section-drawing page/PDF otherwise -- see
    // README for the source list). Any specific model row can be given its
    // own override photo (e.g. from a customer photo or a spec sheet you
    // found) via the ✏️ icon in the "End Cap Profile" column -- that
    // override always takes priority over the manufacturer-level default,
    // and gets used by the AI Scanner for real photo-to-photo grounding.
    // =====================================================================
    const MFG_ENDCAP_DEFAULTS = {
      "Amarr": {
        type: "image",
        url: "https://gw-assets.assaabloy.com/is/image/assaabloy/banner-4-ways-amarr-safeguard-system-keeps-your-family-safe",
        label: "Amarr SafeGuard pinch-resistant joint (official photo)",
        sourceUrl: "https://blog.amarr.com/4-ways-amarr-safeguard-system-keeps-your-family-safe"
      },
      "C.H.I.": {
        type: "link",
        url: "https://www.chiohd.com/hubfs/Professional/Specs/Commercial/Section-Drawings/CHI-3221_OverheadDoor_Section.pdf",
        label: "C.H.I. official joint detail section drawing (PDF)",
        sourceUrl: "https://www.chiohd.com/document-finder"
      },
      "Garaga": {
        type: "link",
        url: "https://cmsgaraga.garaga.com/Drupal/InstallationManual.pdf",
        label: "Garaga installation manual — panel/joint diagrams (PDF)",
        sourceUrl: "https://www.garaga.com"
      },
      "Steel-Craft": {
        type: "link",
        url: "https://steel-craft.ca/manuals/SpecsTD134138.pdf",
        label: "Steel-Craft THERM-O-DOR spec sheet — WeatherLock joint (PDF)",
        sourceUrl: "https://steel-craft.ca/"
      },
      "Clopay": {
        type: "link",
        url: "https://www.clopaydoor.com/insulated-polyurethane-doors",
        label: "Clopay Intellicore construction detail (official page)",
        sourceUrl: "https://www.clopaydoor.com/insulated-polyurethane-doors"
      },
      "Richards-Wilcox": {
        type: "link",
        url: "https://www.rwdoors.com/wp-content/uploads/2023/01/R-W_Thermatite-Brochure_Jan2023.pdf",
        label: "Richards-Wilcox Thermatite brochure — joint construction (PDF)",
        sourceUrl: "https://www.rwdoors.com/us/"
      },
      "Haas": {
        type: "link",
        url: "https://connect.haasdoor.com/Portals/0/technical/Technical%20Spec%20Sheets/2000%20Series/2080%20TechSheet.pdf",
        label: "Haas Door tech spec sheet — extruded end cap detail (PDF)",
        sourceUrl: "https://connect.haasdoor.com"
      },
      "Hormann": {
        type: "link",
        url: "https://www.hormann.co.uk/media-centre/download/311111en/02_EN_EBD_84607_Garage_Sektionaltor.pdf",
        label: "Hörmann sectional door brochure — panel joint (PDF)",
        sourceUrl: "https://www.hormann.co.uk"
      }
      // Wayne Dalton and Northwest Door: no official joint-profile image or
      // diagram confirmed yet -- add one via the ✏️ icon on any of their
      // rows in the catalog table below and it becomes the default for
      // that model (and a good candidate to promote for the whole line).
    };
    let customDensityOverride = null;

    function handleMfgChange() {
      const mfg = document.getElementById('mfgSelect').value;
      const modelSelect = document.getElementById('modelSelect');
      modelSelect.innerHTML = '';

      if (mfg === 'custom') {
        modelSelect.innerHTML = '<option value="custom">Custom Configuration</option>';
        customDensityOverride = null;
        document.getElementById('mfgSpecBadge').style.display = 'none';
        calculateDoorWeight();
        return;
      }

      document.getElementById('mfgSpecBadge').style.display = 'flex';
      const models = DOOR_MODELS.filter(m => m.manufacturer.toLowerCase() === mfg.toLowerCase() || m.manufacturer === mfg);
      models.forEach((m, idx) => {
        const opt = document.createElement('option');
        opt.value = m.model_name;
        opt.innerText = m.model_name;
        modelSelect.appendChild(opt);
      });

      handleModelSelect();
    }

    function handleModelSelect() {
      const selectedModelName = document.getElementById('modelSelect').value;
      const modelObj = DOOR_MODELS.find(m => m.model_name === selectedModelName);
      if (modelObj) {
        customDensityOverride = modelObj.density_lbs_sqft;
        document.getElementById('badgeRVal').innerText = modelObj.r_value || 'None';
        document.getElementById('badgeCore').innerText = modelObj.construction_type || '';
        
        const isVerified = modelObj.weight_confidence === 'verified';
        const confBadge = isVerified 
          ? ' <span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; font-size: 9px; padding: 1px 4px;">✓ Verified</span>'
          : ' <span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; font-size: 9px; padding: 1px 4px;">≈ Estimated</span>';

        document.getElementById('badgeDensity').innerHTML = modelObj.density_lbs_sqft.toFixed(2) + " lbs/sq ft" + confBadge;
        
        // Auto-select corresponding generic construction
        if (modelObj.constructionVal) {
          document.getElementById('estConstruction').value = modelObj.constructionVal;
        }
      } else {
        customDensityOverride = null;
      }
      calculateDoorWeight();
    }

    async function populateMfgTable() {
      const tbody = document.getElementById('mfgTableBody');
      if (!tbody) return;
      tbody.innerHTML = '';

      const endcapOverrides = await endcapGetAllAsMap();

      DOOR_MODELS.forEach(m => {
        const sqft8x7 = 56;
        const sqft16x7 = 112;
        const density = m.density_lbs_sqft || 1.65;
        const wt8x7 = Math.round(sqft8x7 * density + 18);
        const wt16x7 = Math.round(sqft16x7 * density + 26 + 24); // with 2 struts

        const rValStr = m.r_value || 'None';
        const hasHighR = rValStr.includes('16') || rValStr.includes('18') || rValStr.includes('19') || rValStr.includes('20');
        const isVerified = m.weight_confidence === 'verified';
        const confBadge = isVerified 
          ? '<span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; font-size: 9px; padding: 1px 4px;">✓ Verified</span>'
          : '<span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; font-size: 9px; padding: 1px 4px;">≈ Estimated</span>';

        const statusBadge = m.status === 'legacy'
          ? '<span class="badge gray" style="font-size: 9px; padding: 1px 4px;">Legacy</span>'
          : '<span class="badge" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; font-size: 9px; padding: 1px 4px;">Current</span>';

        const tr = document.createElement('tr');
        tr.dataset.search = (m.manufacturer + ' ' + m.model_name + ' ' + (m.series || '') + ' ' + m.construction_type + ' ' + (m.panel_gauge || '') + ' ' + rValStr + ' ' + (m.stamp_location || '')).toLowerCase();
        tr.dataset.mfg = m.manufacturer.toLowerCase();
        tr.dataset.status = m.status || 'current';

        tr.innerHTML = `
          <td><strong>${m.manufacturer}</strong></td>
          <td style="color: var(--accent); font-weight: 600;">
            ${m.model_name}
            <div style="font-size: 10px; color: #64748b; font-weight: normal;">${m.series || ''} ${statusBadge}</div>
          </td>
          <td><span class="badge ${hasHighR ? 'green' : 'gray'}">${rValStr}</span></td>
          <td style="font-size: 11px; color: var(--text-muted);">
            <div>${m.construction_type}</div>
            <div style="font-size: 10px; color: #64748b;">${m.panel_gauge || ''}</div>
          </td>
          <td>
            <div class="mono font-bold">${density.toFixed(2)} lbs</div>
            <div style="margin-top: 2px;">${confBadge}</div>
          </td>
          <td class="mono">~${wt8x7} lbs</td>
          <td class="mono font-bold" style="color: #38bdf8;">~${wt16x7} lbs</td>
          <td style="font-size: 11px; color: var(--text-muted); max-width: 180px;">${m.stamp_location || 'End stile'}</td>
          <td id="endcapCell-${m.id}" style="text-align: center;">${renderEndCapCell(m.id, m.manufacturer, endcapOverrides)}</td>
          <td>
            <button class="btn-action primary" style="padding: 4px 8px; font-size: 10px;" onclick="applyCatalogModelToCalculator('${m.id}')">Use in Sizer →</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    function applyCatalogModelToCalculator(modelId) {
      const model = DOOR_MODELS.find(m => m.id === modelId);
      if (!model) return;

      switchTab('weight-est');

      const mfgSelect = document.getElementById('mfgSelect');
      mfgSelect.value = model.manufacturer;
      handleMfgChange();
      const modelSelect = document.getElementById('modelSelect');
      modelSelect.value = model.model_name;
      handleModelSelect();

      const target = document.getElementById('pane-weight-est');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }

    function filterMfgTable() {
      const query = (document.getElementById('mfgSearchInput').value || '').toLowerCase();
      const mfgFilterEl = document.getElementById('mfgFilterSelect');
      const mfgFilter = mfgFilterEl ? mfgFilterEl.value.toLowerCase() : 'all';
      const statusFilterEl = document.getElementById('mfgStatusSelect');
      const statusFilter = statusFilterEl ? statusFilterEl.value.toLowerCase() : 'all';

      const rows = document.querySelectorAll('#mfgTableBody tr');
      rows.forEach(r => {
        const text = r.dataset.search || '';
        const rowMfg = r.dataset.mfg || '';
        const rowStatus = r.dataset.status || '';

        const matchesQuery = !query || text.includes(query);
        const matchesMfg = mfgFilter === 'all' || rowMfg === mfgFilter || rowMfg.includes(mfgFilter) || mfgFilter.includes(rowMfg);
        const matchesStatus = statusFilter === 'all' || rowStatus === statusFilter;

        r.style.display = (matchesQuery && matchesMfg && matchesStatus) ? '' : 'none';
      });
    }



    // Commercial Duplex Spring Engineering (Nested Springs)
    function calculateDuplexPair(targetIPPT, desiredLength = 36.0) {
      // Outer Spring: 3-3/4" ID, Inner Spring: 2-5/8" ID
      const outerID = 3.75;
      const innerID = 2.625;
      const commWires = [0.250, 0.262, 0.273, 0.283, 0.295, 0.306, 0.312, 0.331, 0.343, 0.362, 0.375, 0.390, 0.406];

      let bestMatch = null;
      let minDiff = 999.0;

      commWires.forEach(wOut => {
        commWires.forEach(wIn => {
          if (wIn <= wOut) {
            const ipptOut = (E_MODULUS * Math.pow(wOut, 5)) / (10.8 * (outerID + wOut) * desiredLength);
            const ipptIn = (E_MODULUS * Math.pow(wIn, 5)) / (10.8 * (innerID + wIn) * desiredLength);
            const total = ipptOut + ipptIn;
            const diff = Math.abs(total - targetIPPT);

            if (diff < minDiff && diff / targetIPPT < 0.05) {
              minDiff = diff;
              const wOutObj = WIRE_SPECS.find(x => Math.abs(x.wire - wOut) < 0.001) || { name: wOut.toFixed(3), color: "" };
              const wInObj = WIRE_SPECS.find(x => Math.abs(x.wire - wIn) < 0.001) || { name: wIn.toFixed(3), color: "" };
              bestMatch = {
                outerWire: wOut,
                outerName: wOutObj.name,
                outerColor: wOutObj.color,
                outerID: outerID,
                outerIPPT: ipptOut,
                innerWire: wIn,
                innerName: wInObj.name,
                innerColor: wInObj.color,
                innerID: innerID,
                innerIPPT: ipptIn,
                totalIPPT: total,
                length: desiredLength,
                cycles: 25000
              };
            }
          }
        });
      });

      return bestMatch;
    }

    // AI Photo Door Scanner Logic (Dual-Vector with Optional Photo 2)
    let photo1Base64 = null;
    let photo2Base64 = null;
    let lastAIAnalysis = null;

    function openAISettingsModal() {
      const savedKey = localStorage.getItem('doormath_gemini_key') || '';
      document.getElementById('geminiApiKeyInput').value = savedKey;
      document.getElementById('aiSettingsModal').classList.add('open');
    }

    function closeAISettingsModal() {
      document.getElementById('aiSettingsModal').classList.remove('open');
    }

    function saveAISettings() {
      const key = (document.getElementById('geminiApiKeyInput').value || '').trim();
      if (key) {
        localStorage.setItem('doormath_gemini_key', key);
        alert('API Key saved securely to your browser local storage.');
      } else {
        localStorage.removeItem('doormath_gemini_key');
        alert('API Key cleared.');
      }
      closeAISettingsModal();
    }

    // Downscale and compress image to max 1024px for rapid mobile upload
    function compressImage(file, maxDimension = 1024, quality = 0.82) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            let width = img.width;
            let height = img.height;

            if (width > height) {
              if (width > maxDimension) {
                height = Math.round((height * maxDimension) / width);
                width = maxDimension;
              }
            } else {
              if (height > maxDimension) {
                width = Math.round((width * maxDimension) / height);
                height = maxDimension;
              }
            }

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            const base64 = canvas.toDataURL('image/jpeg', quality);
            resolve(base64);
          };
          img.onerror = reject;
          img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

    // =====================================================================
    // v40: IMAGE QUALITY GATE
    // Checks brightness (average luminance) and blur (Laplacian variance
    // approximation) on the compressed canvas. Run after compressImage().
    // Returns { ok, brightness, blurScore, issues[] }
    // =====================================================================
    function checkImageQuality(base64DataUrl) {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          // Down-sample to 64×64 for fast pixel analysis
          const size = 64;
          const canvas = document.createElement('canvas');
          canvas.width = size; canvas.height = size;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, size, size);
          const data = ctx.getImageData(0, 0, size, size).data;
          const total = size * size;

          // Brightness: average luminance across all pixels
          let lumSum = 0;
          for (let i = 0; i < data.length; i += 4) {
            lumSum += 0.299 * data[i] + 0.587 * data[i+1] + 0.114 * data[i+2];
          }
          const brightness = lumSum / total; // 0–255

          // Blur: variance of luminance (proxy for Laplacian energy)
          const lums = [];
          for (let i = 0; i < data.length; i += 4) {
            lums.push(0.299 * data[i] + 0.587 * data[i+1] + 0.114 * data[i+2]);
          }
          const mean = brightness;
          const variance = lums.reduce((s, l) => s + (l - mean) ** 2, 0) / total;
          const blurScore = Math.round(variance); // Higher = sharper

          const issues = [];
          if (brightness < 35) issues.push('too dark');
          if (blurScore < 40) issues.push('possibly blurry');

          resolve({ ok: issues.length === 0, brightness: Math.round(brightness), blurScore, issues });
        };
        img.onerror = () => resolve({ ok: true, brightness: 128, blurScore: 80, issues: [] }); // fail open
        img.src = base64DataUrl;
      });
    }

    // Show quality badge over the photo preview thumbnail
    function showQualityBadge(slot, quality) {
      const el = document.getElementById('qualityBadge' + slot);
      if (!el) return;
      if (quality.ok) {
        el.style.display = 'block';
        el.style.background = 'rgba(16,185,129,0.85)';
        el.style.color = '#fff';
        el.innerText = '✓ Good';
      } else {
        el.style.display = 'block';
        el.style.background = 'rgba(239,68,68,0.9)';
        el.style.color = '#fff';
        el.innerText = '⚠️ ' + quality.issues.join(' + ');
      }
    }

    // =====================================================================
    // v40: WEIGHT PARAMS PANEL (AI Stage 3 extraction)
    // =====================================================================
    function showWeightParamsPanel(wp) {
      if (!wp) return;
      const panel = document.getElementById('weightParamsPanel');
      if (!panel) return;
      panel.style.display = 'block';

      // Confidence badge
      const conf = wp.extractionConfidence;
      const badge = document.getElementById('extractionConfBadge');
      if (badge && conf != null) {
        badge.innerText = conf + '% extraction confidence';
        badge.style.color = conf >= 75 ? '#34d399' : conf >= 50 ? '#f59e0b' : '#f87171';
      }

      // Notes
      const notesEl = document.getElementById('extractionNotes');
      if (notesEl) notesEl.innerText = wp.extractionNotes || '';

      // Thickness
      const thk = document.getElementById('wpThickness');
      if (thk && wp.sectionThickness_in != null) {
        thk.value = String(wp.sectionThickness_in);
      }

      // Gauge
      const gau = document.getElementById('wpGauge');
      if (gau && wp.gaugeEstimate) gau.value = wp.gaugeEstimate;

      // Insulation
      const ins = document.getElementById('wpInsulation');
      if (ins && wp.insulationType) ins.value = wp.insulationType;

      // Glass rows
      const gr = document.getElementById('wpGlassRows');
      if (gr && wp.glassSections != null) gr.value = wp.glassSections;

      // Struts
      const st = document.getElementById('wpStruts');
      if (st && wp.strutsVisible != null) st.value = wp.strutsVisible;

      // End stile text
      const es = document.getElementById('wpEndStile');
      if (es) es.innerText = wp.endStileProfile || 'Not detected';
    }

    function stepWP(id, delta) {
      const el = document.getElementById(id);
      if (!el) return;
      const val = parseInt(el.value) || 0;
      el.value = Math.max(parseInt(el.min) || 0, Math.min(parseInt(el.max) || 99, val + delta));
    }

    // Map insulation type from AI string to constructionVal enum
    function insulationToConstructionVal(insType) {
      if (!insType) return null;
      const map = {
        'none': 'pan-25',
        'polystyrene': 'poly-vinyl',
        'polyurethane_foamed': 'foamed-3layer',
        'aluminum_frame': 'fullview-glass',
        'wood': 'wood-solid'
      };
      return map[insType] || null;
    }

    function applyWeightParamsToEstimator() {
      // Insulation → construction dropdown
      const ins = document.getElementById('wpInsulation').value;
      const cv = insulationToConstructionVal(ins);
      if (cv) {
        const cSel = document.getElementById('estConstruction');
        if (cSel) cSel.value = cv;
        customDensityOverride = null; // use dropdown density
        const aiNote = document.getElementById('aiDensityOverrideNote');
        if (aiNote) aiNote.style.display = 'none';
      }

      // Struts
      const struts = parseInt(document.getElementById('wpStruts').value) || 0;
      const strutSel = document.getElementById('estStruts');
      if (strutSel) {
        // Map count to nearest option (0,1,2,3,4)
        const opts = [0,1,2,3,4];
        const closest = opts.reduce((a, b) => Math.abs(b-struts) < Math.abs(a-struts) ? b : a);
        strutSel.value = String(closest);
      }

      // Glass
      const glassRows = parseInt(document.getElementById('wpGlassRows').value) || 0;
      const glassSel = document.getElementById('estGlass');
      if (glassSel) {
        if (glassRows === 0) glassSel.value = 'none';
        else if (glassRows >= 2) glassSel.value = 'full-glass-row';
        else glassSel.value = '4-single';
      }

      calculateDoorWeight();
      document.getElementById('weightParamsPanel').style.display = 'none';

      // Flash the estimator
      const wEl = document.getElementById('estTotalWeight');
      if (wEl) { wEl.style.transition = 'color 0.4s'; wEl.style.color = '#38bdf8'; setTimeout(() => { wEl.style.color = ''; }, 800); }
    }

    // =====================================================================
    // v40: MANUAL ENTRY WIZARD
    // =====================================================================
    function toggleManualEntryWizard() {
      const wizard = document.getElementById('manualEntryWizard');
      if (!wizard) return;
      wizard.style.display = wizard.style.display === 'none' ? 'block' : 'none';
    }

    function applyManualWizardToEstimator() {
      const construction = document.getElementById('mwInsulation').value;
      const struts = document.getElementById('mwStruts').value;
      const glass = document.getElementById('mwGlass').value;

      const cSel = document.getElementById('estConstruction');
      if (cSel) cSel.value = construction;

      const strutSel = document.getElementById('estStruts');
      if (strutSel) strutSel.value = struts;

      const glassSel = document.getElementById('estGlass');
      if (glassSel) glassSel.value = glass;

      // Manual entry clears AI override
      customDensityOverride = null;
      const aiNote = document.getElementById('aiDensityOverrideNote');
      if (aiNote) aiNote.style.display = 'none';

      calculateDoorWeight();

      // Collapse wizard and scroll to estimator
      document.getElementById('manualEntryWizard').style.display = 'none';
      const wEl = document.getElementById('estTotalWeight');
      if (wEl) { wEl.style.transition = 'color 0.4s'; wEl.style.color = '#10b981'; setTimeout(() => { wEl.style.color = ''; }, 800); }
    }


    // One reference photo or link per door model, stored locally on this
    // device via IndexedDB (photos are too big for localStorage at any
    // real volume) and keyed by the model's doorId, so saving again simply
    // replaces the prior one. Falls back to MFG_ENDCAP_DEFAULTS above when
    // no override has been set for that model. The AI Scanner pulls real
    // uploaded photos from here to ground its guess in an actual picture.
    // =====================================================================

    const ENDCAP_DB_NAME = 'doormathpro_endcap_refs';
    const ENDCAP_DB_VERSION = 1;
    const ENDCAP_STORE = 'refs';
    const ENDCAP_MAX_REFERENCE_IMAGES_PER_SCAN = 6; // cap extra images per AI scan (cost/latency)

    let endcapPhotoBase64 = null;
    let endcapModalDoorId = null;
    let endcapDbPromise = null;
    let endcapOverridesCache = null; // Map<doorId, entry>, loaded once and kept in sync locally

    function openEndCapDB() {
      if (endcapDbPromise) return endcapDbPromise;
      endcapDbPromise = new Promise((resolve, reject) => {
        if (!window.indexedDB) {
          reject(new Error('IndexedDB not supported in this browser'));
          return;
        }
        const req = indexedDB.open(ENDCAP_DB_NAME, ENDCAP_DB_VERSION);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(ENDCAP_STORE)) {
            db.createObjectStore(ENDCAP_STORE, { keyPath: 'doorId' });
          }
        };
        req.onsuccess = (e) => resolve(e.target.result);
        req.onerror = (e) => reject(e.target.error);
      });
      return endcapDbPromise;
    }

    async function endcapGetAllAsMap() {
      if (endcapOverridesCache) return endcapOverridesCache;
      const map = new Map();
      try {
        const db = await openEndCapDB();
        const all = await new Promise((resolve, reject) => {
          const tx = db.transaction(ENDCAP_STORE, 'readonly');
          const req = tx.objectStore(ENDCAP_STORE).getAll();
          req.onsuccess = () => resolve(req.result || []);
          req.onerror = () => reject(req.error);
        });
        all.forEach(entry => map.set(entry.doorId, entry));
      } catch (err) {
        console.error('End Cap refs: could not read saved overrides', err);
      }
      endcapOverridesCache = map;
      return map;
    }

    async function endcapPut(entry) {
      const db = await openEndCapDB();
      await new Promise((resolve, reject) => {
        const tx = db.transaction(ENDCAP_STORE, 'readwrite');
        tx.objectStore(ENDCAP_STORE).put(entry);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
      const map = await endcapGetAllAsMap();
      map.set(entry.doorId, entry);
    }

    async function endcapDelete(doorId) {
      const db = await openEndCapDB();
      await new Promise((resolve, reject) => {
        const tx = db.transaction(ENDCAP_STORE, 'readwrite');
        tx.objectStore(ENDCAP_STORE).delete(doorId);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
      const map = await endcapGetAllAsMap();
      map.delete(doorId);
    }

    function escapeHtml(str) {
      const div = document.createElement('div');
      div.innerText = str == null ? '' : str;
      return div.innerHTML;
    }

    // Resolves the ref to show/use for a given model: a saved per-model
    // override always wins, otherwise the manufacturer-level default.
    function resolveEndCapRef(doorId, manufacturer, overridesMap) {
      if (overridesMap && overridesMap.has(doorId)) return { ...overridesMap.get(doorId), isOverride: true };
      if (MFG_ENDCAP_DEFAULTS[manufacturer]) return { ...MFG_ENDCAP_DEFAULTS[manufacturer], isOverride: false };
      return null;
    }

    function renderEndCapCell(doorId, manufacturer, overridesMap) {
      const ref = resolveEndCapRef(doorId, manufacturer, overridesMap);
      const editBtn = `<button onclick="openEndCapRefModal('${doorId}')" title="Add or replace this reference" style="background: none; border: none; cursor: pointer; font-size: 12px; padding: 2px 4px; color: var(--text-dim);">✏️</button>`;

      if (!ref) {
        return `<div style="display:flex; align-items:center; gap:4px; justify-content:center;">
          <button class="btn-action" style="padding: 3px 8px; font-size: 10px;" onclick="openEndCapRefModal('${doorId}')">+ Add</button>
        </div>`;
      }

      if (ref.type === 'image') {
        return `<div style="display:flex; align-items:center; gap:4px; justify-content:center;">
          <img src="${ref.url}" title="${escapeHtml(ref.label || '')}" loading="lazy"
               style="width: 44px; height: 34px; object-fit: cover; border-radius: 5px; border: 1px solid var(--border-color); cursor: pointer;"
               onclick="window.open('${ref.sourceUrl || ref.url}', '_blank')"
               onerror="this.closest('td').innerHTML = renderEndCapLinkFallback('${doorId}');">
          ${editBtn}
        </div>`;
      }

      // link type
      return `<div style="display:flex; align-items:center; gap:4px; justify-content:center;">
        <a href="${ref.url}" target="_blank" rel="noopener" title="${escapeHtml(ref.label || '')}" style="font-size: 16px; text-decoration: none;">🔗</a>
        ${editBtn}
      </div>`;
    }

    // Used as an onerror fallback when a hotlinked manufacturer image URL
    // breaks (site redesign, moved asset, etc.) -- degrades to a plain link
    // instead of a broken-image icon.
    function renderEndCapLinkFallback(doorId) {
      return `<div style="display:flex; align-items:center; gap:4px; justify-content:center;">
        <span style="font-size: 10px; color: var(--text-dim);">image unavailable</span>
        <button onclick="openEndCapRefModal('${doorId}')" style="background: none; border: none; cursor: pointer; font-size: 12px; padding: 2px 4px; color: var(--text-dim);">✏️</button>
      </div>`;
    }

    async function refreshEndCapCell(doorId) {
      const model = DOOR_MODELS.find(m => m.id === doorId);
      if (!model) return;
      const cell = document.getElementById(`endcapCell-${doorId}`);
      if (!cell) return;
      const overrides = await endcapGetAllAsMap();
      cell.innerHTML = renderEndCapCell(doorId, model.manufacturer, overrides);
    }

    function openEndCapRefModal(doorId) {
      const model = DOOR_MODELS.find(m => m.id === doorId);
      if (!model) return;
      endcapModalDoorId = doorId;
      endcapPhotoBase64 = null;

      document.getElementById('endcapModalTitle').innerText = `${model.manufacturer} — ${model.model_name}`;
      document.getElementById('endcapLinkInput').value = '';
      document.getElementById('endcapNoteInput').value = '';
      document.getElementById('endcapPreviewWrap').style.display = 'none';
      document.getElementById('endcapPhotoInput').value = '';

      endcapGetAllAsMap().then(overrides => {
        const existing = overrides.get(doorId);
        if (existing && existing.type === 'link') {
          document.getElementById('endcapLinkInput').value = existing.url || '';
        }
        if (existing && existing.note) {
          document.getElementById('endcapNoteInput').value = existing.note;
        }
        document.getElementById('endcapRemoveBtn').style.display = existing ? 'inline-flex' : 'none';
      });

      document.getElementById('endcapRefModal').classList.add('open');
    }

    function closeEndCapRefModal() {
      document.getElementById('endcapRefModal').classList.remove('open');
      endcapModalDoorId = null;
    }

    async function handleEndCapPhotoSelect(event) {
      const file = event.target.files[0];
      if (!file) return;
      try {
        endcapPhotoBase64 = await compressImage(file, 1024, 0.85);
        document.getElementById('endcapPreviewImg').src = endcapPhotoBase64;
        document.getElementById('endcapPreviewWrap').style.display = 'block';
      } catch (err) {
        console.error('End cap photo compression error:', err);
        alert('Could not load that photo. Try a different one.');
      }
    }

    async function saveEndCapRef() {
      if (!endcapModalDoorId) return;
      const model = DOOR_MODELS.find(m => m.id === endcapModalDoorId);
      if (!model) return;

      const linkUrl = document.getElementById('endcapLinkInput').value.trim();
      const note = document.getElementById('endcapNoteInput').value.trim();

      if (!endcapPhotoBase64 && !linkUrl) {
        alert('Upload a photo or paste a link before saving.');
        return;
      }

      const entry = endcapPhotoBase64
        ? {
            doorId: endcapModalDoorId,
            type: 'image',
            url: endcapPhotoBase64,
            label: `${model.manufacturer} ${model.model_name} — end cap reference`,
            note: note,
            dateAdded: new Date().toISOString()
          }
        : {
            doorId: endcapModalDoorId,
            type: 'link',
            url: linkUrl,
            label: `${model.manufacturer} ${model.model_name} — end cap reference`,
            note: note,
            dateAdded: new Date().toISOString()
          };

      try {
        await endcapPut(entry);
        await refreshEndCapCell(endcapModalDoorId);
        closeEndCapRefModal();
      } catch (err) {
        console.error('End cap ref save error:', err);
        alert('Could not save this reference. Your browser may be low on storage, or blocking IndexedDB (common in private/incognito mode).');
      }
    }

    async function removeEndCapRef() {
      if (!endcapModalDoorId) return;
      if (!confirm('Remove this override and fall back to the manufacturer default (if any)?')) return;
      try {
        await endcapDelete(endcapModalDoorId);
        await refreshEndCapCell(endcapModalDoorId);
        closeEndCapRefModal();
      } catch (err) {
        console.error('End cap ref delete error:', err);
      }
    }

    // Picks a small, varied set of REAL uploaded reference photos (per-model
    // overrides only -- hotlinked manufacturer defaults are external URLs
    // whose bytes we can't reliably read cross-origin) to ground the AI
    // Scanner's guess. Returns [] until at least one photo has been
    // uploaded via the End Cap Profile column, so scanning behaves exactly
    // as before until then.
    async function getReferenceImagesForScan() {
      let overrides;
      try {
        overrides = await endcapGetAllAsMap();
      } catch (err) {
        return [];
      }
      const imageEntries = Array.from(overrides.values()).filter(e => e.type === 'image');
      if (!imageEntries.length) return [];

      const withModel = imageEntries
        .map(e => ({ entry: e, model: DOOR_MODELS.find(m => m.id === e.doorId) }))
        .filter(x => x.model);

      withModel.sort((a, b) => {
        // v40: prefer high-quality reference photos (brightness × blurScore)
        // so a dark or blurry auto-save doesn't degrade future scans.
        // Fall back to date comparison as tiebreaker.
        const qA = a.entry.imageQuality ? (a.entry.imageQuality.brightness * a.entry.imageQuality.blurScore) : 5000;
        const qB = b.entry.imageQuality ? (b.entry.imageQuality.brightness * b.entry.imageQuality.blurScore) : 5000;
        if (qB !== qA) return qB - qA;
        return (b.entry.dateAdded || '').localeCompare(a.entry.dateAdded || '');
      });

      const perMfgCount = {};
      const picked = [];
      for (const x of withModel) {
        const mfg = x.model.manufacturer;
        perMfgCount[mfg] = perMfgCount[mfg] || 0;
        if (perMfgCount[mfg] >= 2) continue; // at most 2 per manufacturer
        picked.push({ manufacturer: mfg, modelName: x.model.model_name, photoBase64: x.entry.url });
        perMfgCount[mfg]++;
        if (picked.length >= ENDCAP_MAX_REFERENCE_IMAGES_PER_SCAN) break;
      }
      return picked;
    }

    async function handlePhotoSelect(event, slot) {
      const file = event.target.files[0];
      if (!file) return;

      // v40: HEIC detection — iOS Safari converts on capture but uploaded
      // HEIC files from Files.app may not be converted, causing silent
      // canvas failure. Give a specific message instead of the generic one.
      if (file.name && file.name.match(/\.heic$/i) || file.type === 'image/heic' || file.type === 'image/heif') {
        alert('HEIC / HEIF format detected.\n\nUse the 📷 Take Photo button (captures as JPEG) or open the image in Photos, share it as "JPEG" first, then upload here.');
        event.target.value = '';
        return;
      }

      const btnText = document.getElementById(`photo${slot}BtnText`);
      const priorText = btnText.innerText;
      btnText.innerText = 'Compressing...';

      try {
        const base64 = await compressImage(file);
        if (slot === 1) {
          photo1Base64 = base64;
          document.getElementById('preview1Img').src = base64;
          document.getElementById('preview1Wrap').style.display = 'block';
          btnText.innerText = '🖼️ Replace Photo';
        } else {
          photo2Base64 = base64;
          document.getElementById('preview2Img').src = base64;
          document.getElementById('preview2Wrap').style.display = 'block';
          btnText.innerText = '🖼️ Replace Photo';
        }

        // v40: run quality gate and show badge on the thumbnail
        checkImageQuality(base64).then(quality => {
          showQualityBadge(slot, quality);
          if (!quality.ok) {
            const photoStatusText = document.getElementById('photoStatusText');
            if (photoStatusText) {
              photoStatusText.innerText = `⚠️ Photo ${slot}: ${quality.issues.join(', ')} — try in better light or focus closer`;
              photoStatusText.style.color = '#f87171';
            }
          }
        });

        updateScanButtonState();
      } catch (err) {
        console.error('Image compression error:', err);
        btnText.innerText = priorText;
        alert('Could not load that photo — try a different one, or use the 📷 Take Photo button instead.');
      }
    }

    function clearPhoto(slot) {
      if (slot === 1) {
        photo1Base64 = null;
        document.getElementById('preview1Wrap').style.display = 'none';
        document.getElementById('photo1BtnText').innerText = '🖼️ Upload from Photos';
        document.getElementById('doorPhoto1').value = '';
        document.getElementById('doorPhoto1Camera').value = '';
      } else {
        photo2Base64 = null;
        document.getElementById('preview2Wrap').style.display = 'none';
        document.getElementById('photo2BtnText').innerText = '🖼️ Upload from Photos';
        document.getElementById('doorPhoto2').value = '';
        document.getElementById('doorPhoto2Camera').value = '';
      }
      updateScanButtonState();
    }

    function updateScanButtonState() {
      const scanBtn = document.getElementById('runAiScanBtn');
      const statusText = document.getElementById('photoStatusText');

      if (photo1Base64 && photo2Base64) {
        scanBtn.disabled = false;
        scanBtn.style.opacity = '1';
        scanBtn.innerText = '⚡ Run Dual-Vector Door Identification (High Accuracy)';
        statusText.innerText = '2 Photos Ready: Front Face + Side Profile loaded';
      } else if (photo1Base64) {
        scanBtn.disabled = false;
        scanBtn.style.opacity = '1';
        scanBtn.innerText = '⚡ Identify Door from Front Photo';
        statusText.innerText = 'Photo 1 Ready (Photo 2 optional for higher precision)';
      } else if (photo2Base64) {
        scanBtn.disabled = false;
        scanBtn.style.opacity = '1';
        scanBtn.innerText = '⚡ Identify Door from Side/Stamp Photo';
        statusText.innerText = 'Side photo ready (Front photo recommended)';
      } else {
        scanBtn.disabled = true;
        scanBtn.style.opacity = '0.5';
        scanBtn.innerText = '⚡ Identify Door with AI Vision (Snap Photo 1 to Start)';
        statusText.innerText = 'Ready for photo';
      }
    }

    // BUGFIX (v39 audit): the optional personal Gemini API key override used
    // to be sent ONLY as a URL query parameter (?key=...), which tends to
    // land in Cloudflare's own request logs, browser history, and any proxy
    // logging in front of the Worker -- not a safe way to move a secret
    // around. It is now ALSO sent as a request header. The query parameter
    // is kept for backward compatibility until the Worker itself is updated
    // to read the header -- once it does, the query fallback below can be
    // deleted. Centralized here so both call sites (the AI scanner and the
    // troubleshooting chatbot) stay in sync.
    function buildAiProxyRequest() {
      const userKey = localStorage.getItem('doormath_gemini_key') || '';
      const url = `https://doormath-ai.chadneweragd.workers.dev${userKey ? '?key=' + encodeURIComponent(userKey) : ''}`;
      const headers = { 'Content-Type': 'application/json' };
      if (userKey) headers['X-Doormath-Gemini-Key'] = userKey;
      return { url, headers };
    }

    async function executeAiDoorScan() {
      if (!photo1Base64 && !photo2Base64) return;

      const previewBox = document.getElementById('aiPreviewBox');
      const spinner = document.getElementById('aiLoadingSpinner');
      const resultCard = document.getElementById('aiResultCard');
      const statusText = document.getElementById('photoStatusText');

      previewBox.style.display = 'block';
      resultCard.style.display = 'none';
      spinner.style.display = 'block';
      statusText.innerText = 'Analyzing door...';
      // v40: hide retry button and params panel from any prior scan
      const scanRetryRow = document.getElementById('scanRetryRow');
      if (scanRetryRow) scanRetryRow.style.display = 'none';
      const wPanel = document.getElementById('weightParamsPanel');
      if (wPanel) wPanel.style.display = 'none';

      try {
        const { url: proxyUrl, headers: proxyHeaders } = buildAiProxyRequest();

        // Ground the guess in real, confirmed photos saved on the "End Cap
        // Profile" column of the manufacturer catalog (More Tools tab), if
        // any -- an end profile is a fingerprint, and a real photo beats a
        // written description every time.
        const referenceEntries = await getReferenceImagesForScan();
        if (referenceEntries.length) {
          statusText.innerText = `Analyzing door... (grounded by ${referenceEntries.length} reference photo${referenceEntries.length === 1 ? '' : 's'})`;
        }

        const referenceIntro = referenceEntries.length
          ? `\nBefore the door photo(s) to identify, you will see ${referenceEntries.length} REFERENCE photo(s) of already-confirmed doors, each labeled with its true manufacturer and model. Use these for direct visual comparison (joint shape, stile profile, panel texture) -- weigh a strong visual match against a reference photo more heavily than the text hints below, which are only general guidance. After the reference photos, a line marked "NOW IDENTIFY THIS DOOR:" introduces the actual unlabeled photo(s) you must identify -- never confuse a reference photo for the door being identified.\n`
          : '';

        const promptText = `
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
`;
        tbody.appendChild(tr);
      });
    }

    function openManualWirePicker() {
      populateManualWireModal();
      document.getElementById('manualWireModal').classList.add('open');
    }

    function closeManualWireModal() {
      document.getElementById('manualWireModal').classList.remove('open');
    }

    function selectManualWireFromModal(wireNum, nameStr, colorStr) {
      closeManualWireModal();
      const mockResult = {
        wire: wireNum,
        name: nameStr,
        color: colorStr,
        measuredWire: wireNum,
        coils20Span: wireNum * 20.0,
        confidence: "MANUAL",
        confidenceReasons: ["Technician manually selected standard DASMA size."],
        methodAgreement: "Manual Entry Verified",
        disagreement: false
      };
      applyConfirmedWireToEngineering(mockResult);
    }

    function applyConfirmedWireToEngineering(scanObj) {
      confirmedScanWire = scanObj.wire;

      // 1. Populate Truck Stock Matcher wire input
      const oldWireSelect = document.getElementById('oldWireSelect');
      if (oldWireSelect) {
        // Find closest available option in oldWireSelect
        let closestOpt = oldWireSelect.options[0].value;
        let minDiff = 999;
        for (let i = 0; i < oldWireSelect.options.length; i++) {
          const val = parseFloat(oldWireSelect.options[i].value);
          const diff = Math.abs(val - scanObj.wire);
          if (diff < minDiff) {
            minDiff = diff;
            closestOpt = oldWireSelect.options[i].value;
          }
        }
        oldWireSelect.value = closestOpt;
        runTruckMatch();
      }

      // 2. Show Live Persistent Indicator Banner
      const indicator = document.getElementById('springScanLiveIndicator');
      if (indicator) {
        indicator.style.display = 'flex';
        document.getElementById('indicatorWireSize').innerText = `${scanObj.name}" (${scanObj.color})`;
        const indConf = document.getElementById('indicatorConfBadge');
        if (indConf) {
          indConf.innerText = scanObj.confidence === 'HIGH' ? 'HIGH CONFIDENCE' : scanObj.confidence === 'MEDIUM' ? 'MEDIUM CONFIDENCE' : 'VERIFIED';
        }
      }

      // 3. Smoothly navigate technician to Spring Engineering / Truck Stock
      switchTab('truck-stock');
      scrollToTools();

      // Feedback Toast
      alert(`✓ Spring wire size ${scanObj.name}" successfully loaded into Spring Engineering! All other door fields preserved.`);
    }

    function clearWireIndicator() {
      confirmedScanWire = null;
      document.getElementById('springScanLiveIndicator').style.display = 'none';
    }


    // ===================================================
    // PWA NATIVE INSTALL ENGINE
    // ===================================================
    let deferredInstallPrompt = null;

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent browser default mini-infobar
      e.preventDefault();
      deferredInstallPrompt = e;

      // Ensure install buttons are visibly active
      document.querySelectorAll('.install-app-btn').forEach(btn => {
        btn.style.display = 'inline-flex';
      });
      console.log('PWA native install prompt captured & ready');
    });

    window.addEventListener('appinstalled', () => {
      deferredInstallPrompt = null;
      console.log('DoorMathPro successfully installed as PWA');
      document.querySelectorAll('.install-app-btn').forEach(btn => {
        btn.innerText = '✓ Installed';
        btn.style.opacity = '0.7';
      });
    });

    async function promptPWAInstall() {
      // If already running in standalone app mode
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
      if (isStandalone) {
        alert('DoorMathPro is already installed and running as a standalone app!');
        return;
      }

      // If browser captured the native install prompt (Android Chrome / Edge)
      if (deferredInstallPrompt) {
        try {
          deferredInstallPrompt.prompt();
          const choice = await deferredInstallPrompt.userChoice;
          if (choice && choice.outcome === 'accepted') {
            console.log('User accepted native PWA install');
            deferredInstallPrompt = null;
            return;
          }
        } catch (err) {
          console.warn('Native install prompt trigger error:', err);
        }
      }

      // If native prompt unavailable (iOS Safari, or dismissed), open the visual install guide modal
      openInstallModal();
    }

    function openInstallModal() {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      const iosEl = document.getElementById('iosInstallSteps');
      const androidEl = document.getElementById('androidInstallSteps');
      if (iosEl) iosEl.style.display = isIOS ? 'block' : 'none';
      if (androidEl) androidEl.style.display = isIOS ? 'none' : 'block';

      const modal = document.getElementById('installModal');
      if (modal) modal.classList.add('open');
    }

    function closeInstallModal() {
      const modal = document.getElementById('installModal');
      if (modal) modal.classList.remove('open');
    }

    // Initial calculation on page load
    window.addEventListener('DOMContentLoaded', () => {
      populateDrumTable();
      handleDrumChange();
      handleMfgChange();
      populateMfgTable();
      populateWireSelects();
      runTruckMatch();
      runSpringSizer();
      calculateDoorWeight();
      calcTwentyCoil();
      calcODtoID();
      runDirectIPPT();
      updateOnlineStatus();
      populateManualWireModal();
    });
  