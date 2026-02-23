const ADMIN_EMAIL = "wsdmpresh@gmail.com";
const ADMIN_PASS = "Wisdomfx22a";

const countryData = {
    "USA": [38.90, -77.03], "UK": [51.50, -0.12], "Nigeria": [9.07, 7.39],
    "Germany": [52.52, 13.40], "France": [48.85, 2.35], "India": [28.61, 77.20],
    "China": [39.90, 116.40], "Japan": [35.67, 139.65], "Brazil": [-15.79, -47.88],
    "Canada": [45.42, -75.69], "Australia": [-35.28, 149.13], "South Africa": [-33.92, 18.42],
    "Russia": [55.75, 37.61], "Mexico": [19.43, -99.13], "UAE": [24.45, 54.37],
    "Afghanistan": [34.52, 69.17], "Albania": [41.32, 19.81], "Algeria": [36.75, 3.05],
    "Argentina": [-38.41, -63.61], "Bangladesh": [23.81, 90.41], "Belgium": [50.85, 4.35],
    "Egypt": [30.04, 31.23], "Ghana": [5.60, -0.18], "Italy": [41.90, 12.49],
    "Kenya": [-1.29, 36.82], "Netherlands": [52.36, 4.90], "Pakistan": [33.68, 73.04],
    "Saudi Arabia": [24.71, 46.67], "Singapore": [1.35, 103.81], "Spain": [40.41, -3.70],
    "Turkey": [39.93, 32.85], "Vietnam": [21.02, 105.83]
};

const countries = Object.keys(countryData).sort();
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
