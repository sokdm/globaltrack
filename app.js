const ADMIN_EMAIL = "wsdmpresh@gmail.com";
const ADMIN_PASS = "Wisdomfx22a";

const countryData = {
    "Afghanistan": [34.52, 69.17], "Albania": [41.32, 19.81], "Algeria": [36.75, 3.05],
    "Andorra": [42.50, 1.52], "Angola": [-8.83, 13.23], "Antigua and Barbuda": [17.12, -61.84],
    "Argentina": [-38.41, -63.61], "Armenia": [40.17, 44.50], "Australia": [-35.28, 149.13],
    "Austria": [48.20, 16.37], "Azerbaijan": [40.40, 49.86], "Bahamas": [25.03, -77.39],
    "Bahrain": [26.22, 50.58], "Bangladesh": [23.81, 90.41], "Barbados": [13.10, -59.61],
    "Belarus": [53.90, 27.56], "Belgium": [50.85, 4.35], "Belize": [17.18, -88.49],
    "Benin": [6.49, 2.62], "Bhutan": [27.51, 90.43], "Bolivia": [-16.29, -63.58],
    "Bosnia and Herzegovina": [43.91, 17.67], "Botswana": [-24.62, 25.92], "Brazil": [-15.79, -47.88],
    "Brunei": [4.53, 114.72], "Bulgaria": [42.69, 23.32], "Burkina Faso": [12.37, -1.51],
    "Burundi": [-3.42, 29.36], "Cambodia": [11.55, 104.92], "Cameroon": [3.84, 11.50],
    "Canada": [45.42, -75.69], "Cape Verde": [14.91, -23.50], "Central African Republic": [4.36, 18.55],
    "Chad": [12.13, 15.05], "Chile": [-33.44, -70.66], "China": [39.90, 116.40],
    "Colombia": [4.71, -74.07], "Comoros": [-11.70, 43.25], "Congo": [-4.26, 15.24],
    "Costa Rica": [9.92, -84.09], "Croatia": [45.81, 15.98], "Cuba": [23.11, -82.36],
    "Cyprus": [35.18, 33.38], "Czech Republic": [50.07, 14.43], "Denmark": [55.67, 12.56],
    "Djibouti": [11.57, 43.15], "Dominica": [15.41, -61.37], "Dominican Republic": [18.73, -70.16],
    "Ecuador": [-0.18, -78.46], "Egypt": [30.04, 31.23], "El Salvador": [13.69, -89.21],
    "Equatorial Guinea": [3.75, 8.78], "Eritrea": [15.32, 38.92], "Estonia": [59.43, 24.75],
    "Eswatini": [-26.30, 31.13], "Ethiopia": [9.00, 38.75], "Fiji": [-18.12, 178.44],
    "Finland": [60.16, 24.93], "France": [48.85, 2.35], "Gabon": [0.41, 9.45],
    "Gambia": [13.44, -16.57], "Georgia": [41.71, 44.82], "Germany": [52.52, 13.40],
    "Ghana": [5.60, -0.18], "Greece": [37.98, 23.72], "Grenada": [12.05, -61.75],
    "Guatemala": [14.63, -90.50], "Guinea": [9.64, -13.57], "Guinea-Bissau": [11.86, -15.58],
    "Guyana": [6.80, -58.15], "Haiti": [18.59, -72.30], "Honduras": [14.07, -87.20],
    "Hungary": [47.49, 19.04], "Iceland": [64.14, -21.94], "India": [28.61, 77.20],
    "Indonesia": [-6.20, 106.84], "Iran": [35.68, 51.38], "Iraq": [33.31, 44.36],
    "Ireland": [53.34, -6.26], "Israel": [31.76, 35.21], "Italy": [41.90, 12.49],
    "Jamaica": [17.97, -76.79], "Japan": [35.67, 139.65], "Jordan": [31.94, 35.92],
    "Kazakhstan": [51.16, 71.42], "Kenya": [-1.29, 36.82], "Kiribati": [1.33, 172.98],
    "Kuwait": [29.37, 47.97], "Kyrgyzstan": [42.87, 74.59], "Laos": [17.97, 102.63],
    "Latvia": [56.94, 24.10], "Lebanon": [33.89, 35.50], "Lesotho": [-29.61, 28.23],
    "Liberia": [6.31, -10.80], "Libya": [32.88, 13.19], "Liechtenstein": [47.14, 9.52],
    "Lithuania": [54.68, 25.27], "Luxembourg": [49.61, 6.13], "Madagascar": [-18.87, 47.50],
    "Malawi": [-13.96, 33.77], "Malaysia": [3.13, 101.68], "Maldives": [4.17, 73.50],
    "Mali": [12.63, -8.00], "Malta": [35.89, 14.50], "Marshall Islands": [7.11, 171.18],
    "Mauritania": [18.07, -15.99], "Mauritius": [-20.34, 57.50], "Mexico": [19.43, -99.13],
    "Micronesia": [6.91, 158.18], "Moldova": [47.01, 28.86], "Monaco": [43.73, 7.42],
    "Mongolia": [47.91, 106.88], "Montenegro": [42.70, 19.37], "Morocco": [34.02, -6.84],
    "Mozambique": [-25.96, 32.57], "Myanmar": [19.76, 96.07]
};

const countries = Object.keys(countryData).concat([
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
    "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "UAE", "UK", "USA", "Uruguay",
    "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
]).sort();

let shipments = {};
let mapInterval = null;

document.addEventListener('DOMContentLoaded', function() {
    loadData();
    populateCountries();
    if(document.getElementById('loginScreen')) checkAuth();
});

function loadData() {
    const saved = localStorage.getItem('globaltrack_shipments');
    if(saved) shipments = JSON.parse(saved);
}

function saveData() {
    localStorage.setItem('globaltrack_shipments', JSON.stringify(shipments));
}

function populateCountries() {
    const s = document.getElementById('sCountry');
    const r = document.getElementById('rCountry');
    if(!s) return;
    countries.forEach(c => {
        s.add(new Option(c, c));
        r.add(new Option(c, c));
    });
}

function checkStopStatus() {
    const status = document.getElementById('shipStatus').value;
    const box = document.getElementById('stopReasonBox');
    if(status === 'Stopped') box.classList.remove('hidden');
    else box.classList.add('hidden');
}

function login() {
    const e = document.getElementById('adminEmail').value.trim();
    const p = document.getElementById('adminPass').value;
    if(e === ADMIN_EMAIL && p === ADMIN_PASS) {
        sessionStorage.setItem('admin', 'true');
        showDashboard();
    } else {
        document.getElementById('loginError').textContent = 'Invalid credentials!';
    }
}

function logout() {
    sessionStorage.removeItem('admin');
    location.reload();
}

function checkAuth() {
    if(sessionStorage.getItem('admin')) showDashboard();
}

function showDashboard() {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('adminDashboard').classList.remove('hidden');
    updateStats();
    loadShipmentsList();
}

function generateTrackingNumber() {
    return 'TRK' + Date.now().toString(36).toUpperCase().slice(-8);
}

function saveShipment() {
    const sName = document.getElementById('sName').value.trim();
    const sCountry = document.getElementById('sCountry').value;
    const sCity = document.getElementById('sCity').value.trim();
    const sAddress = document.getElementById('sAddress').value.trim();
    const rName = document.getElementById('rName').value.trim();
    const rCountry = document.getElementById('rCountry').value;
    const rCity = document.getElementById('rCity').value.trim();
    const rAddress = document.getElementById('rAddress').value.trim();
    const depDate = document.getElementById('depDate').value;
    const estDate = document.getElementById('estDate').value;
    const status = document.getElementById('shipStatus').value;
    const stopReason = document.getElementById('stopReason').value.trim();
    const editingNum = document.getElementById('editingTrackNum').value;
    
    if(!sName || !sCountry || !sCity || !sAddress || !rName || !rCountry || !rCity || !rAddress || !depDate || !estDate) {
        alert('Fill all fields!');
        return;
    }
    if(status === 'Stopped' && !stopReason) {
        alert('Enter stop reason!');
        return;
    }
    
    let trackNum;
    const sCoords = countryData[sCountry] || [20,0];
    const rCoords = countryData[rCountry] || [20,0];
    
    if(editingNum) {
        trackNum = editingNum;
        shipments[trackNum] = {
            ...shipments[trackNum],
            sender: {name: sName, country: sCountry, city: sCity, address: sAddress},
            receiver: {name: rName, country: rCountry, city: rCity, address: rAddress},
            departureDate: depDate, estimatedArrival: estDate, status: status,
            stopReason: status === 'Stopped' ? stopReason : '',
            startCoords: sCoords, endCoords: rCoords
        };
        alert('Updated!');
    } else {
        trackNum = generateTrackingNumber();
        shipments[trackNum] = {
            trackingNumber: trackNum,
            sender: {name: sName, country: sCountry, city: sCity, address: sAddress},
            receiver: {name: rName, country: rCountry, city: rCity, address: rAddress},
            departureDate: depDate, estimatedArrival: estDate, status: status,
            stopReason: status === 'Stopped' ? stopReason : '',
            startCoords: sCoords, endCoords: rCoords,
            currentProgress: 0, lastUpdate: Date.now()
        };
        document.getElementById('generatedTracking').classList.remove('hidden');
        document.getElementById('displayGeneratedNum').textContent = trackNum;
    }
    saveData();
    updateStats();
    loadShipmentsList();
    if(!editingNum) setTimeout(resetForm, 2000);
}

function editShipment(trackNum) {
    const s = shipments[trackNum];
    if(!s) return;
    document.getElementById('editingTrackNum').value = trackNum;
    document.getElementById('formTitle').textContent = 'Edit: ' + trackNum;
    document.getElementById('saveBtn').textContent = 'Update';
    document.getElementById('cancelEdit').style.display = 'inline-block';
    document.getElementById('generatedTracking').classList.add('hidden');
    document.getElementById('sName').value = s.sender.name;
    document.getElementById('sCountry').value = s.sender.country;
    document.getElementById('sCity').value = s.sender.city || '';
    document.getElementById('sAddress').value = s.sender.address;
    document.getElementById('rName').value = s.receiver.name;
    document.getElementById('rCountry').value = s.receiver.country;
    document.getElementById('rCity').value = s.receiver.city || '';
    document.getElementById('rAddress').value = s.receiver.address;
    document.getElementById('depDate').value = s.departureDate;
    document.getElementById('estDate').value = s.estimatedArrival;
    document.getElementById('shipStatus').value = s.status;
    document.getElementById('stopReason').value = s.stopReason || '';
    checkStopStatus();
}

function resetForm() {
    document.getElementById('editingTrackNum').value = '';
    document.getElementById('formTitle').textContent = 'Create New Shipment';
    document.getElementById('saveBtn').textContent = 'Generate & Save';
    document.getElementById('cancelEdit').style.display = 'none';
    document.getElementById('generatedTracking').classList.add('hidden');
    ['sName','sCity','sAddress','rName','rCity','rAddress','depDate','estDate','stopReason'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('sCountry').value = '';
    document.getElementById('rCountry').value = '';
    document.getElementById('shipStatus').value = 'Pending';
    checkStopStatus();
}

function copyTracking() {
    const num = document.getElementById('displayGeneratedNum').textContent;
    navigator.clipboard.writeText(num).then(() => alert('Copied: ' + num));
}

function updateStats() {
    const total = Object.keys(shipments).length;
    const transit = Object.values(shipments).filter(s => s.status === 'In Transit').length;
    const stopped = Object.values(shipments).filter(s => s.status === 'Stopped').length;
    const delivered = Object.values(shipments).filter(s => s.status === 'Delivered').length;
    document.getElementById('totalCount').textContent = total;
    document.getElementById('transitCount').textContent = transit;
    document.getElementById('stoppedCount').textContent = stopped;
    document.getElementById('deliveredCount').textContent = delivered;
}

function loadShipmentsList() {
    const tbody = document.getElementById('shipmentsList');
    const empty = document.getElementById('emptyState');
    const table = document.getElementById('shipmentsTable');
    if(!tbody) return;
    const arr = Object.values(shipments);
    if(arr.length === 0) {
        table.style.display = 'none';
        empty.style.display = 'block';
        return;
    }
    table.style.display = 'table';
    empty.style.display = 'none';
    tbody.innerHTML = arr.map(s => '<tr onclick="editShipment(\'' + s.trackingNumber + '\')"><td><strong>' + s.trackingNumber + '</strong></td><td>' + s.sender.name + '<br><small>' + s.sender.city + '</small></td><td>' + s.receiver.name + '<br><small>' + s.receiver.city + '</small></td><td>' + s.sender.country + ' → ' + s.receiver.country + '</td><td><span class="status-badge status-' + s.status.toLowerCase().replace(' ','-') + '">' + s.status + '</span></td><td><button onclick="event.stopPropagation(); editShipment(\'' + s.trackingNumber + '\')" class="btn-edit">Edit</button><button onclick="event.stopPropagation(); deleteShipment(\'' + s.trackingNumber + '\')" class="btn-delete">Delete</button></td></tr>').join('');
}

function deleteShipment(trackNum) {
    if(confirm('Delete ' + trackNum + '?')) {
        delete shipments[trackNum];
        saveData();
        updateStats();
        loadShipmentsList();
        if(document.getElementById('editingTrackNum').value === trackNum) resetForm();
    }
}

function formatDate(dateStr) {
    if(!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
}

// Add remaining country coordinates
countryData["Namibia"] = [-22.56, 17.06];
countryData["Nauru"] = [-0.52, 166.93];
countryData["Nepal"] = [27.71, 85.32];
countryData["Netherlands"] = [52.36, 4.90];
countryData["New Zealand"] = [-41.28, 174.77];
countryData["Nicaragua"] = [12.11, -86.23];
countryData["Niger"] = [13.51, 2.11];
countryData["Nigeria"] = [9.07, 7.39];
countryData["North Korea"] = [39.03, 125.76];
countryData["North Macedonia"] = [41.99, 21.43];
countryData["Norway"] = [59.91, 10.75];
countryData["Oman"] = [23.58, 58.40];
countryData["Pakistan"] = [33.68, 73.04];
countryData["Palau"] = [7.51, 134.58];
countryData["Panama"] = [8.98, -79.51];
countryData["Papua New Guinea"] = [-9.47, 147.18];
countryData["Paraguay"] = [-25.26, -57.57];
countryData["Peru"] = [-12.04, -77.04];
countryData["Philippines"] = [14.59, 120.98];
countryData["Poland"] = [52.22, 21.01];
countryData["Portugal"] = [38.72, -9.13];
countryData["Qatar"] = [25.28, 51.53];
countryData["Romania"] = [44.42, 26.10];
countryData["Russia"] = [55.75, 37.61];
countryData["Rwanda"] = [-1.94, 30.05];
countryData["Saint Kitts and Nevis"] = [17.35, -62.78];
countryData["Saint Lucia"] = [14.01, -60.98];
countryData["Saint Vincent and the Grenadines"] = [13.25, -61.20];
countryData["Samoa"] = [-13.85, -171.75];
countryData["San Marino"] = [43.94, 12.45];
countryData["Sao Tome and Principe"] = [0.33, 6.73];
countryData["Saudi Arabia"] = [24.71, 46.67];
countryData["Senegal"] = [14.71, -17.46];
countryData["Serbia"] = [44.78, 20.44];
countryData["Seychelles"] = [-4.61, 55.45];
countryData["Sierra Leone"] = [8.46, -13.26];
countryData["Singapore"] = [1.35, 103.81];
countryData["Slovakia"] = [48.14, 17.10];
countryData["Slovenia"] = [46.05, 14.50];
countryData["Solomon Islands"] = [-9.43, 159.95];
countryData["Somalia"] = [2.04, 45.34];
countryData["South Africa"] = [-33.92, 18.42];
countryData["South Korea"] = [37.56, 126.97];
countryData["South Sudan"] = [4.85, 31.58];
countryData["Spain"] = [40.41, -3.70];
countryData["Sri Lanka"] = [6.92, 79.86];
countryData["Sudan"] = [15.50, 32.55];
countryData["Suriname"] = [5.83, -55.16];
countryData["Sweden"] = [59.32, 18.06];
countryData["Switzerland"] = [46.94, 7.44];
countryData["Syria"] = [33.51, 36.27];
countryData["Taiwan"] = [25.03, 121.56];
countryData["Tajikistan"] = [38.55, 68.78];
countryData["Tanzania"] = [-6.79, 39.20];
countryData["Thailand"] = [13.75, 100.50];
countryData["Timor-Leste"] = [-8.55, 125.56];
countryData["Togo"] = [6.13, 1.21];
countryData["Tonga"] = [-21.13, -175.20];
countryData["Trinidad and Tobago"] = [10.65, -61.51];
countryData["Tunisia"] = [36.80, 10.18];
countryData["Turkey"] = [39.93, 32.85];
countryData["Turkmenistan"] = [37.96, 58.32];
countryData["Tuvalu"] = [-8.51, 179.19];
countryData["Uganda"] = [0.34, 32.58];
countryData["Ukraine"] = [50.45, 30.52];
countryData["UAE"] = [24.45, 54.37];
countryData["UK"] = [51.50, -0.12];
countryData["USA"] = [38.90, -77.03];
countryData["Uruguay"] = [-34.90, -56.16];
countryData["Uzbekistan"] = [41.29, 69.24];
countryData["Vanuatu"] = [-17.73, 168.32];
countryData["Vatican City"] = [41.90, 12.45];
countryData["Venezuela"] = [10.48, -66.90];
countryData["Vietnam"] = [21.02, 105.83];
countryData["Yemen"] = [15.36, 44.19];
countryData["Zambia"] = [-15.38, 28.35];
countryData["Zimbabwe"] = [-17.82, 31.05];

// USER TRACKING
function trackPackage() {
    const trackNum = document.getElementById('trackInput').value.trim().toUpperCase();
    if(!trackNum) { alert('Enter tracking number'); return; }
    const s = shipments[trackNum];
    if(!s) { alert('Not found!'); return; }
    
    if(mapInterval) { clearInterval(mapInterval); mapInterval = null; }
    
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('displayTrackNum').textContent = trackNum;
    
    const badge = document.getElementById('statusBadge');
    badge.textContent = s.status;
    badge.className = 'status-badge status-' + s.status.toLowerCase().replace(' ','-');
    
    document.getElementById('sName').textContent = s.sender.name;
    document.getElementById('sCountry').textContent = s.sender.country;
    document.getElementById('sCity').textContent = s.sender.city || '-';
    document.getElementById('sAddress').textContent = s.sender.address;
    document.getElementById('rName').textContent = s.receiver.name;
    document.getElementById('rCountry').textContent = s.receiver.country;
    document.getElementById('rCity').textContent = s.receiver.city || '-';
    document.getElementById('rAddress').textContent = s.receiver.address;
    document.getElementById('depDate').textContent = formatDate(s.departureDate);
    document.getElementById('estDate').textContent = formatDate(s.estimatedArrival);
    document.getElementById('curStatus').textContent = s.status;
    
    const stopRow = document.getElementById('stopReasonRow');
    const stopDisplay = document.getElementById('stopReasonDisplay');
    if(s.status === 'Stopped' && s.stopReason) {
        stopRow.classList.remove('hidden');
        stopDisplay.textContent = s.stopReason;
    } else {
        stopRow.classList.add('hidden');
    }
    
    initAnimatedMap(s);
    if(s.status === 'In Transit') startLiveTracking(trackNum);
    document.getElementById('result').scrollIntoView({behavior:'smooth'});
}

function initAnimatedMap(shipment) {
    const container = document.getElementById('map');
    if(!container) return;
    container.innerHTML = '';
    
    const map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    
    const start = shipment.startCoords || countryData[shipment.sender.country] || [20,0];
    const end = shipment.endCoords || countryData[shipment.receiver.country] || [20,0];
    
    L.marker(start, {icon: L.divIcon({html:'<div style="background:#3b82f6;width:20px;height:20px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.4);"></div>', iconSize:[20,20]})})
     .bindPopup('<b>📤 SENDER</b><br>' + shipment.sender.city + ', ' + shipment.sender.country).addTo(map);
    
    L.marker(end, {icon: L.divIcon({html:'<div style="background:#ef4444;width:20px;height:20px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.4);"></div>', iconSize:[20,20]})})
     .bindPopup('<b>📥 RECEIVER</b><br>' + shipment.receiver.city + ', ' + shipment.receiver.country).addTo(map);
    
    L.polyline([start, end], {color:'#6366f1', weight:4, opacity:0.6, dashArray:'10,10'}).addTo(map);
    
    const progress = shipment.currentProgress || 0;
    const currentPos = [start[0] + (end[0]-start[0])*progress, start[1] + (end[1]-start[1])*progress];
    
    let iconHtml;
    if(shipment.status === 'Stopped') {
        iconHtml = '<div style="background:#ef4444;width:32px;height:32px;border-radius:50%;border:3px solid white;box-shadow:0 4px 12px rgba(0,0,0,0.5);animation:shake 0.5s infinite;display:flex;align-items:center;justify-content:center;font-size:16px;">🛑</div>';
    } else {
        const icons = {'Pending':'⏳','In Transit':'🚚','Out for Delivery':'🛵','Delivered':'✅','Delayed':'⚠️'};
        const colors = {'Pending':'#f59e0b','In Transit':'#10b981','Out for Delivery':'#8b5cf6','Delivered':'#22c55e','Delayed':'#ef4444'};
        const anim = shipment.status === 'In Transit' ? 'animation:pulse 1s infinite;' : '';
        iconHtml = '<div style="background:' + colors[shipment.status] + ';width:28px;height:28px;border-radius:50%;border:3px solid white;box-shadow:0 4px 12px rgba(0,0,0,0.5);' + anim + 'display:flex;align-items:center;justify-content:center;font-size:14px;">' + icons[shipment.status] + '</div>';
    }
    
    const packageIcon = L.divIcon({html: iconHtml, iconSize: shipment.status === 'Stopped' ? [32,32] : [28,28], iconAnchor: shipment.status === 'Stopped' ? [16,16] : [14,14]});
    const packageMarker = L.marker(currentPos, {icon: packageIcon}).addTo(map);
    
    let popupContent = '<b>📦 Package Location</b><br>Status: ' + shipment.status;
    if(shipment.status === 'Stopped' && shipment.stopReason) {
        popupContent += '<br><span style="color:#ef4444;font-weight:bold;">🛑 ' + shipment.stopReason + '</span>';
    } else {
        popupContent += '<br>Progress: ' + Math.round(progress*100) + '%';
    }
    packageMarker.bindPopup(popupContent).openPopup();
    
    map.fitBounds([start, end], {padding: [80,80]});
    window.currentMap = {map: map, marker: packageMarker, start: start, end: end, shipment: shipment};
}

function startLiveTracking(trackNum) {
    mapInterval = setInterval(() => {
        const ship = shipments[trackNum];
        if(!ship || ship.status !== 'In Transit') {
            clearInterval(mapInterval);
            return;
        }
        ship.currentProgress = (ship.currentProgress || 0) + 0.02;
        if(ship.currentProgress >= 1) {
            ship.currentProgress = 1;
            ship.status = 'Delivered';
            saveData();
            clearInterval(mapInterval);
            document.getElementById('statusBadge').textContent = 'Delivered';
            document.getElementById('statusBadge').className = 'status-badge status-delivered';
            document.getElementById('curStatus').textContent = 'Delivered';
        }
        if(window.currentMap && window.currentMap.marker) {
            const s = window.currentMap.start, e = window.currentMap.end, p = ship.currentProgress;
            const newPos = [s[0] + (e[0]-s[0])*p, s[1] + (e[1]-s[1])*p];
            window.currentMap.marker.setLatLng(newPos);
            window.currentMap.marker.setPopupContent('<b>📦 Package</b><br>Progress: ' + Math.round(p*100) + '%<br>Status: ' + ship.status);
        }
        saveData();
    }, 5000);
}

const style = document.createElement('style');
style.textContent = '@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}} @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}';
document.head.appendChild(style);
